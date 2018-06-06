import React, { Component } from 'react'

import styles from './HamburgerMenuIcon.less'
import openBtn from '../../images/icons/hamburgerOpenBtn.svg'
import closeBtn from '../../images/icons/hamburgerCloseBtn.svg'
import { Image } from '../Image/Image'

export class HamburgerMenuIcon extends Component {
	constructor() {
		super()
		this.state = { open: false }
	}
	
	handleClick = () => {
		this.setState({ open: !this.state.open })
	}

	renderBtnIcon = () => {
		const { open } = this.state
		return open ? <Image imageSrc={openBtn} altText="steering wheel" classes={['medium', styles['openBtn']]} /> :
			<Image imageSrc={closeBtn} altText="steering wheel" classes={['medium', styles['closeBtn']]} />
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.renderBtnIcon()}
			</button>
		)
	}
}