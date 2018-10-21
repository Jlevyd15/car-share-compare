import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { routerContainer } from '../containers/routerContainer'

import { getMessage } from '../helper/messages'
import { routes } from '../../project.config'

import { Section } from '../components/Section/Section'
import { Box } from '../components/Box/Box'
import { Image } from '../components/Image/Image'
import { Button } from '../components/Button/Button'
import { Footer } from '../components/Footer/Footer'

import steeringWheelImg from '../images/icons/1x_steering_wheel.svg'
import locationImg from '../images/icons/2x_location.svg'
import priceTagImg from '../images/icons/2x_price_tag_usd.svg'

export class Landing extends Component {
	constructor() {
		super()
		this.sectionTwoRef = React.createRef()
	}
	scrollToElement = element => {
		// debugger // eslint-disable-line
		if (element && element.current) element.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
	render() {
		const { detail: { links } } = routes
		const { push } = this.props
		return (
			<Fragment>
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
								<Button click={() => this.scrollToElement(this.sectionTwoRef)} classes={['btn', 'secondary']}>{getMessage('landing', 'sectionOne', 'btnSecondary')}</Button>
							</Box>
						</Box>
					</div>
				</Section>
				
				<Section style="two">
					<Box styles={{ justifyContent: 'space-around' }} classes={['box', 'center', 'column', 'bottom-spacer']}>
						<Box classes={['bottom-spacer']}>
							<h2 id='section-two' ref={this.sectionTwoRef}>{getMessage('landing', 'sectionTwo', 'title')}</h2>
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
				</Section>

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

				<Section style="four">
					<Box classes={['box', 'center', 'bottom-spacer']}>
						<h2>{getMessage('landing', 'sectionFour', 'title')}</h2>
					</Box>
					<Box classes={['box', 'bottom-spacer', 'row']} styles={{ flexFlow: 'row wrap', 'justifyContent': 'space-around' }}>
						{links.map(({ id, name, route, img }) =>
							<Box key={id} classes={['box', 'three', 'center', 'bottom-spacer']}>
								<Link to={route}><Image imageSrc={img} altText={`${name} logo`} classes={['large']} /></Link>
							</Box>
						)}
					</Box>
				</Section>
				<Footer />
			</Fragment>
		)
	}
}

export default routerContainer(Landing)