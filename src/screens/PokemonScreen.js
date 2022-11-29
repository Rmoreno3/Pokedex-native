import { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'
const { getPokemon } = require('../api/pokemon')

export default function PokemonScreen (props) {
  const { navigation, route: { params } } = props

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemon(params.id)
        setPokemon(response)
      } catch (error) {
        console.error(error)
        navigation.goBack()
      }
    })()
  }, [params])

  if (!pokemon) return null

  return (
    <SafeAreaView>
      <ScrollView>
        <Header
          name={pokemon.name}
          order={pokemon.order}
          image={pokemon.sprites.other['official-artwork'].front_default}
          type={pokemon.types[0].type.name}
        />
        <Type
          types={pokemon.types}
        />
        <Stats stats={pokemon.stats} />
      </ScrollView>
    </SafeAreaView>
  )
}
