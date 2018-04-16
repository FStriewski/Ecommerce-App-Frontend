import * as request from 'superagent'

const baseUrl = 'http://localhost:4009'

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'


export const updateProduct = (productId, updates) => (dispatch) => {
    request
        .put(`${baseUrl}/products/${productId}`)
        .send(updates)
        .then(response => dispatch ({ 
            type: UPDATE_PRODUCT,
            payload: response.body
        }) )
}