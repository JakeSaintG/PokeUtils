import { Component, OnInit } from '@angular/core';
import { ActiveModal } from '@healthcatalyst/cashmere';
import { FormControl } from '@angular/forms';
import { AddTeamMemberService } from 'src/app/services/add-team-member.service';

@Component({
  selector: 'pkutil-add-team-member-modal',
  templateUrl: './add-team-member-modal.component.html',
  styleUrls: ['./add-team-member-modal.component.scss']
})
export class AddTeamMemberModalComponent implements OnInit  {

  inputControl = new FormControl('');

  constructor(
    public activeModal: ActiveModal, 
    private addTeamMemberService: AddTeamMemberService
  ) {}

  ngOnInit(): void {
  }

  async close(): Promise<void> {
    let member = await this.addTeamMemberService.addMember(this.inputControl.value);
    this.activeModal.close(member);
  }

  cancel(): void {
      this.activeModal.dismiss();
  }

}
