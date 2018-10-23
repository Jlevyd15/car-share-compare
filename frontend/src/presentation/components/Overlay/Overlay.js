import React from 'react'
import styles from './OverlayStyles.less'
import { overlayContainer } from '../../containers/overlayContainer'

const Overlay = ({ showOverlay }) => {
	return (
		showOverlay ? <div className={styles['dark-background']} /> : null
	)
}

export default overlayContainer(Overlay)