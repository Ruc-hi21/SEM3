import { capitalize } from '../utils/format'

function PokemonCard({ pokemon, isFavorite, onToggleFavorite }) {
  return (
    <div className="poke-card">
      <button
        className={`poke-card__fav ${isFavorite ? 'is-active' : ''}`}
        onClick={onToggleFavorite}
        aria-label="Toggle favorite"
      >
        ★
      </button>
      <span className="poke-card__id">#{String(pokemon.id).padStart(3, '0')}</span>
      <div className="poke-card__image-wrap">
        <img className="poke-card__image" src={pokemon.image} alt={pokemon.name} loading="lazy" />
      </div>
      <h3 className="poke-card__name">{capitalize(pokemon.name)}</h3>
    </div>
  )
}

export default PokemonCard
