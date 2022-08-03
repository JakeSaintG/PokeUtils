import { NgModule } from '@angular/core';
import {
    ListModule,
    TileModule,
    NavbarModule,
    AppSwitcherModule,
    IconModule,
    PopModule
} from '@healthcatalyst/cashmere';

@NgModule({
  exports: [
    TileModule,
    ListModule,
    NavbarModule,
    AppSwitcherModule,
    IconModule,
    PopModule
  ]
})
export class CashmereModule {}
