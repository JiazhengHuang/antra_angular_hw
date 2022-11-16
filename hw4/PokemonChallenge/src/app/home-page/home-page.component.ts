import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './services/pokemons.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  starterPokemon = ['bulbasaur', 'squirtle', 'charmander'];

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.starterPokemon.forEach((name) => {
      this.pokemonsService
        .getPokemon(name)
        // .subscribe((data) => console.log(data));
        .subscribe();
    });
  }
}
