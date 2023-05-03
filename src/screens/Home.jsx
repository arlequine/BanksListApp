import React from 'react'
import { SafeAreaView, Text, FlatList, StatusBar, StyleSheet } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import ListItem from '../components/ListItem'
import { useGetBanks } from '../hooks/useGetBanks'

const Home = () => {
  const [loading, error, banks] = useGetBanks()

  const renderItem = ({ item }) => (
    <ListItem name={item.bankName} description={item.description} age={item.age} url={item.url} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BanksList</Text>

      {
        loading ?
          <Spinner
            visible={loading}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          :
          <FlatList
            data={banks}
            renderItem={renderItem}
            keyExtractor={(item) => item.bankName}
          />
      }

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'black'
  },
  title: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
})



export default Home