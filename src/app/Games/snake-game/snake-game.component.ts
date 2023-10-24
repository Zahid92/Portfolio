import { Component, OnInit } from '@angular/core';
import { Cell } from '../models/cell';
import { Snake } from '../models/snake';
import { IStats } from '../models/stats';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit {

  snake: Snake;
  canvas: any;
  pen: any;
  stats: IStats;
  z:any;
  constructor() {
    this.snake = new Snake();
    this.stats = {
      gameOver: false,
      canvasHeight: 0,
      canvasWidth: 0,
      food: new Cell,
      score: 0,
      highScore: 0
    };
  }

  ngOnInit(): void {
    this.canvas = document.getElementById('snake-game');
    console.log(this.canvas);
    this.pen = this.canvas.getContext('2d');
    this.stats = {
      gameOver: false,
      canvasHeight: this.canvas.height,
      canvasWidth: this.canvas.width,
      food: new Cell,
      score: 0,
      highScore: 0
    };

    this.stats.food.setNextRandomCell(this.canvas.width, this.canvas.height);
    this.stats.score = 5;
    this.z = setInterval(this.gameloop, 130);
  }

  gameloop() {
    this.draw();
    this.snake.updateSnake(this.stats);
    if (this.stats.gameOver == true) {
      var k = document.getElementById("gameover");
      k?.removeAttribute('hidden');
      clearInterval(this.z);
    }
  }

  draw(){
    this.pen.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.snake.drawSnake(this.pen);

    //fill colors in food

    this.pen.fillStyle = this.stats?.food.color;
    this.pen.fillRect(this.stats?.food.x ?? 0 * 10, this.stats?.food.y ?? 1 * 10, 10, 10);

    this.pen.fillStyle = "white";
    this.pen.font = "14px Roboto";
    this.pen.fillText("Score: " + this.stats?.score, 10, 10);
  }

}
