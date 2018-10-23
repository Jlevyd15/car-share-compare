import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { popupContainer } from '../../containers/popupContainer'
import { scrollBlocker } from '../../helper/scroll-blocker'

import styles from './PopupStyles.less'
export class Popup extends Component {
	constructor(props) {
		super(props)
		this.popupRoot = document.getElementById('popup-portal-root')
		this.appRoot = document.getElementById('root')
		this.el = document.createElement('div')
	}
    
	componentDidMount() {
		this.popupRoot.appendChild(this.el)
		setTimeout(() => {
			const header = this.popupRoot.querySelector('h3')
			if (header) {
				header.focus()
			}
		}, 200)
	}

	componentDidUpdate(prevProps) {
		const { open } = this.props
		if (open !== prevProps.open && open) scrollBlocker('add') 
		else scrollBlocker() 
	}
    
	componentWillUnmount() {
		this.popupRoot.removeChild(this.el)
		// TODO - focus back to previously focused el
	}
	render() {
		const { width, height, open, children } = this.props
		return (
			<React.Fragment>
				{ open ? createPortal(
					<div className={styles['container']} style={{ height, width }}>
						{children}
					</div>,
					this.el
				) : null}
			</React.Fragment>
		)
	}
}

Popup.propTypes = {
	id: PropTypes.string.isRequired,
	open: PropTypes.bool,
	children: PropTypes.any,
	height: PropTypes.number,
	width: PropTypes.number
}

export default popupContainer(Popup)