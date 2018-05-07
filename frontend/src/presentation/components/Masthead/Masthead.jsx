import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { routes } from '../../../project.config'
import { Link } from 'react-router-dom'

import styles from './MastheadStyles'

import { MastheadLinks } from '../MastheadLinks/MastheadLinks'
import { Image } from '../Image/Image'
import { Button } from '../Button/Button'
import { SlideNav } from '../SlideNav/SlideNav'
import { Overlay } from '../Overlay/Overlay'

import logoImg from '../../images/logos/carShare_text_logo_white.png'
import hamOpen from '../../images/icons/hamburgerOpenBtn.svg'
import hamClose from '../../images/icons/hamburgerCloseBtn.svg'


export class Masthead extends Component {
	constructor() {
		super()
		this.state = { subMenuOpen: false, slideMenuOpen: false }
		this.toggleSubMenu = this.toggleSubMenu.bind(this)
		this.toggleSlideMenu = this.toggleSlideMenu.bind(this)
	}

	createMastheadLinks(links) {
		return links && links.map(link => {
			return <li key={link.id}><Link to={link.route}>{link.name}</Link></li>
		})
	}

	// TODO - can this and the below handlers be combined?
	toggleSubMenu(e) {
		if (e && e.preventDefault) e.preventDefault()
		if (e.keyCode === 27) this.setState({ subMenuOpen: !this.state.subMenuOpen })
		this.setState({ subMenuOpen: !this.state.subMenuOpen })
	}

	toggleSlideMenu(e) {
		if (e && e.preventDefault) e.preventDefault()
		if (e.keyCode === 27) this.setState({ slideMenuOpen: !this.state.slideMenuOpen })
		this.setState({ slideMenuOpen: !this.state.slideMenuOpen })
	}

	getMenuBtn(slideMenuOpen) {
		return (
			slideMenuOpen ? 
				<Button
					callback={this.toggleSlideMenu}					
					classes={[styles['closeBtn'], 'utility']}
					aria={{ 'aria-expanded': slideMenuOpen ? 'true' : 'false' }}
				>
					<Image imageSrc={hamClose} altText="close menu" />
				</Button> : 
				<Button
					callback={this.toggleSlideMenu}
					classes={[styles['openBtn'], 'utility']} 
					aria={{ 'aria-expanded': slideMenuOpen ? 'true' : 'false' }}
				>
					<Image imageSrc={hamOpen} altText="open menu" />
				</Button>
		)
	}

	render() {
		const { props: { route }, state: { subMenuOpen, slideMenuOpen } } = this
		const detailLinks = this.createMastheadLinks(routes.detail.links)
		return (
			<div className={`${styles['container']} ${route !== '/' ? styles['dark-masthead'] : ''}`} onClick={this.toggleSlideMenu} onKeyUp={this.toggleSubMenu}>
				<Link to={routes.index}><img className={styles['logo']} src={logoImg} alt="Car Share Compare Logo" /></Link>
				<SlideNav open={slideMenuOpen} />
				<Overlay open={slideMenuOpen} />
				<MastheadLinks>
					{this.getMenuBtn(slideMenuOpen)}
					<ul>
						<li><Link to={routes.index}>Home</Link></li>
						<li><Link to={routes.list}>Compare</Link></li>
						{ detailLinks ?
							<li>
								<a href="#" onClick={this.toggleSubMenu}>Detail</a>
								<ul className={subMenuOpen ? styles['subMenuOpen'] : ''}>
									{detailLinks}
								</ul>
							</li> : null
						}
						<li><Link to={routes.about}>About</Link></li>
						<li><Link to={routes.contact}>Contact</Link></li>
					</ul>
				</MastheadLinks>
			</div>
		)
	}
}

Masthead.propTypes = {
	route: PropTypes.string.isRequired
}

export const WrappedMasthead = Masthead