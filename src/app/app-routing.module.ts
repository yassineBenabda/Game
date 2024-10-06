import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { AddGamesComponent } from './add-games/add-games.component';
import { UpdateGameComponent } from './update-game/update-game.component';

const routes: Routes = [
  { path : "games" , component : GamesComponent },
  { path : "add-games" , component : AddGamesComponent },
  { path : "updateGame/:id" , component : UpdateGameComponent },
  { path : "" , redirectTo : "games" , pathMatch : "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
