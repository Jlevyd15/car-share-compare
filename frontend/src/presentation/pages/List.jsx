import React, { Fragment, Component } from 'react'
import axios from 'axios'

import { getMessage } from '../helper/messages'

import { Section } from '../components/Section/Section'
import { Box } from '../components/Box/Box'
import Card from '../components/Card/Card'

import Popup from '../components/Popup/Popup'
import { popupContainer } from '../containers/popupContainer'
import InfoPopup from '../components/InfoPopup/InfoPopup'

export class List extends Component {
	constructor() {
		super()
		this.state = { loading: true, content: [] }
	}

	componentDidMount() {
		// TODO - move into a saga
		// debugger //eslint-disable-line no-debugger
		this.fetchData()
		this.props.openPopup('list-initial-info')
	}

	// TODO - async await not working
	fetchData() {
		// try {
		// 	const result = await axios.get(`${this.props.basePath}/list`)
		// 	if (result.error) {
		// 		throw new Error('error fetching service data', result.error)
		// 	}
		// 	this.setState({ content: result, loading: false })
		// } catch (error) {
		// 	throw new Error('error fetching service data', error)
		// }
		axios.get(`${this.props.basePath}/list`)
			.then(({ data }) => {
				if (data['error']) console.log('error fetching service data', data['error'])
				this.setState({ content: data['data']['ServiceData'], loading: false })
			})
			.catch(err => {
				throw new Error('error fetching service data', err)
			})
	}

	getPageContent = basePath => {
		if (this.state.content.length && !this.state.loading) {
			return (this.state.content.map(serviceData => (
				<Card key={serviceData._id} data={serviceData} basePath={basePath} />)))
		} else {
			return (<p>Loading</p>)
		}
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
				<Popup id="list-initial-info">
					<InfoPopup 
						id="list-initial-info"
						icon="info"
						heading={getMessage('list', 'list-initial-info', 'title')}
						body={getMessage('list', 'list-initial-info', 'body')}
					/>
				</Popup>
			</Fragment>
		)
	}
}

export default popupContainer(List)