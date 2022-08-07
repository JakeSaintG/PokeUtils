import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashmereModule } from './cashmere.module';
import { TeamBuilderComponent } from './team-builder/team-builder.component';
import { LoadModalComponent } from './modals/load-modal/load-modal.component';
import { GenerateCardModalComponent } from './modals/generate-card-modal/generate-card-modal.component';
import { StatNamePipe } from './pipes/stat-name.pipe';
import { StatValuePipe } from './pipes/stat-value.pipe';
import { NewsModalComponent } from './modals/news-modal/news-modal.component';
import { AboutModalComponent } from './modals/about-modal/about-modal.component';
import { AbilityNamePipe } from './pipes/ability-name.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
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
