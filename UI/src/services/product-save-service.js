import {apiClient} from '../client';

export const saveProduct = async jsonRequest => {
	const route = 'material';
	console.log(jsonRequest);

	return apiClient()
		.post(route, jsonRequest)
		//.then(response => response.data.result.data[0]);
		.then(response => response.data);
}

