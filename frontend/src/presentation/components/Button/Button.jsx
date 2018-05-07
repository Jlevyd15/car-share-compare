import React, { Component } from 'react'
import styles from './ButtonStyles'
import PropTypes from 'prop-types'

import { applyClasses } from '../../helper/stylesHelper'

export class Button extends Component {
	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this)
	}

	
	handleClick(event) {
		const { callback } = this.props
		event.preventDefault()
		if (typeof callback !== 'function') return null
		return !event.keyCode || event.keyCode === 27 || event.keyCode === 32 ? callback(event) : null
	}

	render() {
		const { classes, children, type, aria } = this.props
		return (
			<button
				ref={btnRef => this.btnRef = btnRef}
				className={applyClasses(styles, classes)}
				type={type}
				onClick={this.handleClick}
				onKeyUp={this.handleClick}
				{...aria}
			>
				{children}
			</button>
		)
	}
}
Button.defaultProps = {
	type: 'button'
}

Button.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.node,
	type: PropTypes.string,
	callback: PropTypes.func.isRequired,
	aria: PropTypes.object
}