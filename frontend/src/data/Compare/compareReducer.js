import Immutable from 'immutable'
import { CompareRecord } from './CompareRecord'

export const compareReducer = (compare = Immutable.Map({}), { type, visited }) => {
	switch (type) {
	case 'COMPARE_SET_VISITED':
		return compare ? compare.set({ visited: true }) : new CompareRecord({ visited })
	default:
		return compare
	}
}