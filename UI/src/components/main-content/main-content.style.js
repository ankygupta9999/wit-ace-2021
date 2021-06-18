const styleConfig = {
	parts: ['container'],
	baseStyle: {
		container: {
			padding: '2rem 4rem',
			height: '100%',
			minHeight: 'calc(100vh - 220px)'
		}
	},
	variants: {
		default: {},
		sticky: {
			container: {mt: `${72 + 32}px`, mb: '114px'}
		}
	},
	defaultProps: {
		variant: 'default'
	}
};
export default styleConfig;
