import React, { Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesConfig from "./config/RoutesConfig";
import Loader from "./components/Loader";

const routes = RoutesConfig()

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
          key={index}
          path={route.route}
          element={
            <Suspense fallback={<Loader />}>
              {route.element}
            </Suspense>
          }
        />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
