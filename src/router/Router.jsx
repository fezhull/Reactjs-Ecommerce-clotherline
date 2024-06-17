import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SingleProduct from "../pages/Home/SingleProduct";
import NotFound from "../notfound/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element:<Home/>
        }, 
        {
          path: "/shop/:id",
          element:<SingleProduct/>
        },
      //   {
      //     path: "/notfound",
      //     element:<NotFound/>
      // },
       
      ]
    },
  ]);
  

export default router