import React from 'react'
import { Link } from 'react-router-dom'
import { getMessage } from '../../helper/messages'
import { Section } from '../../components/Section/Section'
import { Box } from '../../components/Box/Box'
import { Image } from '../../components/Image/Image'
import { routes } from '../../../project.config'

export default () => (
	<Section style="four">
		<Box classes={['box', 'center', 'bottom-spacer']}>
			<h2>{getMessage('landing', 'sectionFour', 'title')}</h2>
		</Box>
		<Box classes={['box', 'bottom-spacer', 'row']} styles={{ flexFlow: 'row wrap', 'justifyContent': 'space-around' }}>
			{routes['detail']['links'].map(({ id, name, route, img }) =>
				<Box key={id} classes={['box', 'three', 'center', 'bottom-spacer']}>
					<Link to={route}><Image imageSrc={img} altText={`${name} logo`} classes={['large']} /></Link>
				</Box>
			)}
		</Box>
	</Section>
)