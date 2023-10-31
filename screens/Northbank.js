import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import Richmond from '../assets/richmond.png'

const Northbank = () => {
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

export default Northbank

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
