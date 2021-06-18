import {action, thunk} from 'easy-peasy';
//import * as configDataService from '../services/config-data-service';

const appConfig = {
	/*settings: {},
	setSettings: action((state, payload) => {
		state.settings = payload;
	}),
	getSettings: thunk(async actions => {
		try {
			const returnData = await configDataService.getConfigSettings();
			actions.setSettings(returnData);
		} catch (error) {
			console.log('Unable to fetch configuration data: ' + error.message);
		}
	})*/
};
export default appConfig;
