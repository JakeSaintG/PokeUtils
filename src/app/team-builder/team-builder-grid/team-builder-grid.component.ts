import { Component, OnInit } from '@angular/core';

interface tempPokemon {
  name: string,
  img: string,
  types: string[]
}

@Component({
  selector: 'pkutil-team-builder-grid',
  templateUrl: './team-builder-grid.component.html',
  styleUrls: ['./team-builder-grid.component.scss']
})
export class TeamBuilderGridComponent implements OnInit {

  tempPokemon: tempPokemon[] = [
    {
      name: "Mudkip",
      img: "https://www.serebii.net/swordshield/pokemon/258.png",
      types: [
        "water"
      ]
    },
    {
      name: "Marshstomp",
      img: "https://www.serebii.net/swordshield/pokemon/259.png",
      types: [
        "water",
        "ground"
      ]
    },
    {
      name: "Swampert",
      img: "https://www.serebii.net/swordshield/pokemon/260.png",
      types: [
        "water",
        "ground"
      ]
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }


}
