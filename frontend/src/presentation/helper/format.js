export const formatMoney = value => {
	if (!value) return
	const parsedValue = value.toString().replace(/~/g, '') 
	return `$${Number(parsedValue).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
}