/**
 * 
 * @param {Object} stylesObj this is the styles object for a component 
 * @param {Array} classes this is an array of strings that maps to a style in the styles object 
 * for the component which this function runs
 * or you can pass a pre-compiled style name (e.g. styles['my-class']) that will just get blindly applied
 * use the latter in the case where you want to pass a style from one component down to another
 * @returns {String} this will be the final string of classes applied to an element
 */
export const applyClasses = (stylesObj, classes) => {
	return classes && Array.isArray(classes) && classes.reduce((accum, style) => {
		return !stylesObj.hasOwnProperty(style) ? accum += `${style} ` : accum += `${stylesObj[style]} `
	}, '')
}