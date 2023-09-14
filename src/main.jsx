import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout.jsx";
import { ErrorPage } from "./components/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { Movies } from "./pages/Movies";
import { Actors } from "./pages/Actors";
import { ActorsComponent } from "./components/ActorsComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "actors",
        element: <Actors />,
        children: [
          { index: true, element: <Actors /> },
          { path: "actorsId", element: <ActorsComponent /> },
        ],
      },
      {
        path: "movies",
        element: <Movies />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
