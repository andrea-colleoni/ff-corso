import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.css']
})
export class SecondoComponent implements OnInit {

  titoliFilm: string[] = [];
  nuovoTitolo: string;
  titoloSelezionato: string;

  constructor() { }

  ngOnInit(): void {
    this.titoliFilm.push('Ghost');
    this.titoliFilm.push('I guerrieri della notte');
    this.titoliFilm.push('Fantozzi');
  }

  aggiungi(): void {
    this.titoliFilm.push(this.nuovoTitolo);
  }

  seleziona(titolo: string) {
    console.log(titolo);
    this.titoloSelezionato = titolo;
  }

}
