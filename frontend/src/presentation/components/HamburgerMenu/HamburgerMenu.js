import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { routes } from '../../../project.config'

import styles from './HamburgerMenu.less'
import { DropdownMenu } from '../DropdownMenu/DropdownMenu'

export class HamburgerMenu extends PureComponent {
	render() {
		const { menuOpen, subMenuOpen, toggleSubMenu } = this.props
		return (
			<div className={`${styles['menu-container']} ${menuOpen ? styles['menu-container-active'] : ''}`}>
				<div className={styles['nav-bar']}>
					<ul>
						<li><Link to={routes.index}>Home</Link></li>
						<li><Link to={routes.list}>Compare</Link></li>
						<li data-submenu="true" onClick={toggleSubMenu}><DropdownMenu toggleSubMenu={toggleSubMenu} subMenuOpen={subMenuOpen} /></li>
						<li><Link to={routes.about}>About</Link></li>
						<li><Link to={routes.contact}>Contact</Link></li>
					</ul>
					<div className={styles['nav-footer']}>
						<div className={styles['social-icons']}>
							<p>Find us on social media</p>
							<img src="/images/assets/icons/square-facebook.svg"/>
							<img src="/images/assets/icons/square-twitter.svg"/>
							<img src="/images/assets/icons/mail-square-social-media.svg"/>
							<div className={styles['copyright']}>
								<p>© 2016 Car Share Compare, All Rights Reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

HamburgerMenu.propTypes = {
	menuOpen: PropTypes.bool.isRequired,
	toggleSubMenu: PropTypes.func.isRequired,
	subMenuOpen: PropTypes.bool.isRequired
}