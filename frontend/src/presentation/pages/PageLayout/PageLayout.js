import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { routes } from '../../../project.config'
import { Switch, Route } from 'react-router-dom'
// import styles from './PageLayoutStyles'
import Overlay from '../../components/Overlay/Overlay'
// import the global styles
import '../../styles/global'

/* pages */
import Landing from '../Landing/Landing'
import List from '../List'
import Compare from '../Compare'
import Detail from '../Detail'
import About from '../About'
import Contact from '../Contact'
import NotFound from '../NotFound'

/* components */
import { WrappedMasthead } from '../../components/Masthead/Masthead'

export class PageLayout extends Component {
	constructor() {
		super()
		this.basePath = process.env.NODE_ENV === 'development' ? routes.apiURL.dev : routes.apiURL.prod
	}
	render() {
		return (
			<Fragment>
				<Overlay />
				<WrappedMasthead id="masthead" />
				<main>
					<Switch>	
						<Route exact path={routes.index} render={() => <Landing basePath={this.basePath} />} />
						<Route exact path={routes.list} render={() => <List basePath={this.basePath} />} />
						<Route exact path={routes.compare} component={Compare} />
						<Route exact path={routes.about} component={About} />
						<Route exact path={routes.contact} component={Contact} />
						<Route exact path={routes.detail.route} component={Detail} />
						<Route component={NotFound} />
					</Switch>
				</main>
			</Fragment>
		)
	}
}

PageLayout.propTypes = {
	children: PropTypes.node
}