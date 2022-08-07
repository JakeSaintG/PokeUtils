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
import { StatNamePipe } from './team-builder/team-builder-grid/pipes/stat-name.pipe';
import { StatValuePipe } from './team-builder/team-builder-grid/pipes/stat-value.pipe';
import { NewsModalComponent } from './main-modals/news-modal/news-modal.component';
import { AboutModalComponent } from './main-modals/about-modal/about-modal.component';
import { AbilityNamePipe } from './team-builder/team-builder-grid/pipes/ability-name.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TeamBuilderMenuComponent,
    TeamBuilderGridComponent,
    TeamBuilderComponent,
    LoadModalComponent,
    NewsModalComponent,
    AboutModalComponent,
    GenerateCardModalComponent,
    StatNamePipe,
    StatValuePipe,
    AbilityNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CashmereModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
