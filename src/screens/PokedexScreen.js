import { useState, useEffect } from 'react'
import { View } from 'react-native'
import PokemonList from '../components/PokemonList'
const { getPokemonApi, getPokemonDetailApi } = require('../api/pokemon')

export default function Pokedex () {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  const loadPokemons = async () => {
    try {
      const data = await getPokemonApi(nextUrl)
      setNextUrl(data.next)
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
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  }, [])

  return (
    <View>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
    </View>
  )
}
