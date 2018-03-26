export const routes = {
	index: '/',
	list: '/list',
	compare: '/compare',
	detail: {
		route: '/:id',
		links: [
			{ id: '402c5d9af6b43711ea070bee5170f74d', name: 'maven', route: '/Maven' },
			{ id: '6f11a617126f616f9202aa54668637ec', name: 'getaround', route: '/Getaround' },
			{ id: '09300df44b9d20cc219b25abddc3346e', name: 'enterprise', route: '/Enterprise CarShare' },
			{ id:  '0635e43dda2dcfa3d534ad8105e7fe3a', name: 'turo', route: '/Turo' },
			{ id: '2e8e826b8432a2d9effa51d493f84029', name: 'zipcar', route: '/Zipcar' }
		]
	},
	about: '/about',
	contact: '/contact'
}