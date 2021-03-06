import React from 'react';
import Home from '../pages/Home';
import Zoo from '../pages/Zoo';

const routes = [
	{
		Component: Zoo,
		key: '',
		path: '/:zoo'
	},
	// {
	// 	Component: Gatorland,
	// 	key: 'Gatorland',
	// 	path: '/gatorland'
	// },
	// {
	// 	Component: ColumbusZoo,
	// 	key: 'Columbus Zoo',
	// 	path: '/columbuszoo'
	// },
	// {
	// 	Component: CentralFlorida,
	// 	key: 'Central Florida Zoo',
	// 	path: '/centralfloridazoo'
	// },
	// {
	// 	Component: BrevardZoo,
	// 	key: 'Brevard Zoo',
	// 	path: '/brevardzoo'
	// },
	// {
	// 	Component: AnimalKingdom,
	// 	key: 'Animal Kingdom',
	// 	path: '/animalkingdom'
	// },
	{
		Component: Home,
		key: 'Home',
		path: '/'
	}
];

export default routes;
