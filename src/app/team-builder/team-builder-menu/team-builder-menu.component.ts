import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkutil-team-builder-menu',
  templateUrl: './team-builder-menu.component.html',
  styleUrls: ['./team-builder-menu.component.scss']
})
export class TeamBuilderMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public addTooltip = "Add a Pokémon to your team."

  
}
