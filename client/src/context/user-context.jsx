import React, { createContext, useState } from 'react';
import { loginUser } from '../services/auth';

export const UserContext = createContext({
  user: {},
  setUser: () => {}
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const token = JSON.parse(localStorage.getItem('jwt-token'));
  if (token && !user) {
    const signin = async () => {
      const signedInUser = await loginUser(null, token);
      console.log(signedInUser);
      setUser(signedInUser);
    };
    signin();
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
