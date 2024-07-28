import React, { lazy } from "react";

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
  ];
  return routes;
}

export default RoutesConfig;

const wait = new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });

