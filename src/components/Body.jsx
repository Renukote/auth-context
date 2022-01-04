import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Body = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div>
      {isAuth ? `User is logged in with the token ${isAuth}` : "Please Login"}
    </div>
  );
};
