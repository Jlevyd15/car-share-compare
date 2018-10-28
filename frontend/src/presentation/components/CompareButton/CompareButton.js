import React from 'react'
import { Button } from '../Button/Button'
import { servicesContainer } from '../../containers/servicesContainer'
import { routes } from '../../../project.config'
import styles from './styles'

// TODO - make this a small button and decrease the logo size on all pages but the landing
const CompareButton = ({ selectedServices = '', push, pathname }) => {
	return (
		pathname === '/list' ?
			<Button
				disabled={selectedServices.size ? false : true}
				classes={['btn', 'primary', 'small', styles['container']]}
				click={() => push(routes['compare'])}>
				compare {selectedServices.size || null}
			</Button>
			: null
	)
}

export default servicesContainer(CompareButton)