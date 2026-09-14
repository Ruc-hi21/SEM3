import { configureStore } from '@reduxjs/toolkit'
// TODO 1: import the reducer you exported (default export) from ./pokemonSlice


export const store = configureStore({
  reducer: {
    // TODO 2: register your slice reducer here, e.g.
    // pokemon: pokemonReducer,
  },
})
