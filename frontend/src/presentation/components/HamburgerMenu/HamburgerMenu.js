import React from 'react'

import styles from './HamburgerMenu.less'
import { DropdownMenu } from '../DropdownMenu/DropdownMenu'

export const HamburgerMenu = () => {
	return (
		<div className={styles['menu-container']}>
			<div className={styles['nav-bar']}>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/list">Compare</a></li>
					<li><DropdownMenu /></li>
					<li><a href="/about">About</a></li>
					<li><a href="/contact">Contact</a></li>
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