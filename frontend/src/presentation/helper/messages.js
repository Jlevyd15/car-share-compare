export const messages = {
	landing: {
		sections: [
			// section one ------------------------
			{
				id: 0,
				name: 'sectionOne',
				title: 'Find a great car share service today.',
				subTitle: 'Compare the Bay Area\'s top car share services',
				btnPrimary: 'Compare Now',
				btnSecondary: 'Learn More'
			},
			// section two ------------------------
			{
				id: 1,
				name: 'sectionTwo',
				title: 'Let\'s find your ride.',
				subTitle: 'we\'re here to help you find your car share service'
			},
			{
				id: 2,
				name: 'sectionTwoSubSection',
				title: 'Get Comparing',
				subTitle: 'check out our convenient comparison tool to see each service side-by-side'
			},
			{
				id: 3,
				name: 'sectionTwoSubSection2',
				title: 'Take a deeper look',
				subTitle: 'click on any more details link or logo to see that service\'s offerings in depth',
				btnPrimary: 'Get Started'
			},
			// section three ----------------------
			{
				id: 4,
				name: 'sectionThree',
				title: 'Why buy a car when you can share one?'
			},
			{
				id: 5,
				name: 'sectionThreeSubSectionOne',
				title: 'rent from a wide range of great vehicles.'
			},
			{
				id: 6,
				name: 'sectionThreeSubSectionTwo',
				title: 'cars located conveniently in your neighborhood.'
			},
			{
				id: 7,
				name: 'sectionThreeSubSectionThree',
				title: 'lower prices than traditional rental services.'
			},
			// section four
			{
				id: 8,
				name: 'sectionFour',
				title: 'Compare the top car share services'
			}
		]
	},
	list: {
		sections: [
			// section one ------------------------
			{
				id: 1,
				name: 'sectionOne',
				title: 'Compare side by side',
				subTitle: 'select up to four services then click the compare button above to see them side by side'
			}, 
			{
				id: 2, 
				name: 'list-services-info',
				title: 'You\'re about to leave CarShareCompare',
				body: 'by clicking the continue button, you will leaving our page. To stay here, click cancel'
			},
			{
				id: 3,
				name: 'list-initial-info',
				title: 'Let\'s Get Started.',
				body: 'Use the check boxes to select services to compare, you can select up to 4 services. When you\'re finished, click compare at the top'
			}
		]
	}
}

/**
 * 
 * @param {string} page name of the page
 * @param {string} section name property within the object
 * @param {string} key name of the property within the object to access the content
 */
export const getMessage = (page, section, key = 'title') => {
	// debugger //eslint-disable-line
	return page && messages[page].sections.reduce((accum, msgSectionObj) => {
		return section && msgSectionObj['name'] === section ? accum += `${msgSectionObj[key]}` : accum
	}, '')
}