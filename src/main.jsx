import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layouts/Root.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Orders from "./components/Orders.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children : [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'signup',
        Component: Signup
      },
      {
        path: 'dashboard',
        element: <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      },
      {
        path: 'order',
        element : <PrivateRoute> 
          <Orders></Orders>
        </PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
