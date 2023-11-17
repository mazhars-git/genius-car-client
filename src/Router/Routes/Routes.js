import Main from "../../Layout/Main";
import Bookings from "../../Pages/Bookings/Bookings";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/Home/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'services',
            element: <Services></Services>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
            path: 'checkout/:id',
            element: <CheckOut></CheckOut>,
            loader: ({params}) => fetch(`https://genius-car-server-fu0g.onrender.com/services/${params.id}`)
        },
        {
          path: 'bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
        },
        {
          path: 'serviceDetails/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`https://genius-car-server-fu0g.onrender.com/services/${params.id}`)
        },
      ]
    }
  ]);