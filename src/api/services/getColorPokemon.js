const { POKEMON_TYPE_COLORS } = require('../../utils/Constants')

const getColorPokemon = (type) => {
  return POKEMON_TYPE_COLORS[type.toLowerCase()]
}

module.exports = getColorPokemon
