import React from 'react'
import styles from './ButtonStyles'
import PropTypes from 'prop-types'

import { applyClasses } from '../../helper/stylesHelper'

export const Button = ({ classes, children }) => (
	<button 
		className={applyClasses(styles, classes)}
		type="button"
	>
		{children}
	</button>
)

Button.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.node
}