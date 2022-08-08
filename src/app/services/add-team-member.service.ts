import { Injectable } from '@angular/core';
import { HcModal, ModalOptions, ModalService } from '@healthcatalyst/cashmere';
import { ITeamMember } from '../interfaces/ITeamMember';
import { AddTeamMemberModalComponent } from '../modals/add-team-member-modal/add-team-member-modal.component';

@Injectable({
  providedIn: 'root'
})

export class AddTeamMemberService {

  result: unknown;

  constructor(private modalService: ModalService) { }

  addMember = async (): Promise<ITeamMember> => {

    await this.openLoadModal().then( e => {console.log("testyboi")});;
      
    
    return {
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
    };
  };

  async openLoadModal(): Promise<void> { 
    const options: ModalOptions = {
        data:
            'Testy Boi',
        ignoreOverlayClick: true,
        size: 'lg'
    };
    const subModal: HcModal<AddTeamMemberModalComponent> = this.modalService.open(AddTeamMemberModalComponent, options);
    subModal.result.subscribe(res => (this.result = res));
  }
}
