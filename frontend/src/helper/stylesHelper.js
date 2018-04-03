export const applyClasses = (stylesObj, classes) => {
	return classes && Array.isArray(classes) && classes.reduce((accum, style) => {
		return accum += `${stylesObj[style]} `
	}, '')
}