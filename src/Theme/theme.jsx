const variables = {
	header: {
		height: '80px',
	},
	footer: {
		height: '60px',
		bottom: '10px',
	},
	stepSide: {
		width: '30%',
		maxWidth: '500px',
	},
	context: {
		width: '80%',
		maxWidth: '1000px',
	},
	mobile: {
		media: '@media(max-width: 1080px)',
		header: {
			height: '50px',
		},
		footer: {
			height: '50px',
			bottom: '10px',
		},
	},
};

const lightTheme = {
	title: {
		color: '#506479',
		fontFamily: 'Montserrat Alternates',
	},
	text: {
		color: '#a4aeb4',
		fontFamily: 'Montserrat',
	},
	solutionCard: {
		header: {
			backgroundColor: '#e9f5ff1f',
			title: {
				color: '#416488',
				fontFamily: 'Montserrat',
			},
			bottomColor: '#3d7ead54',
		},
	},
	primaryColor: '#35a0ee',
	secondaryColor: '#fff',
	variables,
	mobile: {
		header: {
			bottomColor: '#35a1ee30',
		},
	},
};

export default lightTheme;
