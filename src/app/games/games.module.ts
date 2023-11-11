import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';


@NgModule({
  declarations: [
    GamesComponent,
    SnakeGameComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
