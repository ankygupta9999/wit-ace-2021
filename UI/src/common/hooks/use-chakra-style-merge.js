import _ from 'lodash';
import {useStyleConfig, useMultiStyleConfig} from '@chakra-ui/core';

export const useChakraStyleMerge = ({
	themeKey = '',
	styleConfig,
	variant,
	size,
	styles
}) => {
	// This must be ahead of the completeOverride check because it is a hook and must be called in the same order each render
	const chakraStyles = useStyleConfig(themeKey, {size, variant, styleConfig});

	if (styles && styles.completeOverride) {
		return styles;
	}

	return _.merge(chakraStyles, styles);
};

export const useChakraMultiStyleMerge = ({
	themeKey = '',
	styleConfig,
	variant,
	size,
	styles
}) => {
	// This must be ahead of the completeOverride check because it is a hook and must be called in the same order each render
	const chakraStyles = useMultiStyleConfig(themeKey, {
		size,
		variant,
		styleConfig
	});

	if (styles && styles.completeOverride) {
		return styles;
	}

	return _.merge(chakraStyles, styles);
};
