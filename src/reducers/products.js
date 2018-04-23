import {ADD_PRODUCT} from '../actions/createProduct'
import {FETCHED_ALL_PRODUCTS , FETCHED_DETAILED_PRODUCT} from '../actions/fetchProduct'
import { REMOVE_PRODUCT } from '../actions/removeProduct'

import { UPDATE_PRODUCT } from '../actions/updateProduct'

export default function (state = [], action) {
  switch (action.type) {

    case ADD_PRODUCT:
      return [...state, action.payload]

    case FETCHED_ALL_PRODUCTS:
      return action.payload

    case FETCHED_DETAILED_PRODUCT:
      return action.payload

    case UPDATE_PRODUCT:
      return state.map(product => {
        if (product.id === action.payload.id) {
          return action.payload
        }
        else return product
      })

     case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.payload)

    default:
      return state
  }
}