import { Injectable } from '@angular/core';
import { ITeamMember } from '../interfaces/ITeamMember';
import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';
import { IMasterListResult, IMasterListResults } from '../interfaces/IMasterList';

@Injectable({providedIn: 'root'})

export class PokeApiService {
  baseUri: string = "https://pokeapi.co/api/v2/";
  masterListUri: string = "https://pokeapi.co/api/v2/pokemon-form?limit=100000";
  masterList: IMasterListResult[] = [];

  constructor(private http: HttpClient) { }

  addMember = async (userInput: string, location: string): Promise<ITeamMember> => {
    let guid = UUID.UUID();
    let request: string = this.filterForPokeAPI(userInput.toLowerCase());

    if (request === "missingno") return this.returnMissingNo("Unable to find a Pokemon by that name.");

    try {
      let masterData = await this.getMasterData(request, guid);
      let detailedData = await this.getDexDetails(masterData);
      return await this.getPokeImg(detailedData);
    } catch (error) {
      return this.returnMissingNo(error);
    };

  };

  getMasterData = async (request: string, guid: string) : Promise<any> => {

    let data = await this.http
      .get<Promise<any>>(`https://pokeapi.co/api/v2/pokemon/${request}`)
      .toPromise();

    let types: string[] = data.types.map((e: any) => {
      return e.type.name;
    });

    let abilities: string[] = data.abilities.map((e: any) => {
      return e.ability.name;
    });

    //TODO: NEED TO STILL GET FORMS, MEGA. GMAX, etc!

    let stats =  {
      hp: data.stats[0].base_stat,
      atk: data.stats[0].base_stat,
      def: data.stats[1].base_stat,
      spAtk: data.stats[3].base_stat,
      spDef: data.stats[4].base_stat,
      spd: data.stats[5].base_stat,
    };

    return {
      name: data.name,
      guid: `${guid}`,
      img: "assets/MissingNo.webp",
      types: types,
      forms: [],
      abilities: abilities,
      megaData: {
        canMegaEvo: false,
        megaForms: []
      },
      canGigantamax: false,
      baseStats: stats,
      nature: {
        name: "base",
        statsChange: {}
      },
      calcStats: Object.assign({}, stats) //To set value and avoid referencing "stats".
    };
  };

  /*
  Note: Could make this service reusable by skipping these extra details for
        the team builder but getting the extra details for the PokeDex.
  */ 

  getDexDetails = async (data: any) : Promise<any> => {
    // let dexDetails = await this.http
      // .get<Promise<any>>(`https://pokeapi.co/api/v2/pokemon-species/${data.name}`)
      // .toPromise();
  
    // return dexDetails;
    
    const detailedData: Promise<any> = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      });
    });
    return detailedData;
  };

  getPokeImg = async (data: any): Promise<ITeamMember> => {
    let dexDetails = await this.http
      .get<Promise<any>>(`https://pokeapi.co/api/v2/pokemon-form/${data.name}`)
      .toPromise();
    
    data.img = dexDetails.sprites.front_default;
    return data;
  }

  // Could benefit from being async? Does it need to be?
  getMasterList = () => {
    this.http.get<IMasterListResults>(this.masterListUri).subscribe((res) => {
      this.masterList = res.results;
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
      }
    ];

    wackyNames.forEach(e => { if ( e.possibleInputs.includes(userInput) ) request = e.APIName;});

    if ( !request ) {
      let firstMatch = this.masterList.find(e => e.name.includes(userInput));
      console.log(firstMatch);
      request = firstMatch?.name;
    };

    if ( !request ) request = "missingno";

    return request;
  };

  returnMissingNo = async (error: unknown): Promise<ITeamMember> => {
    let guid = UUID.UUID();
    console.log(`MissingNo was generated due to: ${error}`);
    return {
      name: `MissingNo`,
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
      megaData: {
        canMegaEvo: false,
        megaForms: []
      },
      canGigantamax: false,
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
