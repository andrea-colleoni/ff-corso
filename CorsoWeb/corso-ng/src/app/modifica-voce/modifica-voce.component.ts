import { Component, OnInit, Input } from '@angular/core';
import { Persone } from '../model/persone';

@Component({
  selector: 'app-modifica-voce',
  templateUrl: './modifica-voce.component.html',
  styleUrls: ['./modifica-voce.component.css']
})
export class ModificaVoceComponent implements OnInit {

  @Input() persona: Persone;

  constructor() { }

  ngOnInit(): void {
    this.persona = {
      Id: 1000,
      Nome: 'Test',
      Cognome: 'Test',
      Email: 'test@test.tt',
    }
  }

}
