import React from 'react'
import styleSheet from './BoxStyles'
import PropTypes from 'prop-types'

import { applyClasses } from '../../helper/stylesHelper'

export const Box = ({ styles, classes, children }) => (
	<div style={styles} className={applyClasses(styleSheet, classes)}>
		{children}
	</div>
)

Box.propTypes = {
	styles: PropTypes.object, 
	classes: PropTypes.array,
	children: PropTypes.node.isRequired
}