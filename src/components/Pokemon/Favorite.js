import React, { useState, useEffect } from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { addPokemonFavorite, isPokemonFavorite } from '../../api/favorite'

export default function Favorite(props) {
  const { id } = props
  const [isFavorite, setIsFavorite] = useState(undefined)
  const [reloadCheck, setReloadCheck] = useState(false)
  const Icon = isFavorite ? FontAwesome : FontAwesome5

  useEffect(() => {
    ;(async () => {
      try {
        const response = await isPokemonFavorite(id)
        setIsFavorite(response)
      } catch (error) {
        setIsFavorite(false)
      }
    })()
  }, [id, reloadCheck])

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev)
  }

  const addFavorite = async () => {
    try {
      await addPokemonFavorite(id)
      onReloadCheckFavorite()
    } catch (error) {
      throw error
    }
  }

  const removeFavorite = () => {
    console.log('eliminando favorito')
  }

  return (
    <Icon
      name="heart"
      color="#FF0000"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
    />
  )
}
