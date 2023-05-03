import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ListItem = ({ name, description, age, url }) => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.cardContain}>
        <View>
          <Image
            source={{ uri: url }}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <View style={{ marginLeft: 12 }}>
          <Text
            style={styles.name}>
            {name}
          </Text>
          <View
            style={styles.containDescription}>
            <Text
              style={styles.description}>
              {description}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.ageBall}>
        <Text style={styles.age}>
          {age}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  containerCard: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7e1425',
    borderRadius: 15,
    shadowColor: 'shadow',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  cardContain: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ageBall: {
    height: 35,
    backgroundColor: '#e6e6e6',
    borderWidth: 0,
    width: 35,
    marginLeft: -26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  age: { color: '#000' },
  name: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  containDescription: {
    marginTop: 4,
    borderWidth: 0,
    width: '85%',
  },
  description: {
    color: 'white',
    fontSize: 14,
  },
  logo: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
})

export default ListItem