import { createBrowserRouter } from "react-router-dom";
import Cardele from "../Cardele/Cardele";
import Checkout from "../Checkout/Checkout";
import Error from "../Error/Error";
import Main from "../layout/Main";
import Blog from "../page/Blog/Blog";
import Catagorey from "../page/Catagorey/Catagorey";
import Course from "../page/Course/Course";
import Faq from "../page/FaQ/Faq";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import PrivateRouter from '../PrivateRouter/PrivateRouter'

export const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
      {path:'/',element:<Home></Home>},
      {path:'/home',element:<Home></Home>},
      {path:"/courses",
      element:<Course></Course>,
      loader:()=>fetch(`https://sever-data.vercel.app/allData`
     )
    },
    {path:'/data/:id',element:<Catagorey></Catagorey>,
    loader:({params})=>fetch(`https://sever-data.vercel.app/allData/${params.id}`)
  },
    {path:'/checkou/:id',element:<PrivateRouter><Checkout></Checkout></PrivateRouter>,
    loader:({params})=>fetch(`https://sever-data.vercel.app/allData/${params.id}`)
  },
  {path:'/newdata/:id',element:<Course/>,
loader:({params})=>fetch(`https://sever-data.vercel.app/catagorey/${params.id}`)},
      {path:"/faq",element:<Faq></Faq>},
      {path:"/blog",element:<Blog></Blog>},
      {path:"/login",element:<Login></Login>},
      {path:"/register",element:<Register></Register>}
    ]
},
{path:'/*',element:<Error/>}
])