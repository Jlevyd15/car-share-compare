import React, { Component } from 'react'
import { routes } from '../../../project.config'
import { Link } from 'react-router-dom'
import MastheadLogo from '../MastheadLogo/MastheadLogo'
import { routerContainer } from '../../containers/routerContainer'
import { popupContainer } from '../../containers/popupContainer'
import { DropdownMenu } from './../DropdownMenu/DropdownMenu'
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'
import { HamburgerMenuIcon } from '../HamburgerMenuIcon/HamburgerMenuIcon'
import CompareButton from '../CompareButton/CompareButton'

import styles from './MastheadStyles'

export class Masthead extends Component {
	constructor() {
		super()
		this.state = { subMenuOpen: false, menuOpen: false }
	}

	/** 
	 * toggles the hamburger menu
	 * menuOpen state controls the hamburger menu icon as well as the hamburger menu itself
	 */
	toggleHamMenuClick = () => {
		const { open, openPopup, closePopup } = this.props
		// this.toggleSubMenuClick(e, true)
		if (open) closePopup()
		else openPopup()
	}

	/**
	 * handles the click event for "Detail" sub-menu
	 */
	toggleSubMenuClick = (e, close) => {
		if (!e) return null
		e.preventDefault()
		if (close) this.setState({ subMenuOpen: false })
		else this.setState({ subMenuOpen: !this.state.subMenuOpen })
	}

	/**
	 * handles the "esc" keyDown event of "Detail" sub-menu first, 
	 * then will close the hamuburger menu
	*/
	closeOnKeyDown = ({ keyCode }) => {
		const { subMenuOpen, menuOpen } = this.state
		if (keyCode === 27 && subMenuOpen) {
			this.setState({ subMenuOpen: false })
			console.log('close dropdown')
		} else if (keyCode === 27 && menuOpen) {
			this.setState({ menuOpen: false })
		}
	}

	handleOverlayClick = ({ target }) => {
		console.log('target is', target, target.innerHTML)
		if (target && target.innerHTML && target.innerHTML !== 'Detail' && !target.getAttribute('data-submenu') && this.props.open) {
			return this.toggleHamMenuClick()
		}
	}

	getSelectedLink = link => {
		return this.props.router.pathname === link || false
	} 

	render() {
		const { router: { pathname }, open, push } = this.props
		return (
			<div onKeyDown={this.closeOnKeyDown} onClick={this.handleOverlayClick}>
				<div className={`${pathname !== '/' ? `${styles['container']} ${styles['dark']} ${styles['shadow']}` : styles['container']}`}>
					<div className={styles['inner-container']}>
						<MastheadLogo pathname={pathname} routes={routes} />
						<nav>
							<ul>
								<li data-selected={this.getSelectedLink('/')}><Link to={routes.index}>Home</Link></li>
								<li data-selected={this.getSelectedLink('/list')}><Link to={routes.list}>Compare</Link></li>
								<li data-selected={this.getSelectedLink('detail')}><DropdownMenu toggleSubMenu={this.toggleSubMenuClick} subMenuOpen={this.state.subMenuOpen} /></li>
								<li data-selected={this.getSelectedLink('/about')}><Link to={routes.about}>About</Link></li>
								<li data-selected={this.getSelectedLink('/contact')}><Link to={routes.contact}>Contact</Link></li>
							</ul>
						</nav>
					</div>
					<CompareButton pathname={pathname} push={push} />
					<div className={styles['hamburger-menu-container']}>
						<HamburgerMenuIcon click={this.toggleHamMenuClick} menuOpen={open} />
						<HamburgerMenu menuOpen={open} toggleSubMenu={this.toggleSubMenuClick} subMenuOpen={this.state.subMenuOpen} />
					</div>
				</div>
			</div>
		)
	}
}

export const WrappedMasthead = popupContainer(routerContainer(Masthead))