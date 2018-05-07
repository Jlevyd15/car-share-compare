import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './OverlayStyles.less'

export class Overlay extends Component {
	constructor(props) {
		super(props)
		this.state = { open: props.open || false }
	}
	
	componentWillReceiveProps(nextProps) {
		console.log(nextProps.open, this.props.open)
		if (nextProps.open !== this.props.open) 
			this.setState({ open: !this.state.open })
	}

	getOverlayClassName(behavior) {
		return this.state.open ? `${styles['overlay']} ${styles['active']} ${styles[behavior]}` : styles['overlay']
	}

	render() {
		const { behavior } = this.props
		return (
			<div className={this.getOverlayClassName(behavior)} />
		)
	}
}

Overlay.defaultProps = {
	behavior: 'dark',
	open: false
}

Overlay.propTypes = {
	behavior: PropTypes.string,
	open: PropTypes.bool
}