import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import { PageLayout } from './presentation/pages/PageLayout/PageLayout'

export const App = () => (
	<ConnectedRouter history={createHistory()}>
		<PageLayout />
	</ConnectedRouter>
)