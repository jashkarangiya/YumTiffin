
import './App.css';
import Landingpage from './components/Landingpage';

import Homepage from './components/Homepage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Loginpage from './components/Loginpage';
import Signuppage from './components/Signuppage';


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
  
]);

function App(){
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
