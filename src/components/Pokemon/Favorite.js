import React from 'react'
import Icon from '@expo/vector-icons/FontAwesome5'
import { addPokemonFavorite } from '../../api/favorite'

export default function Favorite(props) {
  const { id } = props

  const addFavorite = async () => {
    await addPokemonFavorite(id)
  }

  return <Icon name="heart" color="#fff" size={20} onPress={addFavorite} />
}