import React from 'react'
import styles from './CardStyles.less'
import { Box } from '../Box/Box'

const Card = ({ children, checkboxValue }) => {
	return (
		<Box classes={['box', 'row', 'grey-box', 'two', 'bottom-spacer', 'pad-lrg', checkboxValue ? styles['card-border'] : '']}>
			{children}
		</Box>
	)
}

export default Card