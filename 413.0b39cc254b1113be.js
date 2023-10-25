"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[413],{413:(x,d,c)=>{c.r(d),c.d(d,{GamesModule:()=>v});var g=c(814),h=c(385),t=c(946);function m(a,s){if(1&a&&(t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.TgZ(3,"div",5)(4,"h4",6),t._uU(5),t.qZA(),t.TgZ(6,"p",7),t._uU(7),t.qZA(),t.TgZ(8,"a",8),t._uU(9,"Play"),t.qZA()()()()),2&a){const e=s.$implicit;t.xp6(2),t.s9C("src",e.image,t.LSH),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.Oqu(e.description),t.xp6(1),t.s9C("routerLink",e.link)}}let p=(()=>{class a{constructor(){this.games=[],this.games.push({title:"Snake",description:"Bla bla bla snake game",image:"https://wallpapers.com/images/high/green-snake-game-character-bqvxt2p5oibadgqn.webp",link:"snake"}),this.games.push({title:"Snake",description:"Bla bla bla snake game",image:"",link:"snake"}),this.games.push({title:"Snake",description:"Bla bla bla snake game",image:"",link:"snake"}),this.games.push({title:"Snake",description:"Bla bla bla snake game",image:"",link:"snake"}),this.games.push({title:"Snake",description:"Bla bla bla snake game",image:"",link:"snake"}),this.games.push({title:"Snake",description:"Bla bla bla snake game",image:"",link:"snake"}),this.games.push({title:"Snake",description:"Bla bla bla snake game",image:"",link:"snake"}),console.log(this.games)}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-games"]],decls:2,vars:1,consts:[["id","games",1,"container","grid-container","space-up","text-center"],["class","grid-item",4,"ngFor","ngForOf"],[1,"grid-item"],[1,"card",2,"width","400px"],["alt","Game image",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary",3,"routerLink"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.YNc(1,m,10,4,"div",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngForOf",n.games))},dependencies:[g.sg,h.rH]})}return a})();class r{constructor(s){this.x=0,this.y=0,this.color="yellow",s&&(this.color=s.color,this.x=s.x,this.y=s.y)}setNextRandomCell(s,e){this.x=Math.round(Math.random()*(s-10)/20),this.y=Math.round(Math.random()*(e-10)/20);var i=["red","green","aqua","coral","orchid"];this.color=i[Math.round(Math.random()*i.length)]}}class k{constructor(){this.init_length=5,this.cells=[],this.direction="down"}createSnake(s){for(var e=this.init_length-1;e>=0;e--)this.cells.push(new r({x:s/20,y:e,color:"yellow"}))}drawSnake(s){for(var e=0;e<this.cells.length;e++)s.fillStyle=this.cells[e].color,s.strokeStyle="black",s.lineWidth=5,s.strokeRect(10*this.cells[e].x,10*this.cells[e].y,10,10),s.fillRect(10*this.cells[e].x,10*this.cells[e].y,10,10)}updateSnake(s){for(var e=this.cells[0].x,i=this.cells[0].y,n=1;n<this.cells.length;n++)this.cells[n].x==e&&this.cells[n].y==i&&(s.gameOver=!0);e==s.food.x&&i==s.food.y?(s.score++,this.cells[0].color=s.food.color,s.food.setNextRandomCell(s.canvasWidth,s.canvasHeight),s.score>s.highScore&&(s.highScore=s.score)):this.cells.pop();var l=0,o=0;switch(this.direction){case"right":l=e+1,o=i;break;case"left":l=e-1,o=i;break;case"down":l=e,o=i+1;break;case"up":l=e,o=i-1}this.cells.unshift(new r({x:l,y:o,color:"yellow"}));var y=Math.round(s.canvasWidth/10),w=Math.round(s.canvasHeight/10);return(this.cells[0].y<0||this.cells[0].x>y||this.cells[0].x<0||this.cells[0].y>w)&&(s.gameOver=!0),s}}const u=[{path:"",component:p},{path:"snake",component:(()=>{class a{constructor(){this.snake=new k,this.stats={gameOver:!1,canvasHeight:0,canvasWidth:0,food:new r,score:0,highScore:0}}ngOnInit(){this.canvas=document.getElementById("canvas"),this.pen=this.canvas.getContext("2d"),this.stats={gameOver:!1,canvasHeight:this.canvas.height,canvasWidth:this.canvas.width,food:new r,score:0,highScore:0},this.snake.createSnake(this.canvas.width),this.stats.food.setNextRandomCell(this.canvas.width,this.canvas.height),this.stats.score=5,this.draw(),this.gameloop=setInterval(()=>{if(this.snake.updateSnake(this.stats),this.draw(),this.gameloop&&1==this.stats.gameOver){var e=document.getElementById("gameover");e?.removeAttribute("hidden"),clearInterval(this.gameloop)}},130)}draw(){this.pen.clearRect(0,0,this.canvas.width,this.canvas.height),this.snake.drawSnake(this.pen),this.pen.fillStyle=this.stats.food.color,this.pen.fillRect(10*this.stats.food.x,10*this.stats.food.y,10,10),this.pen.fillStyle="white",this.pen.font="14px Roboto",this.pen.fillText("Score: "+this.stats.score,10,10)}KeyPressed(e){console.log("you pressed a key"),console.log(e),"left"!=this.snake.direction&&"ArrowRight"==e.key?this.snake.direction="right":"right"!=this.snake.direction&&"ArrowLeft"==e.key?this.snake.direction="left":"down"!=this.snake.direction&&"ArrowUp"==e.key?this.snake.direction="up":"up"!=this.snake.direction&&"ArrowDown"==e.key&&(this.snake.direction="down")}ngOnDestroy(){this.gameloop&&clearInterval(this.gameloop)}static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-snake-game"]],hostBindings:function(i,n){1&i&&t.NdJ("keydown",function(o){return n.KeyPressed(o)},!1,t.evT)},decls:2,vars:0,consts:[["id","snake-game",1,"container","text-center","space-up"],["width","400","height","400","id","canvas"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"canvas",1),t.qZA())},styles:["canvas[_ngcontent-%COMP%]{background-color:#000}#snake-game[_ngcontent-%COMP%]{position:fixed}"]})}return a})()}];let f=(()=>{class a{static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275mod=t.oAB({type:a});static#s=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(u),h.Bz]})}return a})(),v=(()=>{class a{static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275mod=t.oAB({type:a});static#s=this.\u0275inj=t.cJS({imports:[g.ez,f]})}return a})()}}]);