import { Component, OnInit } from '@angular/core';
import {HcModal, ModalOptions, ModalService} from '@healthcatalyst/cashmere';
import { LoadModalComponent } from './menu-modals/load-modal/load-modal.component';

@Component({
  selector: 'pkutil-team-builder-menu',
  templateUrl: './team-builder-menu.component.html',
  styleUrls: ['./team-builder-menu.component.scss']
})
export class TeamBuilderMenuComponent implements OnInit {

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
  }

  addTooltip = "Add a Pokémon to your team.";
  saveTooltip = "Not yet implemented!";
  exportTooltip = "Not yet implemented!";
  alignment = 'left';
  hideToolbar = false;
  triggerToolbar = true;
  triggerButton = 'Toolbar Trigger: On';
  result: unknown;

  openLoadModal(): void { 

    const options: ModalOptions = {
        data:
            'Loading and Saving of the teams that you have hand-crafted has not yet been implemented. It is a work in progress! Check back later.',
        ignoreOverlayClick: true,
        size: 'lg'
    };

    const subModal: HcModal<LoadModalComponent> = this.modalService.open(LoadModalComponent, options);
    subModal.result.subscribe(res => (this.result = res));

  }
}
