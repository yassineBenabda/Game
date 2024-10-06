import { Component } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html'
})
export class AddGamesComponent {
  newGame = new Game();
  constructor(  private gameService : GameService,
                private router : Router) {}
  addGame(){
    // console.log(this.newGame);
    this.gameService.ajouterGame(this.newGame);
    this.router.navigate(['games']);
    }
}
