import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'
import AccountScreen from '../screens/AccountScreen'
import PokedexScreen from '../screens/PokedexScreen'
import FavoriteScreen from '../screens/FavoriteScreen'

const Tab = createBottomTabNavigator()

export default function Navigation () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Favorites' component={FavoriteScreen} options={{
          tabBarIcon: ({ focused, color, size }) => (
            focused
              ? <Icon name='heart' solid color={color} size={size} />
              : <Icon name='heart' color={color} size={size} />
          ),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray'
        }}
      />
      <Tab.Screen
        name='Pokedex' component={PokedexScreen} options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball()
        }}
      />
      <Tab.Screen
        name='Account' component={AccountScreen} options={{
          tabBarIcon: ({ focused, color, size }) => (
            focused
              ? <Icon name='user' solid color={color} size={size} />
              : <Icon name='user' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

function renderPokeball () {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -18 }}
    />
  )
}
