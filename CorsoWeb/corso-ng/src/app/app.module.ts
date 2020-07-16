import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { ModificaVoceComponent } from './modifica-voce/modifica-voce.component';
import { VisualizzaVociComponent } from './visualizza-voci/visualizza-voci.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    SecondoComponent,
    ModificaVoceComponent,
    VisualizzaVociComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
