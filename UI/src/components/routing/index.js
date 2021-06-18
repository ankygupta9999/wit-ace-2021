import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoutPage from '../../pages/logout';
import SettingsPage from '../../pages/settings';

const DataRoutes = props => {
	return (
		<Switch>
			{props.routes.map(route => {
				return (
					<Route
						key={route.to}
						path={route.to}
						exact={route.exact}
						component={route.component}
					>
						{route.render}
					</Route>
				);
			})}
			
			{(props.notFoundComponent || props.notFoundRender) && (
				<Route component={props.notFoundComponent}>
					{props.notFoundRender}
				</Route>
			)}
		</Switch>
	);
};

DataRoutes.propTypes = {
	notFoundComponent: PropTypes.elementType,
	notFoundRender: PropTypes.element,
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			to: PropTypes.string.isRequired,
			component: PropTypes.elementType,
			render: PropTypes.element
		})
	).isRequired
};

DataRoutes.defaultProps = {
	notFoundComponent: null,
	notFoundRender: null
};

export default DataRoutes;
