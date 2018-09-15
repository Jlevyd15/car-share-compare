import React, { Fragment, Component } from 'react'
import axios from 'axios'

import { getMessage } from '../helper/messages'

import { Section } from '../components/Section/Section'
import { Box } from '../components/Box/Box'
import { WithRouterCard } from '../components/Card/Card'

import { Button } from '../components/Button/Button'
import { WrappedPopupLink } from '../components/PopupLink/PopupLink'
import { Popup } from '../components/Popup/Popup'
import { InfoPopup } from '../components/InfoPopup/InfoPopup'

export class List extends Component {
	constructor() {
		super()
		this.state = { loading: true, content: null }
	}

	componentDidMount() {
		axios.get(`${this.props.basePath}/list`)
			.then(res => this.setState({ content: res.data, loading: false }))
			.catch(err => console.error('error retreiving data', err))
	}

	getPageContent = basePath => (this.state.loading ? <p>Loading</p> :
		this.state.content.data.ServiceData.map(serviceData => (
			<Box data={serviceData} classes={['box', 'row', 'grey-box', 'two', 'bottom-spacer']} key={serviceData._id}>
				<WithRouterCard data={serviceData} basePath={basePath} />
			</Box>))
	)

	handleOpenPopup = ({ openPopup, closePopup, open }) => {
		if (open) closePopup()
		else openPopup()
	}

	render() {
		return (
			<Fragment>
				<Section style="three">
					<div style={{ paddingTop: '50px' }}>
						<Box styles={{ justifyContent: 'space-around' }} classes={['box', 'center', 'row', 'bottom-spacer']}>
							<Box classes={['box', 'center', 'column', 'bottom-spacer']}>
								<h1>{getMessage('landing', 'sectionOne', 'title')}</h1>
								<p>{getMessage('landing', 'sectionOne', 'subTitle')}</p>
							</Box>
						</Box>
					</div>
					<Box styles={{ justifyContent: 'space-around' }} classes={['box', 'center', 'row', 'bottom-spacer']}>
						{this.getPageContent(this.props.basePath)}
					</Box>
				</Section>
				<WrappedPopupLink
					id="test-popup-1"
					render={args => (
						<Fragment>
							<Button click={() => this.handleOpenPopup(args)}>Open a popup</Button>
							{args['open'] ? <Popup><InfoPopup /></Popup> : null}
						</Fragment>
					)}
				/>
			</Fragment>
		)
	}
}

export default List