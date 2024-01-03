import { Component } from '@angular/core';
import { ChiamateHttpService } from '../chiamate-http.service';
import { Observable } from 'rxjs';
import { PokemnonList } from '../models/pokemon-list.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  obsLista: Observable<any>;
  listaPokemon! : PokemnonList;

  constructor(private chiamate : ChiamateHttpService)
  {
    this.obsLista = this.chiamate.scraica_lista_pokemon();
    this.obsLista.subscribe(this.getPokemonList)
  }

  getPokemonList = (data : PokemnonList) => {this.listaPokemon = data}

}
