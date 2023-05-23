/* eslint-disable react/jsx-handler-names */
import { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'
import Icon from '@expo/vector-icons/FontAwesome5'
import Favorite from '../components/Pokemon/Favorite'
const { getPokemon } = require('../api/pokemon')
import useAuth from '../hooks/useAuth'

export default function PokemonScreen(props) {
  const {
    navigation,
    route: { params },
  } = props

  const [pokemon, setPokemon] = useState(null)
  const { auth } = useAuth()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (auth ? <Favorite id={pokemon?.id} /> : null),
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#FFFFFF"
          size={20}
          // style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    })
  }, [navigation, params, pokemon, auth])

  useEffect(() => {
    ;(async () => {
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
        <Type types={pokemon.types} />
        <Stats stats={pokemon.stats} />
      </ScrollView>
    </SafeAreaView>
  )
}
