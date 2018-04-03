import React, { Component } from 'react'
import styles from './BoxStyles'
import PropTypes from 'prop-types'

import { applyClasses } from '../../helper/stylesHelper'

export class Box extends Component {
	render() {
		return (
			<div className={applyClasses(styles, this.props.classes)}>
				{this.props.children}
			</div>
		)
	}
}

Box.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.node
}