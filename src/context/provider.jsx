import { useState } from "react";
import Context from "./context";

const Provider = ({ children }) => {
  const [userType, setUserType] = useState("");
  const [clickedIcon, setClickedIcon] = useState("graph");

  return (
    <Context.Provider
      value={{ userType, setUserType, clickedIcon, setClickedIcon }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
