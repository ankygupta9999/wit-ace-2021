import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';
import {Box, Image, Text, Stack, useStyleConfig, Link} from '@chakra-ui/react';
import styleConfig from './primary-nav.style';

const generateItemNavigation = (styles, item, level = 0) => {
	const {label, items, topRoute} = item;
	if (!items) {
		return (
			<Box key={`pn_item_${item.label}`}>
				<LinkContainer exact={item.link.exact} to={item.link.to}>
					<Link as={Nav.Link} sx={styles.navLink}>
						{item.icon && <Text as="i" className={item.icon}></Text>}
						<Text>{item.label}</Text>
					</Link>
				</LinkContainer>
			</Box>
		);
	}

	const subMenus = items.map(subItem => {
		let subItemComponent;

		if (subItem.items && subItem.items.length > 0) {
			subItemComponent = generateItemNavigation(styles, subItem, level + 1);
		} else {
			subItemComponent = (
				<LinkContainer to={subItem.link.to}>
					<Box
						as={NavDropdown.Item}
						sx={level === 0 ? {} : styles.secondaryDropDown}
					>
						{subItem.label}
					</Box>
				</LinkContainer>
			);
		}

		return (
			<React.Fragment key={`pn_dropdown_${level}_${label}_${subItem.label}`}>
				{subItemComponent}
			</React.Fragment>
		);
	});

	const navDropDown =
		level === 0 ? (
			<Box
				alignRight
				title={label}
				as={NavDropdown}
				sx={styles.topLevelDropDown}
			>
				{subMenus}
			</Box>
		) : (
			<Box
				alignRight
				drop="left"
				title={label}
				as={NavDropdown}
				sx={styles.secondaryDropDown}
			>
				{subMenus}
			</Box>
		);

	return (
		<LinkContainer key={`pn_dropdown_${level}_${label}`} to={topRoute}>
			{navDropDown}
		</LinkContainer>
	);
};

const PrimaryNav = props => {
	const {size, variant, ...rest} = props;
	const styles = useStyleConfig('PrimaryNav', {styleConfig, size, variant});

	return (
		<Box sx={styles.container} as={Navbar} {...rest}>
			<Navbar.Brand href={props.model.homePath}>
				<Stack isInline alignItems="center">					
					<Box sx={styles.separator} />
					<Box sx={styles.applicationName}>{props.model.applicationName}</Box>
				</Stack>
			</Navbar.Brand>
			<Navbar.Collapse className="justify-content-end">
				<Nav activeKey="-1">
					{props.model.menuData.map(item => {
						return generateItemNavigation(styles, item);
					})}
				</Nav>
			</Navbar.Collapse>
		</Box>
	);
};

const menuDataItem = {
	icon: PropTypes.string,
	label: PropTypes.string.isRequired,
	to: PropTypes.string,
	topRoute: PropTypes.string,
	link: PropTypes.shape({
		to: PropTypes.string.isRequired,
		exact: PropTypes.bool
	})
};

menuDataItem.items = PropTypes.arrayOf(PropTypes.shape(menuDataItem));

PrimaryNav.propTypes = {
	css: PropTypes.object,
	model: PropTypes.shape({
		applicationName: PropTypes.string,
		homePath: PropTypes.string,
		menuData: PropTypes.arrayOf(PropTypes.shape(menuDataItem)).isRequired
	}).isRequired,
	size: PropTypes.string,
	variant: PropTypes.string
};

PrimaryNav.defaultProps = {
	css: {}
};

export default PrimaryNav;
