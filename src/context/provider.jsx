import { useEffect, useState } from "react";
import Context from "./context";

const Provider = ({ children }) => {
  const [userType, setUserType] = useState(() => {
    return localStorage.getItem("userType") || "";
  });
  const [clickedIcon, setClickedIcon] = useState("overview");
  const [currentStatus, setCurrentStatus] = useState("");

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
