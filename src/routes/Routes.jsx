import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllTouristsSpots from "../pages/AllTouristsSpots";
import AddTouristsSpots from "../pages/AddTouristsSpots";
import MyList from "../pages/MyList";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpots />,
      },
      {
        path: "/addTouristsSpot",
        element: <AddTouristsSpots />,
      },
      {
        path: "/myList",
        element: <MyList />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
