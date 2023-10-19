import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import AddProduct from './AddProduct/AddProduct.jsx';
import MyCart from './MyCart/MyCart.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Products from './Products/Products.jsx';
import Details from './Details/Details.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/hub.json')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/cart')
      },
      {
        path: "/brands/:id",
        element: <Products></Products>,
        loader: async () => {
          const loadOne = await fetch('/hub.json');
          const loadTwo = await fetch('http://localhost:5000/product');

          const brands = await loadOne.json();
          const products = await loadTwo.json();

          return { brands, products }
        }
      },
      {
        path: "/details/:name",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: async () => {
          const loadOne = await fetch('/hub.json');
          const loadTwo = await fetch('http://localhost:5000/product');

          const brands = await loadOne.json();
          const products = await loadTwo.json();

          return { brands, products }
        }
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
