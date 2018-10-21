import React, { Component, Fragment } from 'react'
import { routerContainer } from '../../containers/routerContainer'


import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import { Footer } from '../../components/Footer/Footer'

export class Landing extends Component {
	constructor() {
		super()
		this.sectionTwoRef = React.createRef()
	}
	scrollToElement = () => {
		if (this.sectionTwoRef && this.sectionTwoRef.current) 
			this.sectionTwoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
	render() {
		const { push } = this.props
		return (
			<Fragment>
				<SectionOne push={push} scrollToElement={this.scrollToElement} />
				<SectionTwo push={push} ref={this.sectionTwoRef} />
				<SectionThree />
				<SectionFour />
				<Footer />
			</Fragment>
		)
	}
}

export default routerContainer(Landing)