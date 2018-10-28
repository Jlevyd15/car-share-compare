import React, { Component } from 'react'

import Card from '../Card/Card'

import styles from './MasonryCardsStyles'

class MasonryCards extends Component {
	buildRows = () => {
		return (
			<div className={styles['masonry-layout__panel']}>
				<Card>
					{this.props.children}
				</Card>
			</div>
		)
	}

	buildColums = () => {
		return (
			<div className={styles['masonry-layout']}>
				<div className={styles['masonry-layout__column']}>
					{this.buildRows()}
				</div>
			</div>
		)
	}
	render() {
		return this.buildColums()
	}
}

export default MasonryCards