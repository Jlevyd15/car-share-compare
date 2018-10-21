import React from 'react'
import { getMessage } from '../../helper/messages'
import { Section } from '../../components/Section/Section'
import { Box } from '../../components/Box/Box'
import { Image } from '../../components/Image/Image'

import steeringWheelImg from '../../images/icons/1x_steering_wheel.svg'
import locationImg from '../../images/icons/2x_location.svg'
import priceTagImg from '../../images/icons/2x_price_tag_usd.svg'

export default () => (
	<Section style="three">
		<Box classes={['box', 'center', 'column', 'bottom-spacer']}>
			<h2>{getMessage('landing', 'sectionThree', 'title')}</h2>
		</Box>
		<Box classes={['box', 'center', 'row', 'bottom-spacer']}>
			<Box classes={['three']} styles={{ padding: '20px' }}>
				<Image imageSrc={steeringWheelImg} altText="steering wheel" classes={['medium']} />
				<h3>{getMessage('landing', 'sectionThreeSubSectionOne', 'title')}</h3>
			</Box>
			<Box classes={['three']} styles={{ padding: '20px' }}>
				<Image imageSrc={locationImg} altText="steering wheel" classes={['medium']} />
				<h3>{getMessage('landing', 'sectionThreeSubSectionTwo', 'title')}</h3>
			</Box>
			<Box classes={['three']} styles={{ padding: '20px' }}>
				<Image imageSrc={priceTagImg} altText="steering wheel" classes={['medium']} />
				<h3>{getMessage('landing', 'sectionThreeSubSectionThree', 'title')}</h3>
			</Box>
		</Box>
	</Section>
)