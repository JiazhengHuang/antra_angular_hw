import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { PokemonResponse } from '../interface/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly pokemonApi = 'https://pokeapi.co/api/v2/pokemon/';

  private pokemons = [];
  private pokemons$ = new BehaviorSubject<any>(this.pokemons);
  pokemonlist$ = this.pokemons$.asObservable();

  constructor(private readonly http: HttpClient) {}

  getPokemon(name: string) {
    return this.http.get<PokemonResponse>(this.pokemonApi + name).pipe(
      map((res: PokemonResponse): any => {
        const pokemon: any = {
          pokemonName: res.name,
          pokemonId: res.id,
          types: res.types,
          img: res.sprites.front_default,
        };
        // console.log(pokemon.pokemonName);
        return pokemon;
      }),
      tap((pokemons: any) => {
        this.pokemons = pokemons;
        this.pokemons$.next(this.pokemons);
      })
    );
  }
}
