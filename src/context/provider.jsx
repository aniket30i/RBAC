import { useEffect, useState } from "react";
import Context from "./context";

const Provider = ({ children }) => {
  const [userType, setUserType] = useState(() => {
    return localStorage.getItem("userType") || "";
  });
  const [clickedIcon, setClickedIcon] = useState("overview");
  // for menu
  const [currentStatus, setCurrentStatus] = useState("");
  // for user type

  useEffect(() => {
    localStorage.setItem("userType", userType);
  }, [userType]);

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
