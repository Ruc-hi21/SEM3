import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemon, toggleFavorite } from './redux/pokemonSlice'
import PokemonCard from './components/PokemonCard'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const { list, status, error, favorites } = useSelector((state) => state.pokemon)

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPokemon())
  }, [status, dispatch])

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-inner">
          <div className="app__brand">
            <span className="app__ball" aria-hidden="true" />
            <h1 className="app__title">PokéDex</h1>
          </div>
          {status === 'succeeded' && (
            <span className="app__count">{list.length} Pokémon</span>
          )}
        </div>
      </header>

      <main className="app__main">
        {status === 'loading' && <Loader />}

        {status === 'failed' && (
          <ErrorMessage message={error} onRetry={() => dispatch(fetchPokemon())} />
        )}

        {status === 'succeeded' && (
          <div className="grid">
            {list.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                isFavorite={favorites.includes(pokemon.id)}
                onToggleFavorite={() => dispatch(toggleFavorite(pokemon.id))}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
