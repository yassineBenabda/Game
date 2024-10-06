import { Component } from '@angular/core';
import { Game } from '../model/game.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html'
})
export class UpdateGameComponent {
  currentGame = new Game();
  constructor ( private activatedRoute : ActivatedRoute,  
                private router : Router,
                private gameService : GameService) { }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentGame = this.gameService.consulterGame(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentGame);
  }
  updateGame(){ 
    //console.log(this.currentGame);
    this.gameService.updateGame(this.currentGame);
    this.router.navigate(['games']);
    }
}
