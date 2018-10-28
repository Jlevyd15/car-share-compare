import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './CheckboxStyles.less'
import { fieldContainer } from '../../containers/fieldContainer'

class Checkbox extends Component {
	constructor({ id, create }) {
		super()
		create(id, { value: false })
	}
	
	handleClick = () => {
		const { id, value, change } = this.props
		change(id, { value: !value })
	}

	render() {
		const { id, value } = this.props
		return (
			<div id={id} className={styles['container']}>
				<label className={styles['check-label']} htmlFor={`listChk-${id}`}>
					<input 
						id={`listChk-${id}`} 
						onClick={this.handleClick} 
						type="checkbox" 
						value={value}
						className={styles['checkbox']}
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

export default fieldContainer(Checkbox)