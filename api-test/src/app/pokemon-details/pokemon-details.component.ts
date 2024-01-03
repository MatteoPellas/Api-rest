import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ChiamateHttpService } from '../chiamate-http.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
  
  obsSinglePokemon! : Observable<any>
  pokemon : any;

  constructor(private activetedRoute: ActivatedRoute, private chiamate : ChiamateHttpService)
  {
  this.activetedRoute.paramMap.subscribe(this.getUrl_deteils)
  }

  getUrl_deteils = (params : ParamMap) => {
    let id = params.get('id');
    this.obsSinglePokemon = this.chiamate.scarica_singolo_pokemon(id);
    this.obsSinglePokemon.subscribe(this.getsinglepokemon)
    
  }

  getsinglepokemon=(data: any) => {
    this.pokemon = data
    console.log(this.pokemon)
  }

  exctractUrlID.url(url : string) {

  }
}
