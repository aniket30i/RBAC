import { useState } from "react";
import Context from "./context";

const Provider = ({ children }) => {
  const [userType, setUserType] = useState("");
  const [clickedIcon, setClickedIcon] = useState("status");
  const [currentStatus, setCurrentStatus] = useState("");

  return (
    <Context.Provider
      value={{
        userType,
        setUserType,
        clickedIcon,
        setClickedIcon,
        currentStatus,
        setCurrentStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
