import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Text,
  ScrollView,
} from 'react-native'
import Map from '../assets/mapBG.png'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Badge from '../components/Badge'
import img1 from '../assets/Frame9.png'

const RouteOne = () => {
  const navigation = useNavigation()

  const badgeData = [
    {
      id: 1,
      title: 'Belle Isle',
      miles: 10.4,
      text: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.',
      hasLink: false,
      image: img1,
    },
    {
      id: 2,
      title: 'Northbank',
      miles: 6.8,
      text: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.',
      hasLink: true,
      image: img1,
    },
    {
      id: 3,
      title: 'Dogwood Dell',
      miles: 5.6,
      text: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.',
      hasLink: false,
      image: img1,
    },
    {
      id: 4,
      title: 'Virginia Capital',
      miles: 4.3,
      text: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.',
      hasLink: false,
      image: img1,
    },
  ]
  return (
    <View style={styles.container}>
      <ImageBackground source={Map} resizeMode="cover" style={styles.image}>
        <Pressable
          style={styles.closeBTN}
          onPress={() => navigation.navigate('Map')}
        >
          <Text style={styles.closeIcon}>X</Text>
        </Pressable>
        <ScrollView>
          <Text style={styles.h1}>Bon Air Routes</Text>
          {badgeData?.map((item) => (
            <Badge
              key={item.id}
              title={item.title}
              miles={item.miles}
              text={item.text}
              image={item.image}
              hasLink={item.hasLink}
            />
          ))}
          <View
            style={{
              borderStyle: 'dashed',
              borderColor: '#85725C',
              borderWidth: 4,
              padding: 40,
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#85725C', fontSize: 18, fontWeight: 700 }}>
              + Record New Route
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default RouteOne

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  closeBTN: {
    backgroundColor: '#DD6B30',
    position: 'absolute',
    padding: 8,
    borderRadius: 100,
    right: 10,
    top: 10,
    zIndex: 10
  },
  closeIcon: {
    color: '#F3E7DE',
    fontSize: 18,
  },
  h1: {
    color: '#685845',
    fontSize: 32,
    fontWeight: 700,
    paddingLeft: 20,
    marginTop: 40,
  },
})
