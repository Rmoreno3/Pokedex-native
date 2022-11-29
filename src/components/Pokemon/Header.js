import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import { capitalize } from 'lodash'
const getColorPokemon = require('../../api/services/getColorPokemon')

export default function Header (props) {
  const { name, order, image, type } = props
  const color = getColorPokemon(type)
  const bgStyle = [{ backgroundColor: color, ...styles.bg }]

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{order}</Text>
        </View>
        <View style={styles.containerImg}>
          <Image source={{ uri: image }} style={styles.imageStyle} />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 1.5 }]
  },
  content: {
    marginHorizontal: 20,
    marginTop: 40
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40
  },
  containerImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10
  },
  name: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 27
  },
  order: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20
  },
  imageStyle: {
    height: 250,
    width: 300,
    resizeMode: 'contain'
  }
})
