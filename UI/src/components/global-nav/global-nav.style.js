const styles = {
	parts: [
		'title',
		'container',
		'label',
		'navLink',
		'navLinkIcon',
		'navLinkText',
		'navTitle'
	],
	baseStyle: {
		title: {
			color: 'var(--white)',
			fontSize: 'calc(1.75 * var(--unit))',
			height: 'calc(4 * var(--unit))',
			lineHeight: 'calc(4 * var(--unit))',
			paddingLeft: 'calc(1.5 * var(--unit))',
			paddingRight: 'calc(1.5 * var(--unit))',
			_hover: {background: '#434448'}
		},
		label: {
			paddingLeft: 'var(--unit)',
			paddingRight: 'calc(0.5 * var(--unit))'
		},
		container: {
			justifyContent: 'flex-end !important',
			background: 'var(--grey3)',
			height: 'calc(4 * var(--unit))',
			display: 'flex',
			flexWrap: 'wrap',
			paddingLeft: '0',
			marginBottom: '0',
			pr: 'calc(2 * var(--unit))',
			'& .nav-link': {
				padding: 0
			},
			'& .dropdown-toggle:after': {
				display: 'none'
			},
			'& .dropdown-menu': {
				minWidth: '160px',
				background: 'var(--grey7)',
				borderRadius: 0,
				padding: 0,
				marginTop: 0,
				boxShadow: '3px 3px 3px rgba(192, 192, 192, 0.75)'
			},
			'& .dropdown-menu .dropdown-item': {
				pl: '12px',
				pr: '12px',
				borderLeft: '2px solid transparent'
			},
			'& .dropdown-menu .dropdown-item:hover, .dropdown-menu .dropdown-item.active:hover': {
				background: 'var(--white)',
				borderLeft: '2px solid var(--orange3)'
			},
			'& .dropdown-menu .dropdown-item.active': {
				color: 'var(--grey1)',
				background: 'var(--grey7)'
			}
		},
		navLink: {
			color: 'white',
			fontSize: 'calc(1.75 * var(--unit))',
			height: 'calc(4 * var(--unit))',
			lineHeight: 'calc(4 * var(--unit))',
			_hover: {
				color: 'white',
				bgColor: 'gray.800',
				textDecoration: 'none',
				cursor: 'pointer'
			},
			_focus: {boxShadow: 'none'}
		},
		navLinkIcon: {
			color: 'white',
			fontSize: 'calc(2 * var(--unit))',
			fontWeight: 'bold',
			marginLeft: 'calc(1.5 * var(--unit))'
		},
		navLinkText: {
			pr: 'calc(0.5 * var(--unit))',
			pl: 'var(--unit)',
			mr: 'calc(1.5 * var(--unit))'
		},
		navTitle: {
			color: '#ffffff',
			fontSize: '16px',
			fontWeight: 'bold'
		}
	},
	sizes: {},
	variants: {
		sticky: {
			container: {top: 0, zIndex: 1031, position: 'fixed', right: 0, left: 0}
		}
	},
	defaultProps: {}
};
export default styles;
