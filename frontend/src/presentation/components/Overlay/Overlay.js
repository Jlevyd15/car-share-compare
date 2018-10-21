import React from 'react'
import styles from './OverlayStyles.less'

const Overlay = ({ open }) => {
	return (
		open ? <div className={styles['dark-background']} /> : null
	)
}

export default Overlay