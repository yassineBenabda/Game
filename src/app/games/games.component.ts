import { Component } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html'
})
export class GamesComponent {
    games : Game[];
    constructor( private gameService : GameService ) { 
      this.games = gameService.listeGames();
    }
    supprimerGame(g: Game){
      // console.log(g);
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.gameService.supprimerGame(g);
    }
}
