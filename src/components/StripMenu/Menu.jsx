import graph from "../../assets/icons/graph.png";
import status from "../../assets/icons/status.png";
const Menu = () => {
  return (
    <div className="absolute top-80 left-10 border-2 border-slate-100 p-3 h-72 rounded-3xl bg-neutral-900">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col justify-between gap-2 text-white">
          <div className="iconCustom">
            <img src={graph} alt="graph" className="invert h-10 w-10 " />
          </div>
          <div className="iconCustom">
            <img src={status} alt="graph" className="invert h-10 w-10 " />
          </div>
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
