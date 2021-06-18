import axios from 'axios';


export const apiClient = () => {
	const baseURL = "http://169.51.204.210:31776/rest";
	const client = axios.create({
		baseURL: `${baseURL}`,
		timeout: 1000000
	})
	return client;
};
