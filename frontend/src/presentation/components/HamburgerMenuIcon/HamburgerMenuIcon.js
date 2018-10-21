import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import styles from './HamburgerMenuIcon.less'
import openBtn from '../../images/icons/hamburgerOpenBtn1.svg'
import closeBtn from '../../images/icons/hamburgerCloseBtn.svg'
import { Image } from '../Image/Image'
import { Button } from '../Button/Button'

export class HamburgerMenuIcon extends PureComponent {

	renderBtnIcon = () => {
		const { menuOpen } = this.props
		return menuOpen ? <Image imageSrc={closeBtn} altText="steering wheel" classes={['medium']} /> : 
			<Image imageSrc={openBtn} altText="steering wheel" classes={['medium']} />
	}

	render() {
		return (
			<Button click={this.props.click} classes={[styles['hamburger-btn']]}>
				{this.renderBtnIcon()}
			</Button>
		)
	}
}

HamburgerMenuIcon.propTypes = {
	click: PropTypes.func.isRequired,
	menuOpen: PropTypes.bool
}
