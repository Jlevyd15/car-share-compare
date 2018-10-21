export const field = ({
	create: (id, payload) => ({ type: 'FIELD_CREATE', id, payload }),
	change: (id, payload) => ({ type: 'FIELD_CHANGE', id, payload })
})