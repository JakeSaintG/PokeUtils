import { Component, OnInit } from '@angular/core';
import { ActiveModal } from '@healthcatalyst/cashmere';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pkutil-add-team-member-modal',
  templateUrl: './add-team-member-modal.component.html',
  styleUrls: ['./add-team-member-modal.component.scss']
})
export class AddTeamMemberModalComponent implements OnInit {

  constructor(public activeModal: ActiveModal) {}

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close("test");
  }

  cancel(): void {
      this.activeModal.dismiss();
  }

}
