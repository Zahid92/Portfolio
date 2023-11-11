import { Component, OnInit } from '@angular/core';
import { IGame } from './models/igame';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: IGame[];

  constructor() { 
    this.games = [];
    this.games.push({title:"Snake", description:"Snake Game to remind old times", image:"https://wallpapers.com/images/high/green-snake-game-character-bqvxt2p5oibadgqn.webp", link:"snake"});
    for(let i = 0; i < 5; i++)
    {
      this.games.push({title:"New Game", description:"Yet to come...", image:"./assets/defaultGameImage.jpg", link:"games"});
    }
  }

  ngOnInit(): void {
  }

}
