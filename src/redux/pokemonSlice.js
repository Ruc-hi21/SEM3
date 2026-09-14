import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { idFromUrl, officialArtworkUrl } from '../utils/format'

/**
 * TODO — fetch the list and return it in this shape:
 *   [{ id: 1, name: "bulbasaur", image: "https://..." }, ...]
 *
 * Endpoint: GET https://pokeapi.co/api/v2/pokemon?limit=24
 * Response: { results: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }, ...] }
 *
 * The response has no id/image — get the id from the url with
 * idFromUrl(url), then build the image with officialArtworkUrl(id).
 */
export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {
  // 1. fetch the endpoint above
  // 2. map results -> [{ id, name, image }] make sure to convert the response to JSON
  // 3. return that array
      
      
})

const initialState = {
  list: [], // { id, name, image }[]
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  favorites: [], // array of favorited pokemon ids
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    // Dispatched as toggleFavorite(pokemon.id) -> action.payload is that id.
    // TODO: add it to state.favorites if it's not there, remove it if it is.
    toggleFavorite: (state, action) => {},
  },
  extraReducers: (builder) => {
    // TODO: handle the 3 lifecycle actions of fetchPokemon
    // builder
    //   .addCase(fetchPokemon.pending, (state) => { state.status = 'loading' })
    //   .addCase(fetchPokemon.fulfilled, (state, action) => { ... })
    //   .addCase(fetchPokemon.rejected, (state, action) => { ... })
  },
})

export const { toggleFavorite } = pokemonSlice.actions
export default pokemonSlice.reducer
