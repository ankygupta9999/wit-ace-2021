import {apiClient} from '../client';

export const saveBuyer = async jsonRequest => {
	const route = 'buyer';

	return apiClient()
		.post(route, jsonRequest)
		.then(response => response.data);
}