
import * as request from 'superagent'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'
export const ADD_USER = 'ADD_USER'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_LOGOUT = 'USER_LOGOUT'


const baseUrl = 'http://localhost:4009'



export const createUser = (email, pw, name) => (dispatch) =>
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

export const loginUser = (username, password) => (dispatch) =>
    request
        .post(`${baseUrl}/logins`)
        .send({ username, password })
        .then(result => {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: result.body
            })
        })
        .catch(err => {
            if (err.status === 400) {
                dispatch({
                    type: USER_LOGIN_FAILED,
                    payload: err.response.body.message || 'Unknown error'
                })
            }
            else {
                console.error(err)
            }
        })

export const logout = () => ({
    type: USER_LOGOUT
})

