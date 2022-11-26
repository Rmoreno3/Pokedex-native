import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { capitalize } from 'lodash'
const getColorPokemon = require('../api/services/getColorPokemon')

export default function PokemonCard (props) {
  const { pokemon } = props

  const pokemonColor = getColorPokemon(pokemon.type)
  console.log(pokemonColor)

  const bgStyles = {
    backgroundColor: pokemonColor,
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 16
    },
    shadowOpacity: 0.70,
    shadowRadius: 14,
    elevation: 11,
    ...styles.cardContainer_div
  }
  const goToPokemon = () => {
    console.log(`Vamos al pokemon: ${pokemon.name}`)
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.cardContainer}>
        <View style={bgStyles}>
          <Text style={styles.styleOrderNum}>{`#${pokemon.order}`}</Text>
          <Text>{capitalize(pokemon.name)}</Text>
          <Text>{capitalize(pokemon.type)}</Text>
          <Image
            source={{ uri: `${pokemon.image}` }}
            style={styles.imageStyle}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flex: 1,
    height: 100,
    margin: 5

  },
  cardContainer_div: {
    flex: 1,
    padding: 10,
    borderRadius: 15
  },
  imageStyle: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    height: 90,
    width: 90
  },
  styleOrderNum: {
    fontWeight: 'bold',
    position: 'absolute',
    right: 10,
    fontSize: 15
  }
})
