import React from 'react';
import Home from '../pages/Home';
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
	// {
	// 	Component: Gatorland,
	// 	key: 'Gatorland',
	// 	path: '/gatorland'
	// },
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
		Component: Home,
		key: 'Home',
		path: '/'
	}
];

export default routes;
