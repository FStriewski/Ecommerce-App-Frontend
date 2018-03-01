import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'

const reducer = combineReducers(reducers)

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const enhancer = compose(
	applyMiddleware(ReduxThunk),
	devTools
)

const store = createStore(reducer, enhancer)

export default store
