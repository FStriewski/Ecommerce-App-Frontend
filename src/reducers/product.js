import { FETCHED_DETAILED_PRODUCT } from '../actions/fetchProduct'
import { UPDATE_PRODUCT } from '../actions/updateProduct'

export default function (state = [], action) {

    switch (action.type) {
        case FETCHED_DETAILED_PRODUCT:
            return action.payload
        case UPDATE_PRODUCT:
            if (action.payload.id === state.id) {
                return action.payload
            }
            else return state
        default:
            return state

        }

    }

    