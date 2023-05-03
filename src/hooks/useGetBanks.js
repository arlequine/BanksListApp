import React, { useState, useEffect } from "react";
// import axios from 'axios'


export const useGetBanks = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [banks, setBanks] = useState([])

  const getData = async () => {
    try {
      const result = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks')
      const data = await result.json()
      setBanks(data)
    } catch (err) {
      setError('No se encuentran bancos')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return [loading, error, banks]
}

