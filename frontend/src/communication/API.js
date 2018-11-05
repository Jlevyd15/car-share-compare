import axios from 'axios'

class API {
	static getData = ({ url }) => {
		if (!url) throw this.createError('endpoint url not found')
		console.log('getting data', url)
		// const { basePath, setServicesData } = props
		return new Promise((resolve) => {
			axios.get(url)
				.then(({ data }) => {
					if (data['error']) throw this.createError(data['error'])
					const _data = data['data']['ServiceData']
					return resolve(_data)
				})
				.catch(err => {
					throw this.createError(err)
				})
		})
	}
	
	static postData = () => {}

	createError = err => {
		return new Error('error fetching data', err)
	}
}

export default API