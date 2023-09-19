import { createContext, useContext } from "react";
import useCountry from "../composables/useCountry";

const context = createContext();

export const AppContext = ({ children }) => { // provider
  const { userCountry } = useCountry();

  return (
    <context.Provider
      value={{
        userCountry: userCountry,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useAppContext = () => {
  if (!useContext(context)) {
    throw new Error("🔐 useAppContext must be used within AppContext");
  }

  return useContext(context);
};
