import { createBrowserRouter } from "react-router-dom";
import AllTouristsSpots from "../pages/AllTouristsSpots";
import AddTouristsSpots from "../pages/AddTouristsSpots";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact";
import MyList from "../pages/MyList";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

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
        loader: () => fetch("http://localhost:5000/tourSpot"),
        element: <AllTouristsSpots />,
      },
      {
        path: "/addTouristsSpot",
        element: (
          <PrivateRoute>
            <AddTouristsSpots />
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
