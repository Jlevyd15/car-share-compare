import Immutable from 'immutable'
import { FieldRecord } from './record'

export const fieldsReducer = (fields = Immutable.Map({}), { type, id, payload }) => {
	switch (type) {
	case 'FIELD_CREATE':
		return fields.update(id, new FieldRecord(), popup => popup.merge({ id, ...payload }))
	case 'FIELD_CHANGE':
		return fields.update(id, new FieldRecord(), popup => popup.merge({ id, ...payload }))
	default:
		return fields
	}
}