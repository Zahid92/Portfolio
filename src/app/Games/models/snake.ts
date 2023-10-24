class Snake {
    init_length: number = 5;
    cells: Cell[] = [];
    direction: string = "down";

    createSnake(canvasWidth:number): void {
        for (var i = this.init_length - 1; i >= 0; i--) {
            this.cells.push(new Cell({ x: canvasWidth / 20, y: i, color: "yellow" }));
        }
    }

    drawSnake(pen:any): void {
        for (var i = 0; i < this.cells.length; i++) {
            pen.fillStyle = this.cells[i].color;
            pen.strokeStyle = "black";
            pen.lineWidth = 5;
            pen.strokeRect(this.cells[i].x * 10, this.cells[i].y * 10, 10, 10);
            pen.fillRect(this.cells[i].x * 10, this.cells[i].y * 10, 10, 10);
        }
    }

    updateSnake(obj:IStats): IStats {
        var headX = this.cells[0].x;
        var headY = this.cells[0].y;

        //if food strikes with snake
        for (var i = 1; i < this.cells.length; i++) {
            if (this.cells[i].x == headX && this.cells[i].y == headY) {
                obj.gameOver = true;
            }
        }

        if (headX == obj.food.x && headY == obj.food.y) {
            obj.score++;
            this.cells[0].color = obj.food.color;
            obj.food.setNextRandomCell(obj.canvasWidth,obj.canvasHeight);
            if (obj.score > obj.highScore) {
                obj.highScore = obj.score;
            }
        }
        else {
            //if food not taken;
            this.cells.pop();
        }

        var nextX:number=0;
        var nextY:number=0;
        switch(this.direction){
            case "right":{
                nextX = headX + 1;
                nextY = headY;
                break;
            }

            case "left":{
                nextX = headX - 1;
                nextY = headY;
                break;
            }

            case "down":{
                nextX = headX;
                nextY = headY + 1;
                break;
            }

            case "up":{
                nextX = headX;
                nextY = headY - 1;
                break;
            }

        }

        //insert the new cell at head
        this.cells.unshift(new Cell({ x: nextX, y: nextY, color: "yellow" }));

        //last coordinates condition
        var last_x = Math.round(obj.canvasWidth / 10);
        var last_y = Math.round(obj.canvasHeight / 10);

        if (this.cells[0].y < 0 || this.cells[0].x > last_x || this.cells[0].x < 0 || this.cells[0].y > last_y) {
            obj.gameOver = true;
        }
        return obj;
    }
}