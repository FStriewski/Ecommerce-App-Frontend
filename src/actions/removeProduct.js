import * as request from 'superagent'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'


const baseUrl = 'http://localhost:4009'

 export const removeProduct = (productId) => (dispatch) => {
    request
        .delete(`${baseUrl}/products/${productId}`)
        .then(response => dispatch({
            type: REMOVE_PRODUCT,
            payload: response.body
        })
    
    )
        //.then(response => dispatch)
        .catch(error => alert(error))

 }