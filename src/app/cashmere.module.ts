import { NgModule } from '@angular/core';
import {
    ListModule,
    TileModule,
    NavbarModule,
    AppSwitcherModule,
    IconModule,
    PopModule,
    ButtonModule
} from '@healthcatalyst/cashmere';

@NgModule({
  exports: [
    TileModule,
    ListModule,
    NavbarModule,
    AppSwitcherModule,
    IconModule,
    PopModule,
    ButtonModule
  ]
})
export class CashmereModule {}
