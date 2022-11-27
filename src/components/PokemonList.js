import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import PokemonCard from './PokemonCard'

export default function PokemonList (props) {
  const { pokemons, loadPokemons, isNext } = props

  const loadMore = () => {
    loadPokemons()
  }

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={style.flatListContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size='large'
            style={style.spinner}
          />
        )
      }
    />
  )
}

const style = StyleSheet.create({
  flatListContainer: {
    display: 'flex',
    padding: 15,
    backgroundColor: 'white'
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60
  }
})
