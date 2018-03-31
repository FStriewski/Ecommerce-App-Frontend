
import * as request from 'superagent'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'
export const ADD_USER = 'ADD_USER'


const baseUrl = 'http://localhost:4009'



export const signup = (email, pw, name) => (dispatch) =>
    request
        .post(`${baseUrl}/users`)
        .send({
            username: name,
            password: pw,
            email: email
        })
        .then(result => {
            dispatch({
                type: USER_SIGNUP_SUCCESS
            })
        })
        .catch(err => {
            if (err.status === 400) {
                dispatch({
                    type: USER_SIGNUP_FAILED,
                    payload: err.response.body.message || 'Unknown error'
                })
            }
            else {
                console.log(err)
            }
        })



