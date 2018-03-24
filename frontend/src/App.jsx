import React from 'react'
import style from './style.css'

export class App extends React.Component {

	render() {
		console.log('style ', style)
		return (
			<div>
				<h1 className={style['hello-world']}>Hello World!</h1>
			</div>
		)
	}
}

export default App