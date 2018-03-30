import {ADD_PRODUCT} from '../actions/createProduct'
import {FETCHED_ALL_PRODUCTS , FETCHED_DETAILED_PRODUCT} from '../actions/fetchProduct'

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

    default:
      return state
  }
}
