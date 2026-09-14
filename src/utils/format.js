export function capitalize(str = '') {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// "https://pokeapi.co/api/v2/pokemon/25/" -> 25
export function idFromUrl(url) {
  const parts = url.split('/').filter(Boolean)
  return Number(parts[parts.length - 1])
}

export function officialArtworkUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}
