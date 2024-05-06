import AddProduct from "../pages/Admin/AddProduct/AddProduct";
import AdminRoot from "../pages/Admin/AdminRoot";
import EditProduct from "../pages/Admin/EditProduct/EditProduct";
import AdminProducts from "../pages/Admin/Products/Products";

import Basket from "../pages/User/Basket/Basket";
import ProductDetail from "../pages/User/ProductDetail/ProductDetail";
import Products from "../pages/User/Products/Products";
import UserRoot from "../pages/User/UserRoot";
import Wishlist from "../pages/User/Wishlist/Wishlist";

export const ROUTES = [
  //Admin Root
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path:'/admin',
        element:<AdminProducts/>
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "editproduct",
        element: <EditProduct />,
      }
    ],
  },
  //User Root
{
    path:'',
    element:<UserRoot/>,
    children:[
        {
            index:true,
            element:<Products/>
        },
        {
            path:'productdetail',
            element:<ProductDetail/>
        },
        {
            path:'basket',
            element:<Basket/>
        },
        {
            path:'wishlist',
            element:<Wishlist/>
        }
    ]
}
];
