import React, { lazy } from "react";

const Home = lazy(() => wait.then(() => import("../pages/Home")));
const CartList = lazy(() => wait.then(() => import("../pages/CartList")));
const Login = lazy(() => wait.then(() => import("../pages/Login")));
const Category = lazy(() => wait.then(() => import("../pages/Category")));
const ItemView = lazy(() => wait.then(() => import("../pages/ItemView")));
const Checkout = lazy(() => wait.then(() => import("../pages/Checkout")));
const OrderSuccess = lazy(() => wait.then(() => import("../pages/OrderSuccess")));

function RoutesConfig() {
  const routes = [
    {
      route: "/",
      element: <Home />,
    },
    {
      route: "/cart",
      element: <CartList />,
    },
    {
      route: "/login",
      element: <Login />,
    },
    ,
    {
      route: "/category/:category",
      element: <Category />,
    },
    {
      route: "/item/:itemId",
      element: <ItemView />,
    },
    {
      route: "/checkout",
      element: <Checkout />,
    },
    {
      route: "/order-success",
      element: <OrderSuccess />,
    }
  ];

  return routes;
}

export default RoutesConfig;

const wait = new Promise((resolve) => {
  setTimeout(function () {
    resolve();
  }, 1000);
});
