import { useContext, useState } from "react";
import graph from "../assets/icons/graph.png";
import status from "../assets/icons/status.png";
import manage from "../assets/icons/manage.png";
import Context from "../context/context";
import panda from "../assets/pic/panda-user.png";
import deer from "../assets/pic/deer-admin.png";
const Menu = ({ clickedIcon, UserType }) => {
  const [hoveredIcon, setHoveredIcon] = useState("");
  const { setClickedIcon } = useContext(Context);

  return (
    <div className="absolute top-80 left-10 border-2 border-slate-100 p-3 h-72 rounded-3xl bg-neutral-900 hidden lg:block">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col justify-between gap-2 text-white relative">
          {/* {"/////////////Graph icon//////////////////"} */}
          <div
            className={`iconCustom ${
              clickedIcon === "overview" && "border-b-2 border-orange-500"
            }`}
            onMouseEnter={() => setHoveredIcon("overview")}
            onMouseLeave={() => setHoveredIcon("")}
            onClick={() => {
              setClickedIcon("overview");
            }}
          >
            <img src={graph} alt="graph" className="invert h-10 w-10 " />
          </div>
          {/* {"//////////////Status icon for user stack for Admin//////////////////"} */}
          {UserType === "User" && (
            <div
              className={`iconCustom  ${
                clickedIcon === "status" && "border-b-2 border-orange-500"
              } `}
              onMouseEnter={() => setHoveredIcon("status")}
              onMouseLeave={() => setHoveredIcon("")}
              onClick={() => setClickedIcon("status")}
            >
              <img src={status} alt="graph" className="invert h-10 w-10 " />
            </div>
          )}
          {UserType === "Admin" && (
            <div
              className={`iconCustom  ${
                clickedIcon === "manage" && "border-b-2 border-orange-500"
              } `}
              onMouseEnter={() => setHoveredIcon("manage")}
              onMouseLeave={() => setHoveredIcon("")}
              onClick={() => setClickedIcon("manage")}
            >
              <img src={manage} alt="manage" className="invert h-10 w-10 " />
            </div>
          )}
          {/* {"///////////////////////Condtional tagging of the icons//////////////////////"} */}
          {hoveredIcon && (
            <div
              className={`absolute ${
                hoveredIcon === "overview"
                  ? "top-[10px]"
                  : hoveredIcon === "status"
                  ? "top-[65px]"
                  : hoveredIcon === "profile"
                  ? "top-[200px]"
                  : hoveredIcon === "manage"
                  ? "top-[65px]"
                  : ""
              } left-[80px] text-white bg-orange-500/80 px-5 rounded-md z-10 `}
            >
              <p className="text-lg font-semibold text-black ">{hoveredIcon}</p>
            </div>
          )}
        </div>
        <div
          className={`${
            clickedIcon === "profile" && "border-b-2 border-orange-500"
          } rounded-lg`}
        >
          <img
            src={`${UserType === "User" ? panda : deer}`}
            alt="pfp"
            onMouseEnter={() => setHoveredIcon("profile")}
            onMouseLeave={() => setHoveredIcon("")}
            onClick={() => setClickedIcon("profile")}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
