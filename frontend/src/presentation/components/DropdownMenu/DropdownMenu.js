import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'

import { routes } from '../../../project.config'
import { Link } from 'react-router-dom'
import styles from './DropdownMenuStyles'

export class DropdownMenu extends PureComponent {
	
	createMastheadLinks(links) {
		return links && links.map(link => {
			return <li key={link.id}><Link to={link.route}>{link.name}</Link></li>
		})
	}
	
	render() {
		const { subMenuOpen, toggleSubMenu } = this.props
		const detailLinks = this.createMastheadLinks(routes.detail.links)
		return (
			detailLinks ?
				<Fragment>
					<a href="#" onClick={toggleSubMenu}>Detail</a>
					<ul className={`${styles['container']} ${subMenuOpen ? styles['subMenuOpen'] : ''}`}>
						{detailLinks}
					</ul>
				</Fragment> : null 
		)
	}
}

DropdownMenu.propTypes = {
	toggleSubMenu: PropTypes.func.isRequired,
	subMenuOpen: PropTypes.bool.isRequired
}