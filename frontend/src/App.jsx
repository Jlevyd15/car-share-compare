import React from 'react'
import { ConnectedRouter } from 'connected-react-router'

import { PageLayout } from './presentation/pages/PageLayout/PageLayout'
console.log('history', history)
export const App = ({ history }) => (
	<ConnectedRouter history={history}>
		<PageLayout />
	</ConnectedRouter>
)
