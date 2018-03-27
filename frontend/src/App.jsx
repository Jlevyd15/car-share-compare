import React, { Component, Fragment } from 'react'
import { routes } from './project.config'
import { BrowserRouter, hashHistory, Switch, Route } from 'react-router-dom'

// import the global styles
import './styles/global'

/* pages */
import Landing from './pages/Landing'
import List from './pages/List'
import Compare from './pages/Compare'
import Detail from './pages/Detail'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import { WrappedMasthead } from './components/Masthead/Masthead'

export class App extends Component {

	render() {
		return (
			<BrowserRouter history={hashHistory}>
				<Fragment>
					<WrappedMasthead />
					<main>
						<Switch>		
							<Route exact path={routes.index} component={Landing} />
							<Route exact path={routes.list} component={List} />
							<Route exact path={routes.compare} component={Compare} />
							<Route exact path={routes.about} component={About} />
							<Route exact path={routes.contact} component={Contact} />
							<Route path={routes.detail.route} component={Detail} />
							<Route component={NotFound} />
						</Switch>
					</main>
				</Fragment>
			</BrowserRouter>
		)
	}
}

export default App