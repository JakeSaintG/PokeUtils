import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { INature } from '../interfaces/INatures';
import { ITeam, ITeamMember } from '../interfaces/ITeamMember';
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

  public team: ITeam = {
    hasAdvancedFrom: false,
    teamList: []
  };

  natures: any;
  dynaTooltip:string = "Dynamax!";
  gigaTooltip:string = "Gigantamax!";
  alignment = 'left';
  natureControl = new FormControl('');
  specialFormsControl = new FormControl('');
  addTooltip = "Add a Pokémon to your team.";
  saveTooltip: string = "Not yet implemented!";
  exportTooltip: string = "Not yet implemented!";
  hideToolbar: boolean = false;
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

  private _deleteButtonOff: boolean = false;
  get deleteButtonOff(): boolean {
      return this._deleteButtonOff;
  };
  set deleteButtonOff(value: boolean){
      this._deleteButtonOff = value;
  }

  constructor(
    private http: HttpClient, 
    private modalService: ModalService,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.http.get('assets/json/nature.json').subscribe((res) => {this.natures = res;});
    if (this.team.teamList.length === 6) this.addButtonOff = true;
    if (this.team.teamList.length === 0) this.deleteButtonOff = true;
    this.pokeApiService.preparePokeLists();
  }

  deleteMember = (id: string) => {
    let i: number = 0;
    this.team.teamList.forEach(e => {
      if (e.guid === id) this.team.teamList.splice(i, 1);
      i++;
    });

    if (this.team.teamList.length < 6 && this.addButtonOff == true) this.addButtonOff = !this.addButtonOff;
    if (this.team.teamList.length === 0 && this.deleteButtonOff == false) this.deleteButtonOff = !this.deleteButtonOff;
  };

  deleteTeam = () => {
    this.team.teamList = [];
    this.addButtonOff = false;
    this.deleteButtonOff = true;
  };

  triggerAddtion = (): void => {this.openAddMemberModal();};

  updateMember = async (guid: string, form: string) => {
    let value: string[] = [];

    form == "useFormControl" ? value = this.specialFormsControl.value.split("::") : value = [guid, form]
    
    const updatedMember: ITeamMember = await this.pokeApiService.addMember(value[1], "updateMember", value[0]);

    const i = this.team.teamList.map(e => {
      if (e.guid == updatedMember.guid) {
        updatedMember.forms = e.forms;
        return e.guid
      } 
      return;
    }).indexOf(updatedMember.guid)
    if (updatedMember.name.includes("-mega") || updatedMember.name.includes("-gmax")) this.team.hasAdvancedFrom = true;
    this.team.teamList.splice( i, 1, updatedMember);
    //TODO:
      //Do not allow megas and gmax appear in the form list...
  };

  updateStats = () => {
    const value: string[] = this.natureControl.value.split("::");
    const guid = value[0];
    const nature = value[1];

    this.team.teamList.forEach(pokemon => {
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

  async updateTeam( newMember: ITeamMember | any ) {
    this.team.teamList.push(newMember);
    if (this.team.teamList.length === 6) this.addButtonOff = !this.addButtonOff;
    if (this.team.teamList.length > 0) this.deleteButtonOff = false;
  };

  openLoadModal(): void { 
    const options: ModalOptions = {
        data: 'Loading and Saving of the teams that you have hand-crafted has not yet been implemented. It is a work in progress! Check back later.',
        ignoreOverlayClick: true,
        size: 'lg'
    };
    const subModal: HcModal<LoadModalComponent> = this.modalService.open(LoadModalComponent, options);
    subModal.result.subscribe(res => (this.loadResult = res));
  }

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
