import React, { Component } from 'react'

import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import styles from './MasonryCardsStyles'

class MasonryCards extends Component {
	buildRows = ({ id, key, value }) => {
		return (
			<div key={`${id}_${key}`} className={styles['masonry-layout__panel']}>
				<Card>
					<h3>{key}</h3>
					{typeof value === 'object' ? 
						this.buildObjectTypes({ id, key, value }) : <p>{value}</p>}
				</Card>
			</div>
		)
	}

	removeData = key => {
		const keys = ['_id', 'name', 'logo']
		return !keys.includes(key)
	}
	
	buildObjectTypes = ({ id, key, value }) => { // eslint-disable-line
		return (
			<ul>
				{Array.isArray(value) ? 
					value.map((value, i) => <li key={`${id}_${key}_${i}`}>{value}</li>) : 
					Object.keys(value).map((key, i) => <li key={`${id}_${key}_${i}`}><Link to={'test'}>{key}</Link></li>)
				}
			</ul>
		)
	}

	mapData = data => {
		if (!data) return null
		console.log('data', data)
		const keys = Object.keys(data)
		return (
			keys.filter(this.removeData).map(key => {
				return this.buildRows({ id: data['id'], key, value: data[key] })
			})
		)
	}

	buildColums = () => {
		return (
			<div className={styles['masonry-layout']}>
				<div className={styles['masonry-layout__column']}>
					{this.mapData(this.props.children)}
				</div>
			</div>
		)
	}
	render() {
		return this.props.children ? this.buildColums() : null
	}
}

export default MasonryCards