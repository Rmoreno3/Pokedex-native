import React from 'react'
import Icon from '@expo/vector-icons/FontAwesome5'

export default function Favorite(props) {
  const { id } = props
  const addFavorite = () => {
    console.log('Adding pokemon...', id)
  }

  return <Icon name="heart" color="#fff" size={20} onPress={addFavorite} />
}
