
export const services = ({
	setData: payload => ({ type: 'SERVICES_SET_DATA', payload }),
	toggleSelected: (id, payload) => ({ type: 'SERVICES_TOGGLE_SELECTED', id, payload })
})