import { useContext } from "react";
import { AuthContext } from "../providers/FirebaseAuthProviders";

const UseAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default UseAuth;
