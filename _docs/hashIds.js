const crypto = require('crypto')

const links = [
	{ name: 'maven', route: '/Maven' },
	{ name: 'getaround', route: '/Getaround' },
	{ name: 'enterprise', route: '/Enterprise CarShare' },
	{ name: 'turo', route: '/Turo' },
	{ name: 'zipcar', route: '/Zipcar' }
]

const createHashes = () => {
	return links.map(link => {
		return crypto.createHash('md5').update(link.name).digest('hex')
	})
}
console.log('hashes are: ', createHashes())