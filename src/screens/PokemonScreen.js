import { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
const { getPokemon } = require('../api/pokemon')

export default function PokemonScreen (props) {
  const { navigation, route: { params } } = props

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemon(params.id)
        setPokemon(response)
        console.log(response)
      } catch (error) {
        console.error(error)
        navigation.goBack()
      }
    })()
  }, [params])

  if (!pokemon) return null

  return (
    <View>
      <Text>Estamos en un POKEMON!!</Text>
      <Text>{pokemon.name}</Text>
      <Image
        source={{ uri: `${pokemon.sprites.other['official-artwork'].front_default}` }}
        style={styles.imageStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40
  }
})
