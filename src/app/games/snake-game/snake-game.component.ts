import { Component, HostListener, OnInit } from '@angular/core';
import { Cell } from '../models/cell';
import { Snake } from '../models/snake';
import { IStats } from '../models/stats';
const SnakeHighScore = 'SnakeHighScore';
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
  gameloop: any;
  newHighScore: string = '';
  constructor() {
    this.snake = new Snake(0);
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
    this.start();
    //document.addEventListener('keydown', this.KeyPressed);
  }

  start() {
    this.newHighScore = '';
    this.reset();
    this.canvas = document.getElementById('canvas');
    this.pen = this.canvas.getContext('2d');
    this.stats = {
      gameOver: false,
      canvasHeight: this.canvas.height,
      canvasWidth: this.canvas.width,
      food: new Cell,
      score: 0,
      highScore: Number(localStorage.getItem(SnakeHighScore)) ?? 0
    };
    this.snake = new Snake(this.canvas.width);
    this.stats.food.setNextRandomCell(this.canvas.width, this.canvas.height);
    this.stats.score = 5;
    this.draw();
    this.gameloop = setInterval(() => {
      this.snake.updateSnake(this.stats);
      this.draw();
      if (this.gameloop && this.stats.gameOver == true) {
        this.updateHighScore();
        clearInterval(this.gameloop);
      }
    }, 130);
  }

  updateHighScore() {
    if(this.stats.score > this.stats.highScore){
      this.stats.highScore = this.stats.score;
      this.newHighScore = 'New';
      localStorage.setItem(SnakeHighScore, this.stats.highScore.toString());
    }
  }

  draw() {
    this.pen.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.snake.drawSnake(this.pen);

    //fill colors in food

    this.pen.fillStyle = this.stats.food.color;
    this.pen.fillRect(this.stats.food.x * 10, this.stats.food.y * 10, 10, 10);

    this.pen.fillStyle = "white";
    this.pen.font = "14px Roboto";
    this.pen.fillText("Score: " + this.stats.score, 10, 10);
  }

  //add event listener to our game
  //listen for keyboard events
  @HostListener('document:keydown', ['$event'])
  KeyPressed(e: KeyboardEvent) {
    console.log("you pressed a key");
    console.log(e);

    if (this.snake.direction != "left" && e.key == 'ArrowRight') {
      this.snake.direction = "right";
    }
    else if (this.snake.direction != "right" && e.key == 'ArrowLeft') {
      this.snake.direction = "left";
    }
    else if (this.snake.direction != "down" && e.key == 'ArrowUp') {
      this.snake.direction = "up";
    }
    else if (this.snake.direction != "up" && e.key == 'ArrowDown') {
      this.snake.direction = "down";
    }
  }

  reset() {
    if (this.gameloop) {
      clearInterval(this.gameloop);
    }
  }

  ngOnDestroy() {
    this.reset();
  }

}
