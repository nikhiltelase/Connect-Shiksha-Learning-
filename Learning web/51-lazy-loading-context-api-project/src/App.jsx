import React, { Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesConfig from "./utils/RoutesConfig";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { contextData } from "./context/ContextApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const routes = RoutesConfig();

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.route}
            element={<Suspense fallback={<Loader />}>{route.element}</Suspense>}
          />
        ))}
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
