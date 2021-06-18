import {createComponentStore, action, thunk} from 'easy-peasy';
import {getProducts} from '../../services/search-service';
import {getWatsonProducts} from '../../services/search-service';

const useSearchComponentStore = createComponentStore({
    searchParameter: "",
    searchResult: [],
    watsonSearchResult:[],	

	setSearchParameter: action((state, payload) => {
        state.searchResult = payload.searchResult;
        state.searchParameter = payload.searchParameter; 
        state.watsonSearchResult=payload.watsonSearchResult;       
        console.log("setparameter called");
        console.log(state.searchResult);
	}),

	getSearchResults: thunk(async (actions, payload) => {
		try {
            console.log(payload);
            const products = await getProducts(payload);
            const watsonProducts= await getWatsonProducts(payload);
            console.log(products);
            console.log(watsonProducts);

            console.log("before");
            console.log(products.length);
            console.log(watsonProducts.length);
			
            const searchStore = {
                searchParameter : "",
                searchResult : [products],
                watsonSearchResult:[watsonProducts]
            }				
            console.log("after");
            actions.setSearchParameter(searchStore);
			
		} catch (error) {
			console.error(error);
			throw error;
		}
	})
});

export default useSearchComponentStore;