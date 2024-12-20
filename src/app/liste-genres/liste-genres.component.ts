import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Genre } from '../model/genre.model';


@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html'
})
export class ListeGenresComponent implements OnInit {

  genres!: Genre[];
  updatedGen: Genre = { "idGenre": 0, "nomGenre": "" };
  ajout:boolean=true;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.chargerGenres();
  }
  chargerGenres() {
    this.genres = this.gameService.listeGenres();
  }
  genreUpdated(gen: Genre) {
    this.gameService.ajouterGenre(gen);
    this.chargerGenres();
  }

  editGenre(gen: Genre) {
    this.updatedGen = gen;
    this.ajout=false;
  }
}