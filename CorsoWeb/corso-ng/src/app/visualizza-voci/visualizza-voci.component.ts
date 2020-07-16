import { Component, OnInit } from '@angular/core';
import { Persone } from '../model/persone';
import { PersoneService } from '../persone.service';

@Component({
  selector: 'app-visualizza-voci',
  templateUrl: './visualizza-voci.component.html',
  styleUrls: ['./visualizza-voci.component.css']
})
export class VisualizzaVociComponent implements OnInit {

  persone: Persone[];
  personaSelezionata: Persone;

  constructor(
    private personeService: PersoneService,
  ) { }

  ngOnInit(): void {
    this.personeService.elencoPersone().subscribe(pers => this.persone = pers);
  }

  seleziona(persona: Persone): void {
    this.personaSelezionata = persona;
  }

}
