import React from 'react';
import {StoreProvider} from 'easy-peasy';
//import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import {colors} from './theme/colors';
import store from './stores/global';
import Layout from './layout';

//extendTheme({colors});

const App = () => (	
		<StoreProvider store={store}>
			<Layout />
		</StoreProvider>	
);

export default App;