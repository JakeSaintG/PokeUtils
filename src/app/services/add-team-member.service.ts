import { Injectable, OnInit } from '@angular/core';
import { ITeamMember } from '../interfaces/ITeamMember';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})

export class AddTeamMemberService {
  hasMasterList: boolean = false;

  constructor() { }

  addMember = async (request: string): Promise<ITeamMember> => {
    let guid = UUID.UUID();

    try {
      let masterData = await this.getMemberMasterData(request, guid);
      let detailedData = await this.getMemberDetails(masterData);
      return await this.getMemberImg(detailedData);
    } catch (error) {
      console.log(`MissingNo was generated due to: ${error}`);
      return this.returnMissingNo();
    }

  };

  getMemberMasterData = async (request: string, guid: string) : Promise<any> => {
    const baseData: Promise<any> = new Promise((resolve) => {
      setTimeout(() => {
        let data = {
          name: request,
          guid: guid
        }
        
        console.log("got some details");
        resolve(data);
      }, 500);
    });

    return baseData;
  };

  getMemberDetails = (data: any) : any => {
    const detailedData: Promise<any> = new Promise((resolve) => {
      data.types = ["water"];
      
      setTimeout(() => {
        console.log("getting some other details");
        console.log(`Masterlist: ${this.hasMasterList}`);
        resolve(data);
      }, 500);
    });
    return detailedData;
  };

  getMasterList = () => {
    console.log("getting master Pokemon list")
    this.hasMasterList = true;
  };

  getMemberImg = async (data: any): Promise<ITeamMember> => {
    
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
        hp: 255,
        atk: 255,
        def: 255,
        spAtk: 255,
        spDef: 255,
        spd: 255
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

  returnMissingNo = async (): Promise<ITeamMember> => {
    let guid = UUID.UUID();
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
        hp: 255,
        atk: 255,
        def: 255,
        spAtk: 255,
        spDef: 255,
        spd: 255
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
