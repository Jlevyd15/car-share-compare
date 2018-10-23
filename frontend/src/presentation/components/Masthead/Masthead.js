import React, { Component } from 'react'
import { routes } from '../../../project.config'
import { Link } from 'react-router-dom'

import styles from './MastheadStyles'
import logoImg from '../../images/logos/carShare_text_logo_white.png'
import { routerContainer } from '../../containers/routerContainer'
import { popupContainer } from '../../containers/popupContainer'
import { DropdownMenu } from './../DropdownMenu/DropdownMenu'
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'
import { HamburgerMenuIcon } from '../HamburgerMenuIcon/HamburgerMenuIcon'
import CompareButton from '../CompareButton/CompareButton'

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
		// TODO - this has a bug if I click on the logo it open/closes the menu
		if (target && target.innerHTML && target.innerHTML === 'Detail' || target.getAttribute('data-submenu') === 'true') {
			return null
		} else {
			return this.toggleHamMenuClick()
		}
	}

	render() {
		const { router: { pathname }, open } = this.props
		return (
			<div onKeyDown={this.closeOnKeyDown} onClick={this.handleOverlayClick}>
				<div className={`${pathname !== '/' ? styles['container'] + ' ' + styles['dark'] : styles['container']}`}>
					<Link to={routes.index}><img className={styles['logo']} src={logoImg} alt="Car Share Compare Logo" /></Link>
					<nav>
						<ul>
							<li><Link to={routes.index}>Home</Link></li>
							<li><Link to={routes.list}>Compare</Link></li>
							<li><DropdownMenu toggleSubMenu={this.toggleSubMenuClick} subMenuOpen={this.state.subMenuOpen} /></li>
							<li><Link to={routes.about}>About</Link></li>
							<li><Link to={routes.contact}>Contact</Link></li>
						</ul>
					</nav>
				</div>
				<CompareButton />
				<div className={styles['hamburger-menu-container']}>
					<HamburgerMenuIcon click={this.toggleHamMenuClick} menuOpen={open} />
					<HamburgerMenu menuOpen={open} toggleSubMenu={this.toggleSubMenuClick} subMenuOpen={this.state.subMenuOpen} />
				</div>
			</div>
		)
	}
}

export const WrappedMasthead = popupContainer(routerContainer(Masthead))