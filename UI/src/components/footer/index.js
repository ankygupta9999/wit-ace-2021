import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink} from 'react-router-dom';
import {
	Box,
	Flex,
	Text,
	List,
	ListItem,
	Link,
	useMultiStyleConfig
} from '@chakra-ui/react';
import styleConfig from './footer.style';

const Footer = props => {
	const {size, variant, children, ...rest} = props;
	const styles = useMultiStyleConfig('Footer', {styleConfig, size, variant});
	return (
		<Box sx={styles.container} {...rest}>
			<Flex align="baseline">
				<Text sx={styles.trademark}>
					{`\u00A9 ${new Date().getFullYear()} Optum, Inc. All rights reserved.`}
				</Text>
				<List sx={styles.links}>
					{props.model.links.map(lnk => {
						return (
							<ListItem key={lnk.title} sx={styles.linkListListItem}>
								<Link as={RouterLink} to={lnk.to} sx={styles.link}>
									{lnk.title}
								</Link>
							</ListItem>
						);
					})}
				</List>
			</Flex>
			<Text sx={styles.termsOfService}>
				Your use of this product is governed by the terms of your company&apos;s
				agreement. You may not use or disclose this product or allow others to
				use it or disclose it, except as permitted by your agreement with Optum.
			</Text>
		</Box>
	);
};

Footer.propTypes = {
	children: PropTypes.node,
	model: PropTypes.shape({
		links: PropTypes.arrayOf(
			PropTypes.shape({
				to: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired
			})
		).isRequired
	}).isRequired,
	size: PropTypes.string,
	variant: PropTypes.string
};

Footer.defaltProps = {};

export default Footer;
