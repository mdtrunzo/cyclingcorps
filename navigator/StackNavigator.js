import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import RouteOne from '../screens/RouteOne'
import Northbank from '../screens/Northbank'
import Profile from '../screens/Profile'
const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
    >
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="RouteOne" component={RouteOne} />
      <Stack.Screen name="Northbank" component={Northbank} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default StackNavigator
