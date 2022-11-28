import { API_HOST } from '@env'

const getPokemonApi = async (endpointUrl) => {
  console.log(endpointUrl)
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`
    const response = await fetch(endpointUrl || url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const getPokemon = async (id) => {
  try {
    const url = `${API_HOST}/pokemon/${id}`
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

const getPokemonDetailApi = async (url) => {
  try {
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

module.exports = { getPokemonApi, getPokemonDetailApi, getPokemon }
