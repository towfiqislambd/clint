import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import AuthProvider from './components/AuthProvider';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AllCampaign from './components/AllCampaign';
import AddNewCampaign from './components/AddNewCampaign';
import MyCampaign from './components/MyCampaign';
import MyDonations from './components/MyDonations';
import PrivateRoutes from './components/PrivateRoutes';
import UpdateCampaign from './components/UpdateCampaign';
import Details from './components/Details';
import SingleUser from './components/SingleUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch('http://localhost:5000'),
        element: <Home></Home>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/all-campaign",
        loader: () => fetch('http://localhost:5000/all-campaign'),
        element: <AllCampaign></AllCampaign>
      },




      {
        path: "/all-campaign/:id",
        loader: ({params}) => fetch(`http://localhost:5000/all-campaign/${params.id}`),
        element: <SingleUser></SingleUser>
      },




      {
        path: "/update-campaign/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/update-campaign/${params.id}`),
        element: <PrivateRoutes><UpdateCampaign></UpdateCampaign></PrivateRoutes>
      },
      {
        path: "/campaign/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.id}`),
        element: <PrivateRoutes><Details></Details></PrivateRoutes>
      },
      {
        path: "/add-new-campaign",
        element: <PrivateRoutes><AddNewCampaign></AddNewCampaign></PrivateRoutes>
      },
      {
        path: "/my-campaign",
        element: <PrivateRoutes><MyCampaign></MyCampaign></PrivateRoutes>
      },
      {
        path: "/my-donations",
        element: <PrivateRoutes><MyDonations></MyDonations></PrivateRoutes>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)