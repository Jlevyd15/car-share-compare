import React from 'react'
import { routerContainer } from '../../containers/routerContainer' 
import { Image } from '../Image/Image'
import { Button } from '../Button/Button'
import styles from './CardStyles.less'
import { Checkbox } from '../Checkbox/Checkbox'

export const Card = ({ data: { _id, name, logo, membershipFee, avgPriceDay, gas, url: { signUp } }, basePath, push }) => (
	<div className={styles['list-container']}>
		<Checkbox id={_id} />
		<h3>{name}</h3>
		<Image imageSrc={`${basePath}/${logo}`} altText={name} classes={['medium']} />
		<ul>
			<li>{membershipFee}</li>
			<li>{avgPriceDay}</li>
			<li>{gas}</li>
		</ul>
		
		<a href={signUp} target="_blank">More Details ></a>
		<div className={styles['cta-button-container']}><Button click={() => push(`${name}`)} classes={['btn', 'secondary']}>Sign Up</Button></div>
	</div>
)

export const WithRouterCard = routerContainer(Card)