import React from 'react';
import PropTypes from 'prop-types';
import {Box, Text} from '@chakra-ui/core';

const HomePagePanel = ({message, imgPath, title}) => {
	return (
		<Box p={3} width="280px" height="160px" shadow="md" alignContent="center">
			<Text letterSpacing="2px" fontWeight="semibold" fontSize="1xl">
				{message}
			</Text>
			<br />			
		</Box>
	);
};

HomePagePanel.propTypes = {
	message: PropTypes.string.isRequired
};

export default HomePagePanel;
