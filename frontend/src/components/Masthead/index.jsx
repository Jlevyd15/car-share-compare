import React, { Component } from 'react'
import { routes } from '../../project.config'
import { Link } from 'react-router-dom'

import styles from './styles'

export class Masthead extends Component {
	render() {
		return (
			<nav>
				<ul className={styles['container']}>
					<li><Link to={routes.index}>Home</Link></li>
					<li><Link to={routes.list}>Compare</Link></li>
					<li>Detail
						<ul>
							<li><Link to={routes.detail.maven}>Maven</Link></li>
							<li><Link to={routes.detail.getaround}>Getaround</Link></li>
						</ul>
					</li>
					<li><Link to={routes.about}>About</Link></li>
					<li><Link to={routes.contact}>Contact</Link></li>
				</ul>
			</nav>
		)
	}
}
