import React from 'react'
import styles from './InfoPopup.less'

export class InfoPopup extends React.Component {
	render() {
		return (
			<div className={styles['container']}>
				<div className={styles['header']}>
					<h3 tabIndex="0">Info.</h3>
				</div>
				<p>Popup is open!</p>
			</div>
		)
	}
}