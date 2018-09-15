import { Component } from 'react'
import PropTypes from 'prop-types'

import { popupContainer } from '../../containers/popupContainer'


export class PopupLink extends Component {
	render() {
		const { openPopup, closePopup, open } = this.props
		return this.props.render({ openPopup, closePopup, open })
	}

}

PopupLink.propTypes = {
	id: PropTypes.string,
	open: PropTypes.bool,
	closePopup: PropTypes.func,
	openPopup: PropTypes.func
}

export const WrappedPopupLink = popupContainer(PopupLink)

