import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

// crate context and wrapping to children and ---> main.jsx wrapping korbo;
// pass korbo value -->

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // register -> create user
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  // login -> login user
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  // pass value by object
  const authInfo = {
    createUser,
    loginUser,
  };

  // onAuth State Change
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("this is current", currentUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
