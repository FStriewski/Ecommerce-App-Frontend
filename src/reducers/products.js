import {ADD_PRODUCT} from '../actions/createProduct'
import {FETCHED_ALL_PRODUCTS } from '../actions/fetchProduct'
import { REMOVE_PRODUCT } from '../actions/removeProduct'

export default function (state = [], action) {
  switch (action.type) {

    case ADD_PRODUCT:
      return [...state, action.payload]

    case FETCHED_ALL_PRODUCTS:
      return action.payload

     case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.payload)

    default:
      return state
  }
}