import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Form from "./componets/sideBar/Form";
import TopAds from "./componets/ads/topAds/TopAds";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopAds/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);