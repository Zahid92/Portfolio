import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';

const routes: Routes = [{ path: '', component: GamesComponent },
{path: 'snake', component: SnakeGameComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
