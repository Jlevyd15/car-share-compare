import React, { Fragment, Component } from 'react'
import axios from 'axios'
import { getMessage } from '../helper/messages'
import { Section } from '../components/Section/Section'
import { Box } from '../components/Box/Box'
import Card from '../components/Card/Card'
import Popup from '../components/Popup/Popup'
import { popupContainer } from '../containers/popupContainer'
import { servicesContainer } from '../containers/servicesContainer'
import InfoPopup from '../components/InfoPopup/InfoPopup'
export class List extends Component {
	constructor() {
		super()
		this.state = { loading: true }
	}

	componentDidMount(prevProps) {
		console.log('prevProps', prevProps)
		// TODO - move into a saga
		// debugger //eslint-disable-line no-debugger
		this.fetchData()
		this.props.openPopup('list-initial-info')
	}

	// TODO - async await not working
	fetchData() {
		axios.get(`${this.props.basePath}/list`)
			.then(({ data }) => {
				if (data['error']) console.log('error fetching service data', data['error'])
				this.props.setServicesData(data['data']['ServiceData'])
				this.setState({ loading: false })
			})
			.catch(err => {
				throw new Error('error fetching service data', err)
			})
	}
	formatServices = data => {
		if (!data) return []
		const _data = data.toJS()
		return Object.keys(_data).map(service => _data[service])
	}
	getPageContent = basePath => {
		if (this.props.services.size && !this.state.loading) {
			return this.formatServices(this.props.services).map(({ data }) => 
				<Card key={data._id} data={data} basePath={basePath} />)
		} else {
			return (<p>Loading...</p>)
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

export default servicesContainer(popupContainer(List))