import { useState } from "react";
import Context from "./context";

const Provider = ({ children }) => {
  const [userType, setUserType] = useState("");

  return (
    <Context.Provider value={{ userType, setUserType }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
