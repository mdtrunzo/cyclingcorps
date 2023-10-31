import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Text,
} from 'react-native'
import Map from '../assets/map.png'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground source={Map} resizeMode="cover" style={styles.image} />

      <Pressable
        onPress={() => navigation.navigate('RouteOne')}
        style={styles.btn}
      >
        <Text style={styles.text}>OPEN MAP</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Profile')}
        style={styles.btn2}
      >
        <Text style={styles.text}>OPEN PROFILE</Text>
      </Pressable>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    position: 'absolute',
    zIndex: 2,
    top: 322,
    left: 60,
  },
  btn2: {
    position: 'absolute',
    zIndex: 2,
    top: 290,
    left: 150,
  },
  text: {
    color: 'transparent',
  },
})
