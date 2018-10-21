import React from 'react'
import { getMessage } from '../../helper/messages'
import { Section } from '../../components/Section/Section'
import { Box } from '../../components/Box/Box'
import { Button } from '../../components/Button/Button'

export default ({ push, scrollToElement }) => (
	<Section style="one">
		<div style={{ paddingTop: '175px' }}>
			<Box styles={{ justifyContent: 'space-around' }} classes={['box', 'center', 'white', 'row', 'bottom-spacer']}>
				<Box classes={['box', 'center', 'white', 'column', 'bottom-spacer']}>
					<h1>{getMessage('landing', 'sectionOne', 'title')}</h1>
					<p>{getMessage('landing', 'sectionOne', 'subTitle')}</p>
				</Box>
				<Box classes={['box', 'center', 'column', 'bottom-spacer']}>
					<Button click={() => push('/list')} classes={['btn', 'primary']}>{getMessage('landing', 'sectionOne', 'btnPrimary')}</Button>
					{/* TODO - how to push to hash? */}
					<Button click={() => scrollToElement()} classes={['btn', 'secondary']}>{getMessage('landing', 'sectionOne', 'btnSecondary')}</Button>
				</Box>
			</Box>
		</div>
	</Section>
)