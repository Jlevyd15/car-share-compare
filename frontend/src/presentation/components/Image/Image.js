import React, { Component } from 'react'
import styles from './ImageStyles'
import PropTypes from 'prop-types'

import { applyClasses } from '../../helper/stylesHelper'

export class Image extends Component {
	render() {
		const { classes, imageSrc, altText } = this.props
		return (
			<img className={applyClasses(styles, classes)} src={imageSrc} alt={altText} />
		)
	}
}

Image.propTypes = {
	classes: PropTypes.array,
	imageSrc: PropTypes.string,
	altText: PropTypes.string
}