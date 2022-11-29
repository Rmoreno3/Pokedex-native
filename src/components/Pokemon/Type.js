import { View, Text, StyleSheet } from 'react-native'
import { capitalize } from 'lodash'
import React from 'react'
const getColorPokemon = require('../../api/services/getColorPokemon')

export default function Type (props) {
  const { types } = props

  return (
    <View style={styles.container}>
      {types.map(item => (
        <View key={item.name} style={{ ...styles.pill, backgroundColor: getColorPokemon(item.type.name) }}>
          <Text style={styles.text}>
            {capitalize(item.type.name)}
          </Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
    marginHorizontal: 10
  },
  text: {
    color: '#FFFFFF'
  }
})
