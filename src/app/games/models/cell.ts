interface ICell {
    x: number;
    y: number;
    color: string;
}

export class Cell {
    x: number = 0;
    y: number = 0;
    color: string = "yellow";
    constructor(obj?: ICell) {
        if (obj) {
            this.color = obj.color;
            this.x = obj.x;
            this.y = obj.y;
        }
    }

    setNextRandomCell(W:number, H:number){
        this.x = Math.round(Math.random()*(W-10)/20);
        this.y = Math.round(Math.random()*(H-10)/20);
    
        var colors = ["red","green","aqua","coral","orchid"];
        this.color = colors[Math.round(Math.random() * colors.length)];
    }
}