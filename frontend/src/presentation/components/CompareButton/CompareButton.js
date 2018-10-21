import React from 'react'
import { Button } from '../Button/Button'
import { routes } from '../../../project.config'
import styles from './styles'

// TODO - make this a small button and decrease the logo size on all pages but the landing
export default ({ selectedServices = '', push }) => {
	return (
		<Button classes={['btn', 'primary', styles['container']]} click={() => push(routes['compare'])}>compare {selectedServices.size}</Button>
	)
}