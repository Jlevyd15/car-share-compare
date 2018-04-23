import getaroundLogo from './images/logos/getaround.png'
import mavenLogo from './images/logos/maven.png'
import enterpriseLogo from './images/logos/enterprise.png'
import turoLogo from './images/logos/turo.png'
import zipcarLogo from './images/logos/zipcar.png'

export const routes = {
	index: '/',
	list: '/list',
	compare: '/compare',
	detail: {
		route: '/:id',
		links: [
			{ id: '402c5d9af6b43711ea070bee5170f74d', name: 'Maven', route: '/Maven', img: mavenLogo },
			{ id: '6f11a617126f616f9202aa54668637ec', name: 'Getaround', route: '/Getaround', img: getaroundLogo },
			{ id: '09300df44b9d20cc219b25abddc3346e', name: 'Enterprise', route: '/Enterprise CarShare', img: enterpriseLogo },
			{ id:  '0635e43dda2dcfa3d534ad8105e7fe3a', name: 'Turo', route: '/Turo', img: turoLogo },
			{ id: '2e8e826b8432a2d9effa51d493f84029', name: 'Zipcar', route: '/Zipcar', img: zipcarLogo }
		]
	},
	about: '/about',
	contact: '/contact'
}