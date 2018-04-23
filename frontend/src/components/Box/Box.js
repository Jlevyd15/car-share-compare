import React, { Component } from 'react'
import styleSheet from './BoxStyles'
import PropTypes from 'prop-types'

import { applyClasses } from '../../helper/stylesHelper'

export class Box extends Component {
	render() {
		const { styles, classes, children } = this.props
		return (
			<div style={styles} className={applyClasses(styleSheet, classes)}>
				{children}
			</div>
		)
	}
}

Box.propTypes = {
	styles: PropTypes.object, 
	classes: PropTypes.array,
	children: PropTypes.node
}