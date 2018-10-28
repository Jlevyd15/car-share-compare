import React from 'react'
import logoImg from '../../images/logos/carShare_text_logo_white.png'
import styles from './MastheadLogoStyles'
import { Link } from 'react-router-dom'

const MastheadLogo = ({ pathname, routes }) => {
	return ( 
		<Link to={routes.index}>
			<img 
				className={pathname === '/' ? `${styles['logo']} ${styles['landing']}` : styles['logo']} 
				src={logoImg} 
				alt="Car Share Compare Logo" />
		</Link>
	)
}

export default MastheadLogo