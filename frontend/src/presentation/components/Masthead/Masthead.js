import React, { Fragment } from 'react'
import { routes } from '../../../project.config'
import { Link } from 'react-router-dom'

import styles from './MastheadStyles'
import logoImg from '../../../images/logos/carShare_text_logo_white.svg'
import { routerContainer } from '../../containers/routerContainer'
import { DropdownMenu } from './../DropdownMenu/DropdownMenu'
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'
import { HamburgerMenuIcon } from '../HamburgerMenuIcon/HamburgerMenuIcon'

export const Masthead = ({ router: { pathname } }) => (
	<Fragment>
		<div className={`${pathname !== '/' ? styles['container'] + ' ' + styles['dark'] : styles['container']}`}>
			<Link to={routes.index}><img className={styles['logo']} src={logoImg} alt="Car Share Compare Logo" /></Link>
			<nav>
				<ul>
					<li><Link to={routes.index}>Home</Link></li>
					<li><Link to={routes.list}>Compare</Link></li>
					<li><DropdownMenu /></li>
					<li><Link to={routes.about}>About</Link></li>
					<li><Link to={routes.contact}>Contact</Link></li>
				</ul>
			</nav>
		</div>
		<HamburgerMenuIcon />
		<HamburgerMenu />
	</Fragment>
)

export const WrappedMasthead = routerContainer(Masthead)