import {apiClient} from '../client';

export const saveSupplier = async jsonRequest => {
	const route = 'supplier';

	return apiClient()
		.post(route, jsonRequest)
		.then(response => response.data);
}