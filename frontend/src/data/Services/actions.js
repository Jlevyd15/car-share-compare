
export const services = ({
	fetchData: payload => ({ type: 'SERVICES_FETCH_DATA', payload }),
	setData: payload => ({ type: 'SERVICES_SET_DATA', payload }),
	toggleSelected: (id, payload) => ({ type: 'SERVICES_TOGGLE_SELECTED', id, payload }),
	fetchFailed: payload => ({ type: 'SERVICES_FETCH_FAILED', payload })
})