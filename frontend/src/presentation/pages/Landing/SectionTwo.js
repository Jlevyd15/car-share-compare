import React from 'react'
import { getMessage } from '../../helper/messages'
import { Section } from '../../components/Section/Section'
import { Box } from '../../components/Box/Box'
import { Button } from '../../components/Button/Button'

export default React.forwardRef(({ push }, ref) => (
	<Section style="two">
		<Box styles={{ justifyContent: 'space-around' }} classes={['box', 'center', 'column', 'bottom-spacer']}>
			<Box classes={['bottom-spacer']}>
				<h2 id='section-two' ref={ref}>{getMessage('landing', 'sectionTwo', 'title')}</h2>
				<p>{getMessage('landing', 'sectionTwo', 'subTitle')}</p>
			</Box>
			<Box classes={['bottom-spacer']}>
				<h3>{getMessage('landing', 'sectionTwoSubSection', 'title')}</h3>
				<p>{getMessage('landing', 'sectionTwoSubSection', 'subTitle')}</p>
			</Box>
			<Box classes={['bottom-spacer']}>
				<h3>{getMessage('landing', 'sectionTwoSubSection2', 'title')}</h3>
				<p>{getMessage('landing', 'sectionTwoSubSection2', 'subTitle')}</p>
			</Box>
			<Box classes={['box', 'center', 'column']}>
				<Button click={() => push('/list')} classes={['btn', 'primary']}>{getMessage('landing', 'sectionTwoSubSection2', 'btnPrimary')}</Button>
			</Box>
		</Box>
	</Section >
))