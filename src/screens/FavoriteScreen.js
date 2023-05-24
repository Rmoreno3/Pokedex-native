import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { getPokemonFavorite } from '../api/favorite'

export default function Favorites() {
  const [favorites, setFavorites] = useState([])

  const checkFavorites = async () => {
    const response = await getPokemonFavorite()
    console.log(response)
  }

  return (
    <View>
      <Text>Favorites</Text>
      <Button title="Get favorites" onPress={checkFavorites} />
    </View>
  )
}
