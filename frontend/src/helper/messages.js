const landing = {
	sections: [
		{
			id: 0,
			name: 'sectionOne',
			title: 'Find a great car share service today.',
			subTitle: 'View and compare the Bay Area\'s top car share services',
			btnPrimary: 'Compare Now',
			btnSecondary: 'Learn More'
		},
		{
			id: 1,
			name: 'sectionTwo',
			title: 'Let\'s find your ride.',
			subTitle: 'we\'re here to help you find your car share service',
			subSections: [
				{
					title: 'Get Comparing',
					subTitle: 'check out our convenient comparison tool to see each service side-by-side'
				},
				{
					title: 'Take a deeper look',
					subTitle: 'click on any more details link or logo to see that service\'s offerings in depth'
				}
			]
		}
	]
}

export const getMessage = (name, key = 'title') => {
	return landing.sections.reduce((accum,  msg) => {
		return name && msg['name'] === name ? accum += `${msg[key]}` : accum += ''
	}, '')
}