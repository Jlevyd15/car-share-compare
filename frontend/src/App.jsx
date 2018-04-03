import React from 'react'
import { BrowserRouter, hashHistory } from 'react-router-dom'

import { PageLayout } from './pages/PageLayout/PageLayout'

export const App = () => (
	<BrowserRouter history={hashHistory}>
		<PageLayout />
	</BrowserRouter>
)

export default App