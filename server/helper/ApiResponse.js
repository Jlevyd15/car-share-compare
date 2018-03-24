class ApiResponse {
	buildRes(data = {}, error = '') {
		const resObject = {
			error,
			data
		}
		return resObject
	}
}

module.exports = new ApiResponse()