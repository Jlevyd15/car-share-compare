import getaroundLogo from './presentation/images/logos/getaround.png'
import mavenLogo from './presentation/images/logos/maven.png'
import enterpriseLogo from './presentation/images/logos/enterprise.png'
import turoLogo from './presentation/images/logos/turo.png'
import zipcarLogo from './presentation/images/logos/zipcar.png'

export const routes = {
	apiURL: {
		prod: 'http://api.carsharecompare.com',
		dev: 'http://api.carsharecompare.com:5000'
	},
	index: '/',
	list: '/list',
	compare: '/compare',
	detail: {
		route: '/:id',
		links: [
			{ id: '58059a51dcba0f490c70af6b', name: 'Maven', route: '/Maven', img: mavenLogo },
			{ id: '57abde66036e3a3f9dadb712', name: 'Getaround', route: '/Getaround', img: getaroundLogo },
			{ id: '57abde66036e3a3f9dadb714', name: 'Enterprise', route: '/Enterprise CarShare', img: enterpriseLogo },
			{ id: '57abde66036e3a3f9dadb713', name: 'Turo', route: '/Turo', img: turoLogo },
			{ id: '57abde66036e3a3f9dadb716', name: 'Zipcar', route: '/Zipcar', img: zipcarLogo }
		]
	},
	about: '/about',
	contact: '/contact'
}