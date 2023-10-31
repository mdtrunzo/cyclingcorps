import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Text,
  Image,
  TextInput,
} from 'react-native'
import Map from '../assets/mapBG.png'
import logo from '../assets/RCC_logo.png'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground source={Map} resizeMode="cover" style={styles.image}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Image source={logo} style={{ width: 150, height: 150 }} />
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Pressable
            onPress={() => (
              navigation.navigate('Map'), setPassword(''), setUsername('')
            )}
            style={{
              padding: 10,
              backgroundColor: '#4FA2DA',
              borderRadius: 10,
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <Text style={{ color: 'white', fontWeight: 700, fontSize: 18 }}>
              LOG IN
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen

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
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey'
  },
})
