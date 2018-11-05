import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware as createRouterMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './data/sagas'

import App from './App'
import { rootReducer } from './data/rootReducer'

const sagaMiddleware = createSagaMiddleware()
const history = createBrowserHistory()
const routerMiddleware = createRouterMiddleware(history)
const middleware = [sagaMiddleware, routerMiddleware]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = (initialState = {}) => createStore(
	connectRouter(history)(rootReducer),
	initialState,
	// composeEnhancers(applyMiddleware(routerMiddleware(history)))
	composeEnhancers(applyMiddleware(...middleware))
)

const _store = store()
sagaMiddleware.run(rootSaga)

const render = () => {
	ReactDom.render(
		<Provider store={_store}>
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