import { useState, useEffect } from 'react'
import { View } from 'react-native'
import PokemonList from '../components/PokemonList'
const { getPokemonApi, getPokemonDetailApi } = require('../api/pokemon')

export default function Pokedex () {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const loadPokemons = async () => {
      const data = await getPokemonApi()
      const pokemonsArray = []

      for await (const pokemon of data.results) {
        const pokemonDetails = await getPokemonDetailApi(pokemon.url)

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }

      setPokemons([...pokemons, ...pokemonsArray])
    }

    loadPokemons()
  }, [])

  return (
    <View>
      <PokemonList pokemons={pokemons} />
    </View>
  )
}
