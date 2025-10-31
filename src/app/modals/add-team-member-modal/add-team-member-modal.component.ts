import { Component, OnInit } from '@angular/core';
import { ActiveModal } from '@healthcatalyst/cashmere';
import { FormControl, FormGroup, UntypedFormControl } from '@angular/forms';
import { PokeApiService} from 'src/app/services/pokeapi.service';

interface userInput {
  pkmnName: string
}

@Component({
  selector: 'pkutil-add-team-member-modal',
  templateUrl: './add-team-member-modal.component.html',
  styleUrls: ['./add-team-member-modal.component.scss']
})

export class AddTeamMemberModalComponent implements OnInit  {

  // inputControl = new UntypedFormControl('');

  public addForm: FormGroup = new FormGroup( {
    pkmnName: new FormControl()
  })

  constructor(
    public activeModal: ActiveModal, 
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    // this.inputControl.focus()
  };

  async close(): Promise<void> {
    const userInput: userInput = this.addForm.value; 
    
    let member = await this.pokeApiService.addMember(userInput.pkmnName, "teambuilder", "");
    this.activeModal.close(member);
  };

  cancel(): void {this.activeModal.dismiss()};
}
