import React from 'react'
import PropTypes from 'prop-types'

import styles from './MastheadLinksStyles'

export const MastheadLinks = ({ children }) => {
	return (
		<div className={styles['links']}>
			{children}
		</div>
	)
}

MastheadLinks.propTypes = {
	children: PropTypes.node
}