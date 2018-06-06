import React, { Fragment, Component } from 'react'
import { routes } from '../../../project.config'
import { Link } from 'react-router-dom'
import styles from './DropdownMenuStyles'

export class DropdownMenu extends Component {
	constructor() {
		super()
		this.state = { subMenuOpen: false }
	}
	
	createMastheadLinks(links) {
		return links && links.map(link => {
			return <li key={link.id}><Link to={link.route}>{link.name}</Link></li>
		})
	}

	toggleSubMenu = e => {
		if (e && e.preventDefault) e.preventDefault()
		if (e.keyCode === 27) this.setState({ subMenuOpen: !this.state.subMenuOpen })
		this.setState({ subMenuOpen: !this.state.subMenuOpen })
	}
	
	render() {
		const { subMenuOpen } = this.state
		const detailLinks = this.createMastheadLinks(routes.detail.links)
		return (
			detailLinks ?
				<Fragment>
					<a href="#" onClick={this.toggleSubMenu}>Detail</a>
					<ul className={`${styles['container']} ${subMenuOpen ? styles['subMenuOpen'] : ''}`}>
						{detailLinks}
					</ul>
				</Fragment> : null 
		)
	}
}