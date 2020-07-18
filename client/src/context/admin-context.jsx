import React, { createContext, useState } from 'react';
import { verifyUser } from '../services/auth';

export const AdminContext = createContext({
  admin: {},
  setAdmin: () => {}
});

const AdminContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  const verify = async () => {
    const response = await verifyUser();
    console.log(response);
    setAdmin(response);
  };

  if (!admin) {
    verify();
  }

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
