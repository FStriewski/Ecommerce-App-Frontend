
import * as request from 'superagent'

const baseUrl = 'http://localhost:4009'

export const ADD_PRODUCT = 'ADD_PRODUCT'

export const createProduct = (product) => (dispatch) => {
  console.log(product)
  request
    .post(`${baseUrl}/products`)
    .send(product)
    .then(response => dispatch({
      type: ADD_PRODUCT,
      payload: response.body
    }))
}
