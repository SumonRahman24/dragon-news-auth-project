import PropTypes from "prop-types";
import { createContext } from "react";

export const ContextAuth = createContext(null);

const AuthProvider = ({ children }) => {
  return <ContextAuth>{children}</ContextAuth>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
