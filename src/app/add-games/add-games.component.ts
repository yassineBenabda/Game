import { Component } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html'
})
export class AddGamesComponent {

  newGame = new Game();
  genres! : Genre[];
  newIdGenre! : number;
  newGenre! : Genre;

  constructor( private gameService : GameService, private router : Router) {}

  ngOnInit() {
    this.genres = this.gameService.listeGenres();
  }
                  
  addGame(){
    //console.log(this.newGame);
    //console.log(this.newIdGenre);
    this.newGenre = this.gameService.consulterGenre(this.newIdGenre);
    this.newGame.genre = this.newGenre;
    this.gameService.ajouterGame(this.newGame);
    this.router.navigate(['games']);
  }
}
