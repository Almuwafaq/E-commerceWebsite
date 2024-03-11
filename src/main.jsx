import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Nav from "./componets/navBar/Nav";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Shop/>,
  },
  {
    path: "/mens",
    element: <ShopCategory category='men'/>,
  },
  {
    path: "/womens",
    element: <ShopCategory category='women'/>,
  },
  {
    path: "/kids",
    element: <ShopCategory category='kids'/>,
  },
  {
    path: "/product",
    element: <Product/>,
  },
  {
    path: ":product",
    element: <Product/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/login",
    element: <LoginSignup/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>
);