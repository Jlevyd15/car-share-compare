import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './SectionStyles'

export class Section extends Component {
	render() {
		const { children, style } = this.props
		return (
			<div className={styles[`section-${style}`]}>
				{children}
			</div>
		)
	}
}

Section.propTypes = {
	style: PropTypes.oneOf(['one', 'two', 'three']),
	children: PropTypes.node
}