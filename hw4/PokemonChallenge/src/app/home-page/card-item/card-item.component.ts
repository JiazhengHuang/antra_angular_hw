import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  constructor(public pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    // console.log('card: ' + this.pokemonsService.pokemonlist$);
  }
}
