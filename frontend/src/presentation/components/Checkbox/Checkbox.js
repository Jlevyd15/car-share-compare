import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './CheckboxStyles.less'

export class Checkbox extends Component {
	constructor() {
		super()
		this.state = {
			checked: false
		}
	}
	
	handleClick = (e) => {
		console.log('clicked checkbox!', e.target, e.target.value)
		this.setState({ checked: !this.state.checked })
	}

	render() {
		const { id } = this.props
		return (
			<div id={id} className={styles['container']}>
				<label for={`listChk-${id}`}>
					<input 
						id={`listChk-${id}`} 
						onClick={this.handleClick} 
						type="checkbox" 
						value={this.state.checked} 
					/>
					<span></span>
				</label>
			</div>
		)
	}
}

Checkbox.propTypes = {
	id: PropTypes.string
}