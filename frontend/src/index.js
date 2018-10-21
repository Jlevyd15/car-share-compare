import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import App from './App'
import { rootReducer } from './data/rootReducer'

const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = (initialState = {}) => createStore(
	connectRouter(history)(rootReducer),
	initialState,
	composeEnhancers(applyMiddleware(routerMiddleware(history)))
)

const render = () => {
	ReactDom.render(
		<Provider store={store()}>
			<App history={history}/>
		</Provider>,
		document.getElementById('root')
	)
}

render()

if (module.hot) {
	module.hot.accept('./App', function () {
		console.log('Accepting the updated printMe module!')
		render()
	})
	module.hot.accept('./data/rootReducer', () => {
		const nextRootReducer = require('./data/rootReducer')
		store.replaceReducer(nextRootReducer)
	})
}