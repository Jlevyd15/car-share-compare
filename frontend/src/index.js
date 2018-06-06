import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import { App } from './App.jsx'
import { rootReducer } from './data/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = (initialState = {}) => createStore(
	rootReducer,
	initialState,
	composeEnhancers(applyMiddleware(routerMiddleware(history)))
)

ReactDom.render(
	<Provider store={store()}>
		<App />
	</Provider>,
	document.getElementById('root')
)