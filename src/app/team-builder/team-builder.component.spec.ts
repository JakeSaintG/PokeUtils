import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamBuilderComponent } from './team-builder.component';
import { ModalService } from '@healthcatalyst/cashmere';
import { ITeamMember } from '../interfaces/ITeamMember';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StatNamePipe } from '../pipes/stat-name.pipe';
import { AbilityNamePipe } from '../pipes/ability-name.pipe';
import { StatValuePipe } from '../pipes/stat-value.pipe';

describe('TeamBuilderComponent', () => {
  let component: TeamBuilderComponent;
  let fixture: ComponentFixture<TeamBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBuilderComponent , StatNamePipe, StatValuePipe, AbilityNamePipe ],
      imports: [HttpClientTestingModule],
      providers: [ModalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let testTeam: ITeamMember[] = [
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

  describe('deleteTeamMember', () => {

    it('should delete a Pokemon object', () => {
      //Arrange
      component.team = testTeam;

      //Act
      component.deleteMember("4");
      let guids: string[] = [];
      component.team.forEach(element => {
        guids.push(element.guid);
      });
      
      //Assert
      expect(guids.length).toEqual(5);
      expect(guids).not.toContain("4");
      expect(guids).toContain("2");
    });
  });

  describe('updateStats', () => {
    it('should update a PKMN calculated stats when a nature is chosen', () => {
      //Arrange
      component.team = testTeam;
      component.selectControl.setValue('3::modest::-0.1::0::0::0.1::0');
      component.natures = [{
        "name": "naive",
        "stats": {
          "attack": 0,
          "defense": 0,
          "speed": 0.1,
          "spattack": 0,
          "spdefense": -0.1
        }
      },
      {
        "name": "modest",
        "stats": {
          "attack": -0.1,
          "defense": 0,
          "speed": 0,
          "spattack": 0.1,
          "spdefense": 0
        }
      },
      {
        "name": "mild",
        "stats": {
          "attack": 0,
          "defense": -0.1,
          "speed": 0,
          "spattack": 0.1,
          "spdefense": 0
        }
      }]

      //Act
      component.updateStats();

      //Assert
      expect(component.team[2].baseStats.spd).toEqual(component.team[2].calcStats.spd); //Should not have changed
      expect(component.selectControl.value).toEqual("");
      expect(component.team[2].nature.name).toEqual('modest');
      expect(component.team[2].calcStats.atk).not.toEqual(component.team[2].baseStats.atk);
    });
  });
});
