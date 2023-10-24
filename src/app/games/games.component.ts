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
    this.games.push({title:"Snake", description:"Bla bla bla snake game", image:"", link:"snake"});
    this.games.push({title:"Snake", description:"Bla bla bla snake game", image:"", link:"snake"});
    this.games.push({title:"Snake", description:"Bla bla bla snake game", image:"", link:"snake"});
    this.games.push({title:"Snake", description:"Bla bla bla snake game", image:"", link:"snake"});
    this.games.push({title:"Snake", description:"Bla bla bla snake game", image:"", link:"snake"});
    this.games.push({title:"Snake", description:"Bla bla bla snake game", image:"", link:"snake"});
    this.games.push({title:"Snake", description:"Bla bla bla snake game", image:"", link:"snake"});
    console.log(this.games);
  }

  ngOnInit(): void {
  }

}
