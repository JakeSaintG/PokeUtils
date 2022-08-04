import { NgModule } from '@angular/core';
import {
    ListModule,
    TileModule,
    NavbarModule,
    AppSwitcherModule,
    IconModule,
    PopModule,
    ButtonModule,
    AccordionModule,
    ModalModule,
    BannerModule
} from '@healthcatalyst/cashmere';

@NgModule({
  exports: [
    TileModule,
    ListModule,
    NavbarModule,
    AppSwitcherModule,
    IconModule,
    PopModule,
    ButtonModule,
    AccordionModule,
    ModalModule,
    BannerModule
  ]
})
export class CashmereModule {}
