import { Cell } from "./cell";
import { IStats } from "./stats";

export class Snake {
    init_length: number = 5;
    snakeCells: Cell[];
    direction: string;
    snakeHeadColor = "purple";

    constructor(canvasWidth: number) {
        this.snakeCells = [];
        this.direction = 'down';
        for (var i = this.init_length - 1; i >= 0; i--) {
            this.snakeCells.push(new Cell({ x: canvasWidth / 20, y: i, color: "yellow" }));
        }
    }

    drawSnake(pen: any): void {
        for (var i = 0; i < this.snakeCells.length; i++) {
            pen.fillStyle = this.snakeCells[i].color;
            pen.strokeStyle = "black";
            pen.lineWidth = 5;
            pen.strokeRect(this.snakeCells[i].x * 10, this.snakeCells[i].y * 10, 10, 10);
            pen.fillRect(this.snakeCells[i].x * 10, this.snakeCells[i].y * 10, 10, 10);
        }
    }

    updateSnake(obj: IStats): void {
        var headX = this.snakeCells[0].x;
        var headY = this.snakeCells[0].y;

        //detect collison with itself
        for (var i = 1; i < this.snakeCells.length; i++) {
            if (this.snakeCells[i].x == headX && this.snakeCells[i].y == headY) {
                obj.gameOver = true;
                this.snakeCells[i].color = this.snakeHeadColor;
                return
            }
        }

        //if food strikes with snake
        if (headX == obj.food.x && headY == obj.food.y) {
            obj.score++;
            this.snakeCells[0].color = obj.food.color;
            obj.food.setNextRandomCell(obj.canvasWidth, obj.canvasHeight);
        }
        else {
            //if food not taken;
            this.snakeCells.pop();
        }

        var nextX: number = 0;
        var nextY: number = 0;
        switch (this.direction) {
            case "right": {
                nextX = headX + 1;
                nextY = headY;
                break;
            }

            case "left": {
                nextX = headX - 1;
                nextY = headY;
                break;
            }

            case "down": {
                nextX = headX;
                nextY = headY + 1;
                break;
            }

            case "up": {
                nextX = headX;
                nextY = headY - 1;
                break;
            }

        }

        //insert the new cell at head and update previous head
        this.snakeCells[0].color = "yellow";
        this.snakeCells.unshift(new Cell({ x: nextX, y: nextY, color: "purple" }));

        //last coordinates condition
        var last_x = Math.round(obj.canvasWidth / 10);
        var last_y = Math.round(obj.canvasHeight / 10);

        if (this.snakeCells[0].y < 0 || this.snakeCells[0].x > last_x || this.snakeCells[0].x < 0 || this.snakeCells[0].y > last_y) {
            obj.gameOver = true;
        }
    }
}