import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { INature } from './models/INatures';
import { ITeamMember } from './models/ITeamMember'; 

@Component({
  selector: 'pkutil-team-builder-grid',
  templateUrl: './team-builder-grid.component.html',
  styleUrls: ['./team-builder-grid.component.scss']
})
export class TeamBuilderGridComponent implements OnInit {

  team: ITeamMember[] = [];

  tempPokemon: ITeamMember[] = [
    {
      name: "Mudkip",
      guid: "1",
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
    },
    {
      name: "Swampert",
      guid: "2",
      img: "https://www.serebii.net/swordshield/pokemon/260.png",
      types: [
        "water",
        "ground"
      ],
      forms: [],
      abilities: [
        "torrent",
        "damp"
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
      guid: "3",
      img: "https://www.serebii.net/swordshield/pokemon/006.png",
      types: [
        "fire",
        "flying"
      ],
      forms: [],
      abilities: [
        "blaze",
        "solar-power"
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
      guid: "4",
      img: "https://www.serebii.net/swordshield/pokemon/025.png",
      types: [
        "electric"
      ],
      forms: [],
      abilities: [
        "static",
        "lightning-rod",
        ""
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
      guid: "5",
      img: "https://www.serebii.net/swordshield/pokemon/094.png",
      types: [
        "ghost",
        "poison"
      ],
      forms: [],
      abilities: [
        "cursed-body"
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
        hp: 60,
        atk: 65,
        def: 80,
        spAtk: 170,
        spDef: 95,
        spd: 130
      }
    },
    {
      name: "Meowth",
      guid: "6",
      img: "https://www.serebii.net/swordshield/pokemon/052.png",
      types: [
        "normal"
      ],
      forms: [
        "alola",
        "galar"
      ],
      abilities: [
        "pickup",
        "technician",
        "unnerve"
      ],
      megaData: {
        canMegaEvo: false,
        megaForms: []
      },
      canGigantamax: true,
      baseStats: {
        hp: 40,
        atk: 45,
        def: 35,
        spAtk: 40,
        spDef: 40,
        spd: 90
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
        hp: 40,
        atk: 45,
        def: 35,
        spAtk: 40,
        spDef: 40,
        spd: 90
      }
    }
  ];

  natures: any;
  dynaTooltip:string = "Dynamax!";
  gigaTooltip:string = "Gigantamax!";
  alignment = 'left';
  selectControl = new FormControl('');

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    // Get homebrew natures JSON 
    this.http.get('assets/json/nature.json').subscribe((res) => {
      this.natures = res;
    });

    //To be removed when generating team obj
    this.team = this.tempPokemon;
  }

  deleteMember = (id: string) => {
    let index: number = 0;

    this.team.forEach(e => {
      if (e.guid === id) {
        this.team.splice(index, 1);
      }
      index++;
    });
  }

  updateStats = () => {
    console.log(this.selectControl.value)
    let value: string[] = this.selectControl.value.split("::");
    let guid = value[0];
    let nature = value[1];

    this.team.forEach(pokemon => {
      if (pokemon.guid === guid) {
        pokemon.calcStats.atk = Math.floor((pokemon.baseStats.atk * parseFloat(value[2])) + pokemon.baseStats.atk);
        pokemon.calcStats.def = Math.floor((pokemon.baseStats.def * parseFloat(value[3])) + pokemon.baseStats.def);
        pokemon.calcStats.spd = Math.floor((pokemon.baseStats.spd * parseFloat(value[4])) + pokemon.baseStats.spd);
        pokemon.calcStats.spAtk = Math.floor((pokemon.baseStats.spAtk * parseFloat(value[5])) + pokemon.baseStats.spAtk);
        pokemon.calcStats.spDef = Math.floor((pokemon.baseStats.spDef * parseFloat(value[6])) + pokemon.baseStats.spDef);

        this.natures.forEach(( nat: INature) => {
          if (nat.name === nature) {
            pokemon.nature.name = nat.name;
            pokemon.nature.statsChange = nat.stats;
          }
        });
        console.log(pokemon)
      }

    })
    this.selectControl.setValue("");
  }
}
