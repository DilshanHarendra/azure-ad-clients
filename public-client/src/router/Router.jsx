import React, {lazy} from 'react';
import {useRoutes} from 'react-router-dom';

import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/home/Home.jsx";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Profile from "../pages/profile/Profile.jsx";
import ProtectedLayout from "../layouts/ProtectedLayout.jsx";

function Router(){
	return useRoutes([
		{
			path:'',
			element:<DefaultLayout/>,
			children : [
				{
					path: '/',
					element: <Home/>,
				},
				{
					path: '/product/:id',
					element: <ProductDetails/>,
				},
			]
		},
		{
			path:'',
			element:<ProtectedLayout/>,
			children : [
				{
					path: '/profile',
					element: <Profile/>,
				},
			]
		}
	]);
}export default Router;
