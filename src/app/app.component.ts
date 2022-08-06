import { Component } from '@angular/core';
import {HcModal, ModalOptions, ModalService} from '@healthcatalyst/cashmere';
import { AboutModalComponent } from './main-modals/about-modal/about-modal.component';
import { NewsModalComponent } from './main-modals/news-modal/news-modal.component';

@Component({
  selector: 'pkutil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "PokéUtils"
  username = 'Ash Ketchum';
  organization = 'Indigo Plateau';
  result: unknown;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
  }

  openAboutModal(): void { 
    
    const options: ModalOptions = {
        data:
            'Loading and Saving of the teams that you have hand-crafted has not yet been implemented. It is a work in progress! Check back later.',
        ignoreOverlayClick: true,
        size: 'lg'
    };

    const subModal: HcModal<AboutModalComponent> = this.modalService.open(AboutModalComponent, options);
    subModal.result.subscribe(res => (this.result = res));

  }

  openNewsModal(): void { 
    
    const options: ModalOptions = {
        data:
            'Loading and Saving of the teams that you have hand-crafted has not yet been implemented. It is a work in progress! Check back later.',
        ignoreOverlayClick: true,
        size: 'lg'
    };

    const subModal: HcModal<AboutModalComponent> = this.modalService.open(AboutModalComponent, options);
    subModal.result.subscribe(res => (this.result = res));

    const newsSubModal: HcModal<NewsModalComponent> = this.modalService.open(NewsModalComponent, options);
    newsSubModal.result.subscribe(res => (this.result = res));

  }
}
