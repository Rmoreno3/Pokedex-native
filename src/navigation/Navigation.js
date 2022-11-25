import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AccountScreen from '../screens/AccountScreen'
import PokedexScreen from '../screens/PokedexScreen'
import FavoriteScreen from '../screens/FavoriteScreen'

const Tab = createBottomTabNavigator()

export default function Navigation () {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Favorites' component={FavoriteScreen} />
      <Tab.Screen name='Pokedex' component={PokedexScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
    </Tab.Navigator>
  )
}
