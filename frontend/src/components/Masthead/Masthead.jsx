import React, { Component } from 'react'
import { routes } from '../../project.config'
import { Link, withRouter } from 'react-router-dom'

import styles from './MastheadStyles'

import logoImg from '../../images/logos/carShare_text_logo_white.svg'

export class Masthead extends Component {
	createMastheadLinks(links) {
		return links && links.map(link => {
			return <li key={link.id}><Link to={link.route}>{link.name}</Link></li>
		})
	}

	render() {
		const detailLinks = this.createMastheadLinks(routes.detail.links)
		return (
			<div className={styles['container']}>
				<Link to={routes.index}><img className={styles['logo']} src={logoImg} alt="Car Share Compare Logo" /></Link>
				<nav>
					<ul>
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
			</div>
		)
	}
}

export const WrappedMasthead = withRouter(Masthead)