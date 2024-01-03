import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PokemnonList } from './models/pokemon-list.model';

@Injectable({
  providedIn: 'root'
})
export class ChiamateHttpService {
  scarica_singolo_pokemon(id: string | null) {
    return this.http.get<PokemnonList>("https://pokeapi.co/api/v2/pokemon/"+id)
  }
  

  constructor(private http: HttpClient) { }

  scraica_lista_pokemon () : Observable<PokemnonList> {
    return this.http.get<PokemnonList>("https://pokeapi.co/api/v2/pokemon")
  }
  
  
}
