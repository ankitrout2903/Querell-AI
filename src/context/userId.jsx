import { createContext, useContext, useState } from "react";

const UserIdContext = createContext();

export const UserIdProvider = ({ children }) => {
  const [selectedUserId, setSelectedUserId] = useState(-1);

  
  return (
    <UserIdContext.Provider value={{ selectedUserId, setSelectedUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};

export const useUserId = () => useContext(UserIdContext);
