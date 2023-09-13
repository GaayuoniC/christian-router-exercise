import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout.jsx";
import { HomePage } from "./pages/HomePage";
import { Movies } from "./pages/Movies";
import { Actors } from "./pages/Actors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "actors",
        element: <Actors />,
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
