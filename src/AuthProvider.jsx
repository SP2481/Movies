import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
export const Authcontext = createContext();

export default function AuthProvider({ children }) {
  const [user, setuser] = useState("");
  const [isLoggedin, setisLoggedin] = useState(false);
  const navigate = useNavigate();
  const SignOut = async () => {
    await auth.signOut();
    navigate("/");
    setisLoggedin(false);
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuser(user);
        setisLoggedin(true);
      } else {
        setuser(null);
      }
    });
  });

  return (
    <Authcontext.Provider value={{ user, isLoggedin, SignOut }}>
      {children}
    </Authcontext.Provider>
  );
}
