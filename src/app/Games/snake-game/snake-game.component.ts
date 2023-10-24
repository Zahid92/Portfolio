import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit {

  snake: Snake;
  canvas:any;
  pen:any;
  stats: IStats;
  constructor() { 
    this.snake = new Snake();
    var food = new Cell();
    this.stats = {gameOver: false, canvasHeight:this.canvas.height, canvasWidth:this.canvas.width, food: food, score:0, highScore:0 };

    this.stats.food.setNextRandomCell(this.canvas.width, this.canvas.height);
    this.stats.score = 5;
  }

  ngOnInit(): void {
    this.canvas = document.getElementById('mycanvas');
    this.pen = this.canvas.getContext('2d');
  }

}
