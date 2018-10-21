import Immutable from 'immutable'
import { ServiceRecord } from './record'

export const servicesReducer = (services = Immutable.Map({}), { type, id = '', payload }) => {
	switch (type) {
	case 'SERVICES_SET_DATA':
		return services.merge(payload.data.reduce((result, service) => {
			const $id = service['_id']
			const $service = services.get(service['_id'])
			result[$id] = $service ? { data: service } : new ServiceRecord({ id: $id, data: service })
			return result
		}, {}))
	case 'SERVICES_TOGGLE_SELECTED':
		return services.update(id, new ServiceRecord(), service => service.merge({ id, selected: payload.selected }))
	default:
		return services
	}
}