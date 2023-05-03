import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios'


export const useGetBanks = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [banks, setBanks] = useState([])

  const getData = async () => {
    const resultStorage = await AsyncStorage.getItem('bd');
    console.log(resultStorage)
    if (!resultStorage) {
      try {
        console.log('sin localstorage')
        const result = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks')
        const data = await result.json()
        AsyncStorage.setItem('bd', JSON.stringify(data))
        setBanks(data)
      } catch (err) {
        setError('No se encuentran bancos')
      } finally {
        setLoading(false)
      }
    } else {
      console.log('con localstorage')
      try {
        const bankObjects = await AsyncStorage.getItem('bd')
        setBanks(JSON.parse(bankObjects))
      } catch (err) {
        setError('No se encuentran bancos')
      } finally {
        setLoading(false)
      }
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return [loading, error, banks]
}

