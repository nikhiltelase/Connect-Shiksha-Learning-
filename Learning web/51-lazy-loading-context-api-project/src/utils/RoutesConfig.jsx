import React, { lazy } from "react";
import Category from "../pages/Category";
import ItemView from "../pages/ItemView";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";

const Home = lazy(() => wait.then(() => import("../pages/Home")));
const CartList = lazy(() => wait.then(() => import("../pages/CartList")));
const Login = lazy(() => wait.then(() => import("../pages/Login")));

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
  }, 100);
});
