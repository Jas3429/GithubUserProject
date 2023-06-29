import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);
root.render(
  <React.StrictMode>
    <GithubProvider>
      <RouterProvider router={router} />
    </GithubProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
