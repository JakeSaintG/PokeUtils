import { Component, OnInit } from '@angular/core';
import { ITeamMember } from './models/ITeamMember';

@Component({
  selector: 'pkutil-team-builder-grid',
  templateUrl: './team-builder-grid.component.html',
  styleUrls: ['./team-builder-grid.component.scss']
})
export class TeamBuilderGridComponent implements OnInit {

  tempPokemon: ITeamMember[] = [
    {
      name: "Mudkip",
      img: "https://www.serebii.net/swordshield/pokemon/258.png",
      types: [
        "water"
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
      }
    },
    {
      name: "Swampert",
      img: "https://www.serebii.net/swordshield/pokemon/260.png",
      types: [
        "water",
        "ground"
      ],
      megaData: {
        canMegaEvo: true,
        megaForms: ["Mega"]
      },
      canGigantamax: false,
      baseStats: {
        hp: 100,
        atk: 110,
        def: 90,
        spAtk: 85,
        spDef: 90,
        spd: 60
      }
    },
    {
      name: "Charizard",
      img: "https://www.serebii.net/swordshield/pokemon/006.png",
      types: [
        "fire",
        "flying"
      ],
      megaData: {
        canMegaEvo: true,
        megaForms: ["Mega X", "Mega Y"]
      },
      canGigantamax: true,
      baseStats: {
        hp: 78,
        atk: 84,
        def: 78,
        spAtk: 109,
        spDef: 85,
        spd: 100
      }
    },
    {
      name: "Pikachu",
      img: "https://www.serebii.net/swordshield/pokemon/025.png",
      types: [
        "electric"
      ],
      megaData: {
        canMegaEvo: false,
        megaForms: []
      },
      canGigantamax: true,
      baseStats: {
        hp: 35,
        atk: 55,
        def: 30,
        spAtk: 50,
        spDef: 40,
        spd: 90
      }
    },
    {
      name: "Gengar",
      img: "https://www.serebii.net/swordshield/pokemon/094.png",
      types: [
        "ghost",
        "poison"
      ],
      megaData: {
        canMegaEvo: true,
        megaForms: ["Mega"]
      },
      canGigantamax: true,
      baseStats: {
        hp: 60,
        atk: 65,
        def: 80,
        spAtk: 170,
        spDef: 95,
        spd: 130
      }
    }
  ];

  dynaTooltip:string = "Dynamax!";
  gigaTooltip:string = "Gigantamax!";

  constructor() { }

  ngOnInit(): void {
  }

}
