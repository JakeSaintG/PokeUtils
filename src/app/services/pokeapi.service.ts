import { Injectable } from '@angular/core';
import { IForm, ITeamMember } from '../interfaces/ITeamMember';
import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';
import { IListResult, IListResults } from '../interfaces/IMasterList';

@Injectable({providedIn: 'root'})

export class PokeApiService {
  baseUri: string = "https://pokeapi.co/api/v2/";
  masterListUri: string = "https://pokeapi.co/api/v2/pokemon-form?limit=100000";
  masterList: IListResult[] = [];
  megaList: IListResult[] = [];
  gmaxList: IListResult[] = [];
  specialForms: string[] = [`unown`,`burmy`,`deerling`,`shellos`,`gastrodon`,`arceus`,`cherrim`,`vivillon`,`deerling`,`sawsbuck`,`flabebe`,`floette`,`florges`,`furfrou`,`xerneas`,`silvally`]

  constructor(private http: HttpClient) { }

  addMember = async (userInput: string, location: string, guid: string): Promise<ITeamMember> => {

    let request: string = this.filterForPokeAPI(userInput.toLowerCase());

    if (guid == "")  guid = UUID.UUID();
    if (request === "missingno") return this.returnMissingNo("Unable to find a Pokemon by that name.");

    try {
      let masterData = await this.getMasterData(request, guid);
      let detailedData = await this.getSpeciesData(masterData);
      let finalizedData = await this.getFormData(detailedData);
      return finalizedData ;
    } catch (error) {
      return this.returnMissingNo(error);
    };
  };

  getMasterData = async (request: string, guid: string) : Promise<any> => {
    let megaForms: string[] = [];
    let alternateForms: string[] = [];
    let gigantamaxForms: string[] = [];

    let data = await this.http
      .get<Promise<any>>(`https://pokeapi.co/api/v2/pokemon/${request}`)
      .toPromise();

    let types: string[] = data.types.map((e: any) => {
      return e.type.name;
    });

    let abilities: string[] = data.abilities.map((e: any) => {
      return e.ability.name;
    });

    this.gmaxList.forEach(e => {
      if (e.name.includes("gmax") && e.name.includes(request)) gigantamaxForms.push(e.name);
    })

    this.megaList.forEach(e => {
      if (e.name.includes("mega") && e.name.includes(request)) megaForms.push(e.name);
    })

    let urls = {
      formsUrl: data.forms[0].url,
      speciesUrl: data.species.url
    }

    let isAdvancedForm: boolean = data.name.includes("-mega") || data.name.includes("-gmax") ?  true : false;

    let stats =  {
      hp: data.stats[0].base_stat,
      atk: data.stats[0].base_stat,
      def: data.stats[1].base_stat,
      spAtk: data.stats[3].base_stat,
      spDef: data.stats[4].base_stat,
      spd: data.stats[5].base_stat,
    };

    return {
      urls: urls,
      name: data.name,
      id: data.id,
      guid: `${guid}`,
      types: types,
      forms: alternateForms,
      abilities: abilities,
      isAdvancedForm: isAdvancedForm,
      megaForms: megaForms,
      gigantamaxForms: gigantamaxForms,
      baseStats: stats,
      nature: {
        name: "base",
        statsChange: {}
      },
      calcStats: Object.assign({}, stats) //To set value and avoid referencing "stats".
    };
  };

  getSpeciesData = async (data: any) : Promise<any> => {
    let speciesData = await this.http
      .get<Promise<any>>(`${data.urls.speciesUrl}`)
      .toPromise();

    if (this.specialForms.includes(data.name)) {

      let specForms = this.masterList.filter(e => e.name.includes(data.name));
      data.forms = [];

      //TODO: There is an issue sending special forms back...
      specForms.forEach(e => {
        data.forms.push({pokemon: {name: e.name}});
      });

    } else {

      data.forms = speciesData.varieties.filter((e: IForm) => 
        !e.pokemon.name.includes('-mega')
      );

      data.forms = data.forms.filter((e: IForm) => 
        !e.pokemon.name.includes('-gmax')
      );

      data.forms = data.forms.filter((e: IForm) => 
        this.removeJunkForms(e.pokemon.name)
      );

    }

    return data;
  };

  getFormData = async (data: any): Promise<ITeamMember> => {
    let formsData = await this.http
      .get<Promise<any>>(`${data.urls.formsUrl}`)
      .toPromise();

    data.img = formsData.sprites.front_default;
    delete formsData.urls;
    return data;
  }

  preparePokeLists = () => {
    this.http.get<IListResults>(this.masterListUri).subscribe((res) => {
      this.masterList = res.results;

      this.masterList.forEach(e => {
        if (e.name.includes("-mega")) this.megaList.push(e);
        if (e.name.includes("-gmax")) this.gmaxList.push(e);
      })

      this.masterList.forEach((e, i, arr) => {
        if (e.name.includes("-mega") || e.name.includes("-gmax")) arr.splice(i, 1);
      })
    });
  };

  filterForPokeAPI = (userInput: string) : string => {
    let request: string | undefined;
    let wackyNames = [{
        APIName: "pidgeot",
        possibleInputs: ["pidgeot"]
      },
      {
        APIName: "mew",
        possibleInputs: ["mew"]
      },
      {
        APIName: "type-null",
        possibleInputs: ["type-null","typenull","type null","type:null","type: null"]
      },
      {
        APIName: "farfetchd",
        possibleInputs: ["farfetchd","farfetch'd","farfetch-d","farfetch d","farfetch"]
      },
      {
        APIName: "flabebe",
        possibleInputs: ["flabébé","flabebé","flabébe","flabebe"]
      },
      {
        APIName: "nidoran-f",
        possibleInputs: ["nidoran-f","nidoranf","nidoran f","nidoran♀","nidoran female","nidoran ♀","female nidoran"]
      },
      {
        APIName: "nidoran-m",
        possibleInputs: ["nidoran-m","nidoranm","nidoran m","nidoran♂","nidoran male","nidoran ♂","male nidoran"]
      }
    ];

    wackyNames.find(e => { if ( e.possibleInputs.includes(userInput) ) request = e.APIName;});

    if ( !request ) request = (this.specialForms.find(e => e.includes(userInput)));
    if ( !request ) request = (this.masterList.find(e => e.name.includes(userInput))?.name);
    if ( !request ) request = (this.megaList.find(e => e.name.includes(userInput))?.name);
    if ( !request ) request = (this.gmaxList.find(e => e.name.includes(userInput))?.name);
    if ( !request ) request = "missingno";

    return request;
  };

  removeJunkForms = (nameToCheck: string) => {
    let junkForms: string[] = ["-totem", "-cap", "-star", "-spiky"];
    return junkForms.some(e => nameToCheck.includes(e)) ? false : true;
  };

  returnMissingNo = async (error: unknown): Promise<ITeamMember> => {
    let guid = UUID.UUID();
    console.log(`MissingNo was generated due to: ${error}`);
    return {
      name: `MissingNo`,
      id: 0,
      guid: `${guid}`,
      img: "assets/MissingNo.webp",
      types: [
        "Ň̷̨ȕ̷͕l̷͇̑l̸̠̏"
      ],
      forms: [],
      abilities: [
        "duplicate",
        "crash game"
      ],
      isAdvancedForm: false,
      megaForms: [],
      gigantamaxForms: [],
      baseStats: {
        hp: 0,
        atk: 0,
        def: 0,
        spAtk: 0,
        spDef: 0,
        spd: 0
      },
      nature: {
        name: "base",
        statsChange: {
          atk: 0,
          def: 0,
          spAtk: 0,
          spDef: 0,
          spd: 0
        }
      },
      calcStats: {
        hp: 50,
        atk: 70,
        def: 50,
        spAtk: 50,
        spDef: 50,
        spd: 40
      }
    };
  };
}
