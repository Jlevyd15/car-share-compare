import { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { popupContainer } from '../../containers/popupContainer'

import styles from './PopupStyles.less'
export class Popup extends Component {
	constructor(props) {
		super(props)
		this.popupRoot = document.getElementById('popup-portal-root')
		this.appRoot = document.getElementById('root')
		this.el = document.createElement('div')
		this.el.classList.add(styles['container'])
	}
    
	componentDidMount() {
		this.popupRoot.appendChild(this.el)
		const header = this.popupRoot.querySelector('h3')
		if (header) header.focus()
	}
    
	componentWillUnmount() {
		this.popupRoot.removeChild(this.el)
		// TODO - focus back to previously focused el
	}
	render() {
		return (
			createPortal(
				this.props.children,
				this.el
			)
		)
	}
}

Popup.propTypes = {
	open: PropTypes.bool,
	children: PropTypes.any
}

export const wrappedPopup = popupContainer(Popup)