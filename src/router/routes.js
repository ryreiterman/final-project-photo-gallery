import React from 'react';
import App from '../pages/App';
import BrevardZoo from '../pages/BrevardZoo';
import AnimalKingdom from '../pages/AnimalKingdom';
import CentralFlorida from '../pages/CentralFlorida';
import ColumbusZoo from '../pages/ColumbusZoo';
import Zoo from '../pages/Zoo';

const routes = [
	{
		Component: Zoo,
		key: 'Zoo',
		path: '/:zoo'
	},
	{
		Component: ColumbusZoo,
		key: 'Columbus Zoo',
		path: '/columbuszoo'
	},
	{
		Component: CentralFlorida,
		key: 'Central Florida Zoo',
		path: '/centralfloridazoo'
	},
	{
		Component: BrevardZoo,
		key: 'Brevard Zoo',
		path: '/brevardzoo'
	},
	{
		Component: AnimalKingdom,
		key: 'Animal Kingdom',
		path: '/animalkingdom'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
