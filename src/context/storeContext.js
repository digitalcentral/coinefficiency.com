import React, { useState, useEffect, createContext } from "react"
import axios from "axios"

const initialStore = {
  prices: null,
}

const StoreContext = createContext(initialStore)

const StoreProvider = ({ children }) => {
  const [store, updateStore] = useState(initialStore)

  // Get Prices
  useEffect(() => {
    axios.get(`/api/get-prices`).then(({ data }) => {
      updateStore(prevState => {
        return { ...prevState, prices: data }
      })
    })
  }, [updateStore])

  return <StoreContext.Provider value={{ store }}>{children}</StoreContext.Provider>
}

export default StoreContext

export { StoreProvider }
