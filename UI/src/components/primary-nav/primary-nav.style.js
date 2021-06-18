const styles = {
	parts: [
		'title',
		'container',
		'navLink',
		'applicationName',
		'topLevelDropDown',
		'secondaryDropDown',
		'secondaryNavLink',
		'separator'
	],
	baseStyle: {
		title: {
			color: 'white',
			fontSize: 'calc(1.75 * var(--unit))',
			height: 'calc(4 * var(--unit))',
			lineHeight: 'calc(4 * var(--unit))',
			paddingLeft: 'calc(1.5 * var(--unit))',
			paddingRight: 'calc(1.5 * var(--unit))'
		},
		container: {
			height: 'calc(9 * var(--unit))',
			background: 'white',
			fontSize: 'calc(2 * var(--unit))',
			padding: '0 0 0 16px',
			boxShadow: '3px 3px 3px rgba(192, 192, 192, 1)'
		},
		navLink: {
			color: 'black',
			height: 'calc(9 * var(--unit))',
			display: 'block',
			lineHeight: 'calc(9 * var(--unit))',
			padding: '0 calc(2 * var(--unit)) 0 calc(2 * var(--unit))!important',
			_hover: {
				color: 'gray.800',
				borderBottomWidth: '3px',
				borderBottomColor: 'var(--orange3)'
			},
			'& p': {
				color: 'var(--gray1)'
			},
			'&.active': {
				borderBottom: `3px solid var(--orange3)`
			},
			_focus: {boxShadow: 'none'}
		},
		applicationName: {
			display: 'inline-block',
			verticalAlign: 'bottom',
			padding: '0',
			height: 'calc(3.75 * var(--unit))',
			color: 'gray.600',
			fontSize: 'calc(2.5 * var(--unit))'
		},
		topLevelDropDown: {
			color: 'gray.100',
			height: 'calc(9 * var(--unit))',
			borderBottom: '3px solid transparent',
			_hover: {
				color: 'gray.800',
				borderBottomWidth: '3px',
				borderBottomColor: 'var(--orange3)'
			},
			'& div:first_of_type': {},
			'& .dropdown-menu': {
				minWidth: 'calc(20 * var(--unit))',
				background: 'var(--grey7)',
				borderRadius: '0',
				padding: '0',
				marginTop: '3px !important',
				boxShadow: '3px 3px 3px rgba(192, 192, 192, 0.75)'
			},
			'& .dropdown-toggle': {
				padding: '0 calc(2 * var(--unit)) 0 calc(2 * var(--unit))!important',
				lineHeight: 'calc(9 * var(--unit))',
				height: 'calc(9 * var(--unit))',
				borderBottom: '3px solid transparent'
			},
			'& .dropdown-item': {
				paddingLeft: '12px',
				paddingRight: '12px',
				borderLeft: '2px solid transparent'
			},
			'& .dropdown-item:hover': {
				background: 'var(--white)',
				borderLeft: '2px solid var(--orange3)',
				color: 'var(--grey1)'
			},
			'& .dropdown-item.active': {
				background: 'var(--white)',
				borderLeft: '2px solid var(--orange3)',
				color: 'var(--grey1)'
			},
			'& div[class*="nav-item"] a[class*="dropdown-toggle"]': {
				borderLeft: '2px solid transparent',
				color: 'var(--grey1)'
			},
			'& div[class*="nav-item"] a[class*="dropdown-toggle"]:hover': {
				borderLeft: '2px solid var(--orange3)',
				background: 'var(--white)',
				color: 'var(--grey1)'
			},
			'&.active > a': {
				borderBottom: '3px solid var(--orange3)'
			}
		},
		secondaryDropDown: {
			'& .dropdown-toggle': {
				padding: '4px 12px 4px 12px!important',
				lineHeight: '24px',
				height: '32px',
				borderLeft: '2px solid transparent',
				color: 'var(--grey1)'
			},
			'& .dropdown-item': {
				borderLeft: '2px solid transparent'
			},
			'& .dropdown-item:hover': {
				background: 'var(--white)',
				borderLeft: '2px solid var(--orange3)',
				color: 'var(--grey1)'
			},
			'& .dropdown-menu-right': {
				mr: '2px!important',
				top: '-3px'
			}
		},
		secondaryNavLink: {},
		separator: {
			ml: '8px',
			padding: '0',
			height: '32px',
			borderRightWidth: '1px',
			borderRightColor: 'var(--grey3)'
		}
	},
	sizes: {},
	variants: {
		sticky: {
			container: {
				top: 32,
				zIndex: 1030,
				position: 'fixed',
				right: 0,
				left: 0
			}
		}
	},
	defaultProps: {}
};
export default styles;
