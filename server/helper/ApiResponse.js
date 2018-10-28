class ApiResponse {
	buildRes({ data = {}, error = '', code }) {
		const resObject = {
			code,
			error,
			data
		}
		return resObject
	}
}

module.exports = new ApiResponse()