import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './SectionStyles'

export class Section extends Component {
	render() {
		const { children, style } = this.props
		return (
			<section className={styles[`section-${style}`]}>
				{children}
			</section>
		)
	}
}

Section.propTypes = {
	style: PropTypes.oneOf(['one', 'two', 'three', 'four', 'footer']),
	children: PropTypes.node
}