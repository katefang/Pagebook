import React, { createContext, useState } from 'react';
import { verifyUser } from '../services/auth';

export const UserContext = createContext({
  user: {},
  setUser: () => {}
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const verify = async () => {
    const response = await verifyUser();
    setUser(response);
    console.log(response);
  };

  if (!user) {
    verify();
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
