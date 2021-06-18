import React, {useEffect} from 'react';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom';
import DataRoutes from './components/routing';
import NotFoundPage from './pages/not-found';
import {getRoutesFromMenuData} from './common/utils';
//import GlobalNav from './components/global-nav';
//import PrimaryNav from './components/primary-nav';
import Content from './components/main-content';
import MainNavigation from './components/navigation';
import { Menubar } from 'primereact/menubar'
import './Layout.css';
import SearchSuppliers from "./components/SearchSuppliers";
import CreateSupplier from "./components/CreateSupplier";
import CreateProducer from "./components/CreateProducer";
import SupplyMaterial from "./components/SupplyMaterial";



const Layout = () => {
	const globalNavConfig = useStoreState(state => state.globalNav);
	console.log(globalNavConfig);
	return(
		<div>
			<Router>
				<MainNavigation model = {globalNavConfig.menuData} ></MainNavigation>
				<div>
					<Switch>
						<Route exact path="/Home" component={Content} />						
						<Route exact path="/Buyer" component={CreateProducer} />
						<Route path="/Supplier" component={CreateSupplier} />
						<Route exact path="/Search" component={SearchSuppliers} />
						<Route exact path="/Supply" component={SupplyMaterial} />
						<Redirect exact from="/" to="/Home"/>
					</Switch>
				</div>
			</Router>
		</div>		
	)
	
	
}

export default Layout;
