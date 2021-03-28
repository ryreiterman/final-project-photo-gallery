import React from 'react';
import App from '../pages/App';
import BrevardZoo from '../pages/BrevardZoo';
import AnimalKingdom from '../pages/AnimalKingdom';
import CentralFlorida from '../pages/CentralFlorida';
import ColumbusZoo from '../pages/ColumbusZoo';

const routes = [
	{
		Component: ColumbusZoo,
		key: 'Columbus Zoo',
		path: '/columbus-zoo'
	},
	{
		Component: CentralFlorida,
		key: 'Central Florida Zoo',
		path: '/central-florida-zoo'
	},
	{
		Component: BrevardZoo,
		key: 'Brevard Zoo',
		path: '/brevard-zoo'
	},
	{
		Component: AnimalKingdom,
		key: 'Animal Kingdom',
		path: '/animal-kingdom'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
