import React from 'react'
import { connect } from 'react-redux'
import { routerContainer } from '../../containers/routerContainer'
import { popupContainer } from '../../containers/popupContainer'
import { servicesContainer } from '../../containers/servicesContainer'
import { Image } from '../Image/Image'
import { Button } from '../Button/Button'
import styles from './SummaryCardStyles.less'
import Checkbox from '../Checkbox/Checkbox'
import { Box } from '../Box/Box'
import Card from '../Card/Card'
import Popup from '../Popup/Popup'
import InfoPopup from '../InfoPopup/InfoPopup'
import { getMessage } from '../../helper/messages'
import { formatMoney } from '../../helper/format'
export class SummaryCard extends React.Component {
	componentDidUpdate(prevProps) {
		if (prevProps.checkboxValue !== this.props.checkboxValue) {
			const { toggleSelectedService, checkboxValue, data: { _id } } = this.props
			// console.log('updated', prevProps)
			toggleSelectedService(_id, checkboxValue)
		}
	}
	externalModalClick = () => {
		this.props.openPopup('list-services-info')
	}
	render() {
		const { checkboxValue, data: { _id, name, logo, membershipFee, avgPriceDay, gas, url: { signUp } }, basePath, push } = this.props// eslint-disable-line
		return (
			<Card checkboxValue={checkboxValue}>
				<div className={styles['list-container']}>
					<div className={styles['top-section']}>
						<h3>{name}</h3>
						<Checkbox id={_id} />
					</div>
					<Image imageSrc={`${basePath}/${logo}`} altText={name} classes={['medium']} />
					<ul>
						<li>Membership fees: {formatMoney(membershipFee)}</li>
						<li>rental rates from {formatMoney(avgPriceDay)} per day (8 hrs)</li>
						<li>{gas} with rental</li>
					</ul>

					<Box classes={['box', 'row']}>
						<Box classes={['box', 'row']}>
							<a onClick={() => push(`${name}`)} target="_blank">More Details ></a>
						</Box>
						<Box classes={['box', 'row']}>
							<div className={styles['cta-button-container']}><Button click={this.externalModalClick} classes={['btn', 'secondary']}>Sign Up</Button></div>
						</Box>
					</Box>
				</div>
				<Popup id="list-services-info">
					<InfoPopup
						id="list-services-info"
						icon="info"
						heading={getMessage('list', 'list-services-info', 'title')}
						body={getMessage('list', 'list-services-info', 'body')}
						children={
							<div className={[styles['flex-right']]}>
								<Button click={() => console.log('cancel clicked')} classes={['btn', 'secondary']}>Cancel</Button>
								<Button click={() => console.log('continue clicked')} classes={['btn', 'primary']}>Continue</Button>
							</div>
						}
					/>
				</Popup>
			</Card>
		)
	}
}

const WithRouterCard = servicesContainer(routerContainer(popupContainer(SummaryCard)))

const mapStateToProps = (state, { data: { _id } }) => {
	return ({
		checkboxValue: state.ui.fields.getIn([_id, 'value'])
	})
}

export default connect(mapStateToProps)(WithRouterCard)