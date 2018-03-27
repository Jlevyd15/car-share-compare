import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './SectionStyles'

export class Section extends Component {
	render() {
		const { children, style } = this.props
		return (
			<div className={styles[`section-${style}`] + ' ' + styles['car-dashboard-background']}>
				{children}
			</div>
		)
	}
}

Section.defaultProps = {
	style: 'one'
}

Section.propTypes = {
	style: PropTypes.oneOf(['one', 'two', 'three']),
	children: PropTypes.node
}