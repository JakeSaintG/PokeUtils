import { Component, OnInit } from '@angular/core';
import {ActiveModal} from '@healthcatalyst/cashmere';

@Component({
  selector: 'pkutil-load-modal',
  templateUrl: './load-modal.component.html',
  styleUrls: ['./load-modal.component.scss']
})
export class LoadModalComponent implements OnInit {

  constructor(public activeModal: ActiveModal) {}

  ngOnInit(): void {}

  close(): void {this.activeModal.close();};

  cancel(): void {this.activeModal.dismiss();};
}
