import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { INature } from '../interfaces/INatures';
import { ITeamMember } from '../interfaces/ITeamMember';
import { HcModal, ModalOptions, ModalService } from '@healthcatalyst/cashmere';
import { LoadModalComponent } from 'src/app/modals/load-modal/load-modal.component';
import { AddTeamMemberModalComponent } from '../modals/add-team-member-modal/add-team-member-modal.component';
import { PokeApiService } from '../services/pokeapi.service';

@Component({
  selector: 'pkutil-team-builder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.scss']
})
export class TeamBuilderComponent implements OnInit {

  public team: ITeamMember[] = [];

  natures: any;
  dynaTooltip:string = "Dynamax!";
  gigaTooltip:string = "Gigantamax!";
  alignment = 'left';
  natureControl = new FormControl('');
  specialFormsControl = new FormControl('');
  addTooltip = "Add a Pokémon to your team.";
  saveTooltip = "Not yet implemented!";
  exportTooltip = "Not yet implemented!";
  hideToolbar = false;
  triggerToolbar = true;
  triggerButton = 'Toolbar Trigger: On';
  loadResult: unknown;
  addResult: unknown;

  private _addButtonOff: boolean = false;
  get addButtonOff(): boolean {
      return this._addButtonOff;
  };
  set addButtonOff(value: boolean){
      this._addButtonOff = value;
  }

  constructor(
    private http: HttpClient, 
    private modalService: ModalService,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.http.get('assets/json/nature.json').subscribe((res) => {this.natures = res;});
    if (this.team.length === 6) this.addButtonOff = true;
    this.pokeApiService.preparePokeLists();
  }

  deleteMember = (id: string) => {
    let index: number = 0;
    this.team.forEach(e => {
      if (e.guid === id) this.team.splice(index, 1);
      index++;
    });

    if (this.team.length < 6 && this.addButtonOff == true) this.addButtonOff = !this.addButtonOff;
  };

  deleteTeam = () => {
    this.team = [];
    this.addButtonOff = false;
  };

  triggerAddtion = (): void => {this.openAddMemberModal();};

  updateMember = async (guid: string, form: string) => {
    let value: string[] = [];
    if (form == "useFormControl") {
      value = this.specialFormsControl.value.split("::");
    } else {
      value = [guid, form];
    }
    
    const updatedMember: ITeamMember = await this.pokeApiService.addMember(value[1], "updateMember", value[0]);
    let savedForms: string[] = [];
    
    const i = this.team.map(e => e.guid).indexOf(updatedMember.guid);

    this.team.splice( i, 1, updatedMember);
    //TODO:
      //Make the mega and gmax button use this function
        //Do not allow megas and gmax from appearing in the form list...
      //The forms changer for things like raticate-alola is broken...I need to retain the forms array.
  };

  updateStats = () => {
    let value: string[] = this.natureControl.value.split("::");
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
      }
    });
  }

  openLoadModal(): void { 
    const options: ModalOptions = {
        data: 'Loading and Saving of the teams that you have hand-crafted has not yet been implemented. It is a work in progress! Check back later.',
        ignoreOverlayClick: true,
        size: 'lg'
    };
    const subModal: HcModal<LoadModalComponent> = this.modalService.open(LoadModalComponent, options);
    subModal.result.subscribe(res => (this.loadResult = res));
  }

  async updateTeam( newMember: any ) {
    this.team.push(newMember);
    if (this.team.length === 6) this.addButtonOff = !this.addButtonOff;
  };

  openAddMemberModal(): void { 
    const options: ModalOptions = {
        data: 'Testy Boi',
        ignoreOverlayClick: true,
        size: 'lg'
    };
    const subModal: HcModal<AddTeamMemberModalComponent> = this.modalService.open(AddTeamMemberModalComponent, options);
    subModal.result.subscribe((e) => this.updateTeam(e));
  }
}
