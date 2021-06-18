import {apiClient} from '../client';

export const getProducts = type => {
	return apiClient()
		.get(`/items?description=${type}`)
		.then(result => result.data);
};

export const getWatsonProducts = type => {
	return apiClient()
		.get(`/watson?description=${type}`)
		.then(result => result.data);
};

// export const getProducts = type => {
// 	return apiClient()
// 		.get('/items',{params:{description:{type}}})
// 		.then(result => result.data);
// };

/*
export const saveInventoryGroup = async jsonRequest => {
	const route = 'InventoryGroup/inventorygroups';
	if (jsonRequest.rowId !== 0) {
		return apiClient()
			.put(route, jsonRequest)
			.then(result => result.data);
	}

	return apiClient()
		.post(route, jsonRequest)
		.then(response => response.data.result.data[0]);
};

export const getInventoryGroups = async request => {
	const dataresult = JSON.parse(JSON.stringify(request));
	return apiClient()
		.post('InventoryGroup', dataresult)
		.then(result => result.data);
};
*/