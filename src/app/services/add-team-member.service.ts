import { Injectable } from '@angular/core';
import { ITeamMember } from '../interfaces/ITeamMember';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})

export class AddTeamMemberService {

  constructor() { }

  addMember = async (request: string): Promise<ITeamMember> => {
    let guid = UUID.UUID();

    console.log(request);

    return {
      name: `${request}`,
      guid: `${guid}`,
      img: "https://www.serebii.net/swordshield/pokemon/258.png",
      types: [
        "water"
      ],
      forms: [],
      abilities: [
        "torrent",
        "damp"
      ],
      megaData: {
        canMegaEvo: false,
        megaForms: []
      },
      canGigantamax: false,
      baseStats: {
        hp: 50,
        atk: 70,
        def: 50,
        spAtk: 50,
        spDef: 50,
        spd: 40
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
