import "./index.css";
import ReactDOM from "react-dom/client";
import routes from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import FirebaseAuthProviders from "./providers/FirebaseAuthProviders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <FirebaseAuthProviders>
      <ToastContainer></ToastContainer>
      <RouterProvider router={routes}></RouterProvider>
    </FirebaseAuthProviders>
  </>
);
