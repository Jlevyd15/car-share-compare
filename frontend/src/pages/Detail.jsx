import React, { Component, Fragment } from 'react'

export class Landing extends Component {
	render() {
		return (
			<Fragment>
				<h1>Detail Page</h1>
				<p>service name: {this.props.match.params.id}</p>
			</Fragment>
		)
	}
}

export default Landing