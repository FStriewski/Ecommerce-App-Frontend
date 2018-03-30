import * as request from 'superagent'

const baseUrl = 'http://localhost:4007'

 export const removeProduct = (productId) => (dispatch) => {
    request
        .delete(`${baseUrl}/products/${productId}`)
        //.then(response => dispatch)
        .catch(error => alert(error))

 }