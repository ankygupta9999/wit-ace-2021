const styles = {
	parts: [
		'trademark',
		'links',
		'termsOfService',
		'container',
		'linkListListItem',
		'link'
	],
	baseStyle: {
		trademark: {
			fontSize: 'calc(1.75 * var(--unit))',
			mb: '0'
		},
		links: {
			pl: 'calc(4 * var(--unit))',
			mb: '0'
		},
		termsOfService: {
			fontSize: '12px',
			fontFamily: '',
			mb: '0',
			lineHeight: 'calc(3 * var(--unit))'
		},
		container: {
			borderTop: '2px solid var(--grey6)',
			background: 'var(--white)',
			textAlign: 'left',
			padding: '32px',
			color: 'var(--grey1)'
		},
		linkListListItem: {
			_before: {
				content: `"|"`,
				color: 'var(--grey6)',
				padding: '0 calc(1.5 * var(--unit)) 0 calc(1.5 * var(--unit))'
			},
			_first: {'&:before': {content: `""`}},
			fontSize: 'calc(1.75 * var(--unit))',
			fontFamily: '',
			padding: '0',
			display: 'inline-block'
		},
		link: {
			color: 'var(--textLinkBlue)',
			_hover: {color: 'var(--textLinkBlue)'}
		}
	},
	sizes: {},
	variants: {
		sticky: {
			container: {
				bottom: 0,
				zIndex: 1029,
				position: 'fixed',
				right: 0,
				left: 0
			}
		}
	},
	defaultProps: {}
};
export default styles;
