import "./index.css";
import ReactDOM from "react-dom/client";
import routes from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import FirebaseAuthProviders from "./providers/FirebaseAuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <FirebaseAuthProviders>
      <RouterProvider router={routes}></RouterProvider>
    </FirebaseAuthProviders>
  </>
);
