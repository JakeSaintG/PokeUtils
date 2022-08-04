import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashmereModule } from './cashmere.module';
import { TeamBuilderGridComponent } from './team-builder/team-builder-grid/team-builder-grid.component';
import { TeamBuilderMenuComponent } from './team-builder/team-builder-menu/team-builder-menu.component';
import { TeamBuilderComponent } from './team-builder/team-builder.component';
import { LoadModalComponent } from './team-builder/team-builder-menu/menu-modals/load-modal/load-modal.component';
import { GenerateCardModalComponent } from './team-builder/team-builder-menu/menu-modals/generate-card-modal/generate-card-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamBuilderMenuComponent,
    TeamBuilderGridComponent,
    TeamBuilderComponent,
    LoadModalComponent,
    GenerateCardModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CashmereModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
