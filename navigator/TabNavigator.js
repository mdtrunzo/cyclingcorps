import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RoutesScreen from '../screens/RoutesScreen'
import MapScreen from '../screens/MapScreen'
import SupportScreen from '../screens/SupportScreen'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#F3E7DE',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Map') {
            iconName = focused ? 'location' : 'location-outline'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'bicycle' : 'bicycle-outline'
          } else if (route.name === 'Support') {
            iconName = focused ? 'cog' : 'cog-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },

        tabBarActiveTintColor: '#DD6B30',
        tabBarInactiveTintColor: '#4FA2DA',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={RoutesScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
