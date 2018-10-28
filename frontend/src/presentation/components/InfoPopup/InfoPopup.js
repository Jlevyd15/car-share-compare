import React from 'react'
import PropTypes from 'prop-types'
import styles from './InfoPopup.less'
import closeBtn from '../../images/icons/close_circle_filled.svg'
import { Button } from '../Button/Button'
import { Image } from '../Image/Image'
import { popupContainer } from '../../containers/popupContainer'
import infoIcon from '../../images/icons/info_outline.svg'

class InfoPopup extends React.Component {
	constructor() {
		super()
		this.iconMap = {
			'info': { src: infoIcon, alt: 'information' }
		}
	}
	render() {
		const { id, icon, heading, body, children } = this.props
		return (
			<div id={id} className={styles['container']}>
				<Button click={this.props.closePopup} classes={['utility', styles['close-btn']]}>
					<img src={closeBtn} alt="close popup" />
				</Button>
				<div className={styles['header']}>
					<Image imageSrc={this.iconMap[icon]['src']} altText={this.iconMap[icon]['alt']} />
					<h3 tabIndex="0">{heading}</h3>
				</div>
				<p>{body}</p>
				{children}
			</div>
		)
	}
}

InfoPopup.propTypes = {
	id: PropTypes.string,
	icon: PropTypes.oneOfType(['info']),
	heading: PropTypes.string,
	body: PropTypes.string
}

export default popupContainer(InfoPopup)