import { useState, useEffect } from 'react'
import { View } from 'react-native'
import PokemonList from '../components/PokemonList'
const { getPokemonsApi, getPokemonDetailApi } = require('../api/pokemon')

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    ;(async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl)
      setNextUrl(response.next)
      const pokemonsArray = []

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailApi(pokemon.url)

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        })
      }

      setPokemons([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </View>
  )
}
