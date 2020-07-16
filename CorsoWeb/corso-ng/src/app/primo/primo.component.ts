import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.css']
})
export class PrimoComponent implements OnInit {

  testo: string; // testo
  numero: number; // qualsiasi tipo di numero
  generico: any; // una variabile che funziona come le variabili in JS (dinamica)
  veroFalso: boolean;

  private invisibile: string; // questa proprietà non si vedrà nel template (html)

  constructor() { }

  ngOnInit(): void {
    // per accedere  alle proprietà server sempre il prefisso this.
    this.invisibile = 'io sono invisibile al template';
    this.numero = 10;
    // posso usare la JS interpolation per le stringhe
    this.testo = `il numero vale ${this.numero}`; // il carattere ` (backtick) è ALT + 96

    this.veroFalso = true;
  }

  bottoneCliccato(): void {
    this.veroFalso = !this.veroFalso;
  }

}
