import { useContext, useState } from "react";
import graph from "../../assets/icons/graph.png";
import status from "../../assets/icons/status.png";
import Context from "../../context/context";
const Menu = () => {
  const [hoveredIcon, setHoveredIcon] = useState("");
  const { setClickedIcon } = useContext(Context);
  return (
    <div className="absolute top-80 left-10 border-2 border-slate-100 p-3 h-72 rounded-3xl bg-neutral-900">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col justify-between gap-2 text-white relative">
          <div
            className="iconCustom"
            onMouseEnter={() => setHoveredIcon("graph")}
            onMouseLeave={() => setHoveredIcon("")}
            onClick={() => setClickedIcon("graph")}
          >
            <img src={graph} alt="graph" className="invert h-10 w-10 " />
          </div>
          <div
            className="iconCustom "
            onMouseEnter={() => setHoveredIcon("status")}
            onMouseLeave={() => setHoveredIcon("")}
            onClick={() => setClickedIcon("status")}
          >
            <img src={status} alt="graph" className="invert h-10 w-10 " />
          </div>
          {hoveredIcon && (
            <div
              className={`absolute ${
                hoveredIcon === "graph" ? "top-[10px]" : "top-[65px]"
              } left-[80px] text-white bg-orange-500/80 px-5 rounded-md z-10 `}
            >
              <p className="text-lg font-semibold text-black ">{hoveredIcon}</p>
            </div>
          )}
        </div>
        <div className="iconBorders">
          <img
            src="https://icons.iconarchive.com/icons/iconarchive/incognito-animal-2/64/Panda-icon.png"
            alt="panda"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
