import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductsList from "./Pages/ProductsList/ProductsList";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products-list",
    element: <ProductsList />,
  },
  {
    path: "/product-details/:userId",
    element: <ProductDetails />,
  },
]);

export default Routes;
