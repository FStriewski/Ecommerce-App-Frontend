import {ADD_PRODUCT} from '../actions/createProduct'
import {FETCHED_ALL_PRODUCTS , FETCHED_DETAILED_PRODUCT} from '../actions/fetchProduct'
import { REMOVE_PRODUCT } from '../actions/removeProduct'

import { UPDATE_PRODUCT } from '../actions/updateProduct'


// export default function (state = null, action) {
//   switch (action.type) {
//     case FETCHED_DETAILED_PRODUCT:
//       return action.payload

//     default:
//       return state
//   }
// }

export default function (state = [], action) {
  switch (action.type) {

    case ADD_PRODUCT:
      return [...state, action.payload]

    case FETCHED_ALL_PRODUCTS:
      return action.payload

    case FETCHED_DETAILED_PRODUCT:
      return action.payload

    case UPDATE_PRODUCT:
      if (action.payload.id === state.id) {
        return action.payload
      }
      else return state

      // Reducer not working correctly...sth with filter says reades:
     case REMOVE_PRODUCT:
    console.log(state)
    //return state
      return  [...state.filter(id => id !== action.payload) ]
      
      //return [...state, action.payload]

      case UPDATE_PRODUCT:
  if (action.payload.id === state.id) {
    return action.payload
  }
  else return state

    default:
      return state
  }
}