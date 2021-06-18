import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import {Box, Text, Link, useMultiStyleConfig} from '@chakra-ui/core';
import styleConfig from './global-nav.style';

const NavTitle = props => {
	return (
		<Box sx={props.styles.title}>
			{props.item.icon && (
				<Text
					as="i"
					sx={props.styles.navTitle}
					className={`${props.item.icon}`}
				></Text>
			)}
			<Text as="span" sx={props.styles.label}>
				{props.item.label}
			</Text>
			<Text
				as="i"
				sx={props.styles.navTitle}
				className="uimf-icon-caret_down_centered"
			></Text>
		</Box>
	);
};

NavTitle.propTypes = {
	item: PropTypes.object,
	styles: PropTypes.object
};

const GlobalNav = props => {
	const {size, variant, children, ...rest} = props;
	const styles = useMultiStyleConfig('GlobalNav', {styleConfig, size, variant});

	return (
		<Box sx={styles.container} {...rest}>
			{props.model.menuData.map(item => {
				if (item.items) {
					return (
						<NavDropdown
							key={`gn_dropdown_${item.label}`}
							title={<NavTitle item={item} styles={styles}></NavTitle>}
						>
							{item.items.map(dropDownItem => (
								<LinkContainer
									key={`gn_dropdown_${item.label}_item_${dropDownItem.label}`}
									to={dropDownItem.to}
								>
									<NavDropdown.Item>
										{dropDownItem.icon && <i className={dropDownItem.icon}></i>}
										<div>{dropDownItem.label}</div>
									</NavDropdown.Item>
								</LinkContainer>
							))}
						</NavDropdown>
					);
				}

				return (
					<LinkContainer key={`gn_item_${item.label}`} to={item.to}>
						<Link sx={styles.navLink}>
							{item.icon && (
								<Text
									as="i"
									sx={styles.navLinkIcon}
									className={item.icon}
								></Text>
							)}
							<Text as="span" sx={styles.navLinkText}>
								{item.label}
							</Text>
						</Link>
					</LinkContainer>
				);
			})}
		</Box>
	);
};

const menuDataItem = {
	icon: PropTypes.string,
	label: PropTypes.string.isRequired,
	to: PropTypes.string
};

menuDataItem.items = PropTypes.arrayOf(PropTypes.shape(menuDataItem));

GlobalNav.propTypes = {
	children: PropTypes.node,
	model: PropTypes.shape({
		menuData: PropTypes.arrayOf(PropTypes.shape(menuDataItem)).isRequired
	}).isRequired,
	size: PropTypes.string,
	variant: PropTypes.string
};

GlobalNav.defaltProps = {};

export default GlobalNav;
