import React, { useState, useContext } from "react";

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
