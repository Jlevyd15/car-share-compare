import React, { Component } from 'react'
import { routes } from '../../project.config'
import { Link, withRouter } from 'react-router-dom'

import styles from './MastheadStyles'

export class Masthead extends Component {
	createMastheadLinks(links) {
		return links && links.map(link => {
			return <li key={link.id}><Link to={link.route}>{link.name}</Link></li>
		})
	}

	render() {
		const detailLinks = this.createMastheadLinks(routes.detail.links)
		return (
			<nav className={styles['container']}>
				<ul>
					<li><a>Logo</a></li>
					<li><Link to={routes.index}>Home</Link></li>
					<li><Link to={routes.list}>Compare</Link></li>
					{ detailLinks ? 
						<li>Detail
							<ul>
								{detailLinks}
							</ul>
						</li> : null
					}
					<li><Link to={routes.about}>About</Link></li>
					<li><Link to={routes.contact}>Contact</Link></li>
				</ul>
			</nav>
		)
	}
}

export const WrappedMasthead = withRouter(Masthead)