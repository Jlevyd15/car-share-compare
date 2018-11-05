import React, { Fragment, Component } from 'react'
import { getMessage } from '../helper/messages'
import { Section } from '../components/Section/Section'
import { Box } from '../components/Box/Box'
import SummaryCard from '../components/SummaryCard/SummaryCard'
import Popup from '../components/Popup/Popup'
import { popupContainer } from '../containers/popupContainer'
import { servicesContainer } from '../containers/servicesContainer'
import InfoPopup from '../components/InfoPopup/InfoPopup'
export class List extends Component {
	constructor(props) {
		super()
		this.state = { loading: true }
		if (props.services.size) {
			// TODO - move into a saga
			// if data is already cached don't fetch it again
			// if (props.services.size) this.setState({ loading: false })
			props.openPopup('list-initial-info')
		}
	}

	// componentDidMount(prevProps) {
	// console.log('prevProps', prevProps)
	// const { services, openPopup } = this.props
	// // TODO - move into a saga
	// // if data is already cached don't fetch it again
	// debugger // eslint-disable-line
	// if (services.size) this.setState({ loading: false })
	// openPopup('list-initial-info')
	// }

	// componentDidUpdate(prevProps) {
	// 	const { services, openPopup } = this.props
	// 	console.log('prevProps', prevProps.services.size, services.size)
		
	// }

	formatServices = data => {
		if (!data) return []
		const _data = data.toJS()
		return Object.keys(_data).map(service => _data[service])
	}
	getPageContent = basePath => {
		if (this.props.services.size) {
			return this.formatServices(this.props.services).map(({ data }) => 
				<SummaryCard key={data._id} data={data} basePath={basePath} />)
		} else {
			return (<p>Loading...</p>)
		}
	}

	render() {
		return (
			<Fragment>
				<Section style="three" maxWidthContainer={true}>
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