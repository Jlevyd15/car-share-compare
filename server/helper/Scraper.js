const cheerio = require('cheerio')
const { get } = require('axios')
class Scraper {
	constructor() {

	}

	async requestPage ({ url = '', options = {} }) {
		if (!url) return null
		try {
			const response = await get(url)
			console.log('response', response)
			const html = await response
			return html && html.data
		} catch (error) {
			console.error('error fetching resource', error)
			return null
		}
	}

	parseHtml ({ html = '', selector = '' }) {
		if (!html) return null
		try {
			const $ = cheerio.load(html)
			const text = $(selector).text()
			return text
		} catch (error) {
			console.error('error parsing html', error)
		}
	}
}

module.exports = Scraper