import React from 'react'
import { hot } from 'react-hot-loader'
import { ConnectedRouter } from 'connected-react-router'
import { PageLayout } from './presentation/pages/PageLayout/PageLayout'

const App = ({ history }) => (
	<ConnectedRouter history={history}>
		<PageLayout />
	</ConnectedRouter>
)

export default hot(module)(App)