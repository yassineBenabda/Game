import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { AddGamesComponent } from './add-games/add-games.component';
import { UpdateGameComponent } from './update-game/update-game.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  { path : "games" , component : GamesComponent },
  { path : "add-games" , component : AddGamesComponent },
  { path : "updateGame/:id" , component : UpdateGameComponent },
  { path : "recherche-par-genre", component : RechercheParGenreComponent },
  { path : "recherche-par-nom", component : RechercheParNomComponent },
  { path : "" , redirectTo : "games" , pathMatch : "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
