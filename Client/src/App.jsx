
import './App.css';
import Landingpage from './components/Landingpage';

import Homepage from './components/Homepage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Loginpage from './components/Loginpage';
import Signuppage from './components/Signuppage';
import Tiffininfopage1 from './components/homepage/Tiffininfopage1';
import Tiffininfopage2 from './components/homepage/Tiffininfopage1';
import Addbutton from './components/homepage/Addbutton';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/login",
    element: <Loginpage/>,
  },
  {
    path: "/home",
    element: <Homepage/>,
  },
  {
    path: "/signup",
    element: <Signuppage/>,
  },
  {
    path: "/info",
    element: <Tiffininfopage1/>,
  },
  {
    path: "/ordernow",
    element: <Tiffininfopage1/>,
  },
  {
    path: "/scheduleorder",
    element: <Tiffininfopage2/>,
  },
  {
    path: "/cart",
    element: <userCart/>,
  },

  
]);

function App(){
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;