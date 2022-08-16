import { Injectable } from '@angular/core';
import { ITeamMember } from '../interfaces/ITeamMember';
import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';
import { IMasterListResult, IMasterListResults } from '../interfaces/IMasterList';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {
  masterListUri: string = "https://pokeapi.co/api/v2/pokemon-form?limit=100000";
  masterList: IMasterListResult[] = [];

  constructor(private http: HttpClient) { }

  addMember = async (userInput: string, location: string): Promise<ITeamMember> => {
    let guid = UUID.UUID();

    let request: string = this.filterForPokeAPI(userInput.toLowerCase());

    if (request === "missingno") {
      return this.returnMissingNo("Unable to find a Pokemon by that name.");
    }

    try {
      let masterData = await this.getMasterData(request, guid);
      let detailedData = await this.getDexDetails(masterData);
      return await this.getPokeImg(detailedData);
    } catch (error) {
      return this.returnMissingNo(error);
    }

  };

  getMasterData = async (request: string, guid: string) : Promise<any> => {
    const baseData: Promise<any> = new Promise((resolve) => {
      setTimeout(() => {
        let data = {
          name: request,
          guid: guid
        }
        
        resolve(data);
      }, 50);
    });

    return baseData;
  };

  /*
  Note: Could make this service reusable by skipping these extra details for
        the team builder but getting the extra details for the PokeDex.
  */ 

  getDexDetails = (data: any) : any => {
    const detailedData: Promise<any> = new Promise((resolve) => {
      data.types = ["water"];
      
      setTimeout(() => {
        console.log(`Masterlist: ${this.masterList[0].name}`);
        resolve(data);
      }, 50);
    });
    return detailedData;
  };

  getPokeImg = async (data: any): Promise<ITeamMember> => {
    return {
      name: `${data.name}`,
      guid: `${data.guid}`,
      img: "assets/MissingNo.webp",
      types: data.types,
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
        hp: 10,
        atk: 10,
        def: 10,
        spAtk: 10,
        spDef: 10,
        spd: 10
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
  }

  // Could benefit from being async? Does it need to be?
  getMasterList = () => {
    this.http.get<IMasterListResults>(this.masterListUri).subscribe((res) => {
      this.masterList = res.results;
    });
  };

  filterForPokeAPI = (userInput: string) : string => {
    let request: string | undefined;
    let wackyNames = [ "pidgeot", "mew"];

    wackyNames.forEach(e => {
      if ( e === userInput ) request = e;
    });

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
