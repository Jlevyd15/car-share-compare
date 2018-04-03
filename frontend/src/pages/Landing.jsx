import React, { Component, Fragment } from 'react'

import { getMessage } from '../helper/messages'

import { Box } from '../components/Box/Box'
import { Button } from '../components/Button/Button'

export class Landing extends Component {
	render() {
		return (
			<Fragment>
				<Box classes={['box', 'center', 'white', 'column', 'bottom-spacer']}>
					<h1>{getMessage('sectionOne', 'title')}</h1>
					<p>{getMessage('sectionOne', 'subTitle')}</p>
				</Box>
				<Box classes={['box', 'center', 'column', 'bottom-spacer']}>
					<Button classes={['btn', 'primary']}>{getMessage('sectionOne', 'btnPrimary')}</Button>
					<Button classes={['btn', 'secondary']}>{getMessage('sectionOne', 'btnSecondary')}</Button>
				</Box>
			</Fragment>
		)
	}
}

export default Landing