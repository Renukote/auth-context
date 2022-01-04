import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState("");

  const handleAuthUpdate = async () => {
    if (isAuth) setAuth("");
    else {
      let {token }= await requestLogin();
      setAuth(token);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, handleAuthUpdate }}>
      {children}
    </AuthContext.Provider>
  );
};

const requestLogin = async () => {
  let body = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  let res = await fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  res = await res.json();
  return res;
};
