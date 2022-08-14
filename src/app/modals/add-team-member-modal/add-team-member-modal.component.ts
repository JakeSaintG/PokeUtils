import { Component, OnInit } from '@angular/core';
import { ActiveModal } from '@healthcatalyst/cashmere';
import { FormControl } from '@angular/forms';
import { PokeApiService} from 'src/app/services/pokeapi.service';

@Component({
  selector: 'pkutil-add-team-member-modal',
  templateUrl: './add-team-member-modal.component.html',
  styleUrls: ['./add-team-member-modal.component.scss']
})
export class AddTeamMemberModalComponent implements OnInit  {

  inputControl = new FormControl('');

  constructor(
    public activeModal: ActiveModal, 
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
  }

  async close(): Promise<void> {
    let member = await this.pokeApiService.addMember(this.inputControl.value, "teambuilder");
    this.activeModal.close(member);
  }

  cancel(): void {
      this.activeModal.dismiss();
  }

}
