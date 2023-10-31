import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import Richmond from '../assets/Profile.png'

const RoutesScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Richmond}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  )
}

export default RoutesScreen

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
  text: {
    color: 'transparent',
  },
})
