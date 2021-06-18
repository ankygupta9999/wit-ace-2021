import React from 'react';
import {Redirect} from 'react-router-dom';



const globalNav = {
	menuData: [
		{
			icon: 'pi pi-home',
			label: 'Home',
			command: (event) => {
				window.location.pathname = '/Home';
			}			
		},
		{
			label: 'Users',
			icon: "pi pi-users",
			items:[
				{
					icon: 'pi pi-id-card',
					label: 'Supplier Form',
					command: (event) => {						
						window.location.pathname = '/Supplier';						
					}			
				},
				{
					icon: 'pi pi-id-card',
					label: 'Buyer Form',
					command: (event) => {						
						window.location.pathname = '/Buyer';												
					}			
				}
			]
		},
		{
			icon: 'pi pi-search',
			label: 'Search Suppliers',
			command: (event) => {
				window.location.pathname = '/Search';
			}	

		},
		{
			icon: 'pi pi-save',
			label: 'Supply Materials',
			command: (event) => {
				window.location.pathname = '/Supply';
			}	

		}
		
	]
};

export default globalNav;
