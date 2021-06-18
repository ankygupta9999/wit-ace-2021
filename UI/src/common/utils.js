const hasChildren = node => {
	return (
		typeof node === 'object' &&
		typeof node.items !== 'undefined' &&
		node.items.length > 0
	);
};

export const getRoutesFromMenuData = item => {
	if (!Array.isArray(item) && !hasChildren(item)) {
		return item.link;
	}

	return item
		.map(i => {
			return getRoutesFromMenuData(i.items === undefined ? i : i.items);
		})
		.flat();
};

export const isFalsy = value => {
	let temporary = value;
	if (typeof temporary === 'string') {
		temporary = temporary.trim();
	}

	if (temporary) {
		return false;
	}

	return true;
};
