const API_HOST = require('../utils/constants')

const getPokemonApi = async () => {
  const url = `${API_HOST}/pokemon?limit=20&offset=0`
  const response = await fetch(url)
  const data = await response.json()

  return data
}

const getPokemonDetailApi = async (url) => {
  const response = await fetch(url)
  const result = await response.json()
  return result
}

module.exports = { getPokemonApi, getPokemonDetailApi }
