import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Category from '../../Category/Category';
import Home from '../../Home/Home';
import Main from '../../Layout/Main';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import ContactUs from '../../Pages/AboutUs/ContactUs/ContactUs';
import Login from '../../User/Login/Login';
import Register from '../../User/Register/Register';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>,
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            }
        ]
    }
]);
