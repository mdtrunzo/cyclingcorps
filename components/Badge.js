import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Badge = ({ image, title, miles, text, hasLink }) => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={styles.container}
      onPress={
        hasLink ? () => navigation.navigate('Northbank') : console.log('ok')
      }
    >
      <Image source={image} style={{ width: 80, height: 80 }} />
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              color: '#4FA2DA',
              fontSize: 18,
              fontWeight: 700,
              paddingRight: 5,
            }}
          >
            {title}
          </Text>
          <Text style={{ color: '#DD6B30', fontSize: 12, fontWeight: 400 }}>
            {miles} miles
          </Text>
        </View>
        <Text
          style={{
            color: '#685845',
            fontSize: 14,
            fontWeight: 400,
            flex: 1,
            paddingTop: 10,
            flexGrow: 1,
          }}
        >
          {text}
        </Text>
      </View>
    </Pressable>
  )
}

export default Badge

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    margin: 10,
    flexDirection: 'row',
    gap: 10,
    height: 'auto',
  },
})
