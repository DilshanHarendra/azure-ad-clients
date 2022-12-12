import React, {lazy} from 'react';
import {useRoutes} from 'react-router-dom';

import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/home/Home.jsx";
import Products from "../pages/products/Products";
import Profile from "../pages/profile/Profile.jsx";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/login/Login.jsx";
import ProductCreate from "../pages/products/ProductCreate.jsx";


function Router(){
	return useRoutes([
		{
			path:'',
			element:<AuthLayout/>,
			children : [
				{
					path: '/',
					element: <Login/>,
				},
			]
		},
		{
			path:'',
			element:<DefaultLayout/>,
			children : [
				{
					path: '/dashboard',
					element: <Home/>,
				},
				{
					path: '/products',
					element: <Products/>,
				},
				{
					path: '/products/new',
					element: <ProductCreate/>,
				},
				{
					path: '/profile',
					element: <Profile/>,
				},
			]
		},
	]);
}export default Router;
