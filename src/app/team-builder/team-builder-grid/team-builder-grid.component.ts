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
      stats: {
        hp: 50,
        attack: 70,
        defense: 50,
        spAtk: 50,
        spDef: 50,
        speed: 40
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
      stats: {
        hp: 100,
        attack: 100,
        defense: 100,
        spAtk: 100,
        spDef: 100,
        speed: 100
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
      stats: {
        hp: 100,
        attack: 100,
        defense: 100,
        spAtk: 100,
        spDef: 100,
        speed: 100
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
      stats: {
        hp: 35,
        attack: 55,
        defense: 30,
        spAtk: 50,
        spDef: 40,
        speed: 90
    }
    }
    ,
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
      stats: {
        hp: 60,
        attack: 65,
        defense: 80,
        spAtk: 170,
        spDef: 95,
        speed: 130
      }
    }
  ];

  dynaTooltip:string = "Dynamax!";
  gigaTooltip:string = "Gigantamax!";

  constructor() { }

  ngOnInit(): void {
  }

}
