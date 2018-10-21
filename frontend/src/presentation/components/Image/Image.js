import React, { Component } from 'react'
import styles from './ImageStyles'
import PropTypes from 'prop-types'

import { applyClasses } from '../../helper/stylesHelper'

export class Image extends Component {
	render() {
		const { classes = [], imageSrc, altText } = this.props
		return (
			<div className={applyClasses(styles, classes)}>
				<img src={imageSrc} alt={altText} />
			</div>
		)
	}
}

Image.propTypes = {
	classes: PropTypes.array,
	imageSrc: PropTypes.string,
	altText: PropTypes.string
}