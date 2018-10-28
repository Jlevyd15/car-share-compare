import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './SectionStyles'

export class Section extends Component {
	render() {
		const { children, style, maxWidthContainer } = this.props
		return (
			<section 
				className={!maxWidthContainer ? 
					styles[`section-${style}`] : 
					styles[`section-${style}`] + ' ' + styles['max-container']}
			>
				{children}
			</section>
		)
	}
}

Section.propTypes = {
	style: PropTypes.oneOf(['one', 'two', 'three', 'four', 'footer']),
	children: PropTypes.node,
	maxWidth: PropTypes.bool
}