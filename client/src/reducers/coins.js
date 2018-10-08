import axios from 'axios';
const ADD_COIN = 'ADD_COIN'
const COINS = 'COINS'
const REMOVE_COIN = 'REMOVE_COIN'

export const getCoins = () => {
  return (dispatch) => {
    axios.get('api/coins')
      .then( res => dispatch({ type: COINS, coins: res.data }) )
  }
}

export const addCoin = (coin) => {
  return (dispatch) => {
    axios.post('api/coins', { coin })
      .then( res => dispatch({ type: ADD_COIN, coin: res.data }) )
  }
}

export const removeCoin = (id) => {
  return (dispatch) => {
    axios.put(`/api/coins/${id}`)
      .then( () => dispatch({ tpye: REMOVE_COIN, id }) )
  }
}

export default ( state = [], action ) => {
  switch(action.type) {
    case COINS:
      return action.coins
    case ADD_COIN:
      return [...state, action.coin]
    case REMOVE_COIN:
      return state.fiter( coin => coin.id !== action.id)
    default:
      return state
  }
}