import React from 'react'
import { connect } from 'react-redux'
import { routerContainer } from '../../containers/routerContainer' 
import { popupContainer } from '../../containers/popupContainer'
import { Image } from '../Image/Image'
import { Button } from '../Button/Button'
import styles from './CardStyles.less'
import Checkbox from '../Checkbox/Checkbox'
import { Box } from '../Box/Box'
import Popup from '../Popup/Popup'
import InfoPopup from '../InfoPopup/InfoPopup'
import { getMessage } from '../../helper/messages'

export class Card extends React.Component {
	externalModalClick = () => {
		this.props.openPopup('list-services-info')
	}
	render() {
		const { checkboxValue, data: { _id, name, logo, membershipFee, avgPriceDay, gas, url: { signUp } }, basePath, push } = this.props// eslint-disable-line
		return (
			<Box classes={['box', 'row', 'grey-box', 'two', 'bottom-spacer', checkboxValue ? styles['card-border'] : '']}>
				<div className={styles['list-container']}>
					<div className={styles['top-section']}>
						<h3>{name}</h3>
						<Checkbox id={_id} />
					</div>
					<Image imageSrc={`${basePath}/${logo}`} altText={name} classes={['medium']} />
					<ul>
						<li>{membershipFee}</li>
						<li>{avgPriceDay}</li>
						<li>{gas}</li>
					</ul>
					
					<Box classes={['box', 'row']}>
						<Box classes={['box', 'row']}>
							<a onClick={this.externalModalClick} target="_blank">More Details ></a>
						</Box>
						<Box classes={['box', 'row']}>
							<div className={styles['cta-button-container']}><Button click={() => push(`${name}`)} classes={['btn', 'secondary']}>Sign Up</Button></div>
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
			</Box>
		)
	}
}

const WithRouterCard = routerContainer(popupContainer(Card))

const mapStateToProps = (state, { data: { _id } }) => ({
	checkboxValue: state.ui.fields.getIn([_id, 'value'])
})

export default connect(mapStateToProps)(WithRouterCard)