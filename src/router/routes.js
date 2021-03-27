import React from 'react';
import App from '../pages/App';
import BrevardZoo from '../pages/BrevardZoo';
import AnimalKingdom from '../pages/AnimalKingdom';
import CentralFlorida from '../pages/CentralFlorida';

const routes = [
	{
		Component: AnimalKingdom,
		key: 'Animal Kingdom',
		path: '/animal-kingdom'
	},
	{
		Component: BrevardZoo,
		key: 'Brevard Zoo',
		path: '/brevard-zoo'
	},
	{
		Component: CentralFlorida,
		key: 'Central Florida Zoo',
		path: '/central-florida-zoo'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
