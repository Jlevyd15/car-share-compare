import React from 'react'
import styles from './SlideNavStyles'

export const SlideNav = ({ open }) => (
	<div className={open ? `${styles['menu-container-active']}` : `${styles['menu-container']}`}>
		<div className={styles['nav-bar']}>
			<ul>
				<li>test slid nave</li>
				{/* a(href="/")
				li Home
				a(href="/list")
				li Compare
				a(href="")
				li.dropdownBtn Detail
					div.dropdownContent
						a(href="/Maven") Maven
						a(href="/Getaround") Getaround
						a(href="/City%20CarShare") City CarShare
						a(href="/Zipcar") Zipcar
						a(href="/Turo") Turo
						a(href="/Enterprise%20CarShare") Enterprise
				a(href="/about")
				li About
				a(href="/contact")
				li Contact
				div.nav-footer
					div.social-icons
					p Find us on social media
					img(src="/images/assets/icons/square-facebook.svg")
					img(src="/images/assets/icons/square-twitter.svg")
					img(src="/images/assets/icons/mail-square-social-media.svg")
					div.copyright
					p © 2016 Car Share Compare, All Rights Reserved. */}
			</ul>
		</div>
	</div>
)