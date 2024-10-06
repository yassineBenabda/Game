import { Injectable } from '@angular/core';
import { Game } from '../model/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games : Game[];
  constructor() {
    this.games = [
      {idGame : 1, nomGame : "elden ring", prixGame : 60, dateCreation : new Date("06/14/2018")},
      {idGame : 2, nomGame : "tekken", prixGame : 60 , dateCreation : new Date("01/17/2024")},
      {idGame : 3, nomGame : "far cry", prixGame : 30 , dateCreation : new Date("05/1/2023")},
    ];
   }
  listeGames():Game[] {
    return this.games;
  }
  ajouterGame(g : Game){
    this.games.push(g);
  }
  supprimerGame(g : Game){
      const index = this.games.indexOf(g, 0);
      if (index > -1) {
      this.games.splice(index, 1);
    }
  }
  consulterGame(id:number): Game{
    return this.games.find(g => g.idGame == id)!;
  }
  trierGames(){
    this.games = this.games.sort((n1,n2) => {
    if (n1.idGame! > n2.idGame!) {
    return 1;
    }
    if (n1.idGame! < n2.idGame!) {
    return -1;
    }
    return 0;
    });
  }
  updateGame(g : Game){
    // console.log(p);
    this.supprimerGame(g);
    this.ajouterGame(g);
    this.trierGames();
  }
}
