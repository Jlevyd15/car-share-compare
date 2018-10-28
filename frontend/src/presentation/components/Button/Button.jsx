import React, { Component } from 'react'
import styles from './ButtonStyles'
import PropTypes from 'prop-types'

import { applyClasses } from '../../helper/stylesHelper'

export class Button extends Component {

	handleClick = e => {
		const { click } = this.props
		if (typeof click === 'function') {
			return click(e)
		}
	}

	render() {
		const { classes, children, disabled } = this.props
		return (
			<button 
				className={applyClasses(styles, classes)}
				type="button"
				onClick={this.handleClick}
				disabled={disabled}
				aria-disabled={disabled}
			>
				{children}
			</button>
		)
	}
}

Button.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.node,
	click: PropTypes.func
}