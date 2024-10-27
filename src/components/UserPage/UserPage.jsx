import Menu from "../StripMenu/Menu";
import { useContext } from "react";
import Context from "../../context/context";
import LineChart from "../Graph/LineChart";
import { employees } from "../../data/employees";

const UserPage = () => {
  const { clickedIcon } = useContext(Context);
  console.log(clickedIcon);
  return (
    <div className="relative  bg-zinc-950 h-screen">
      <div className="border-2 flex justify-center items-center w-full pt-10 xl:text-[4rem] md:text-5xl font-semibold ">
        <h1 className="text-slate-200">
          Welcome,{" "}
          <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            User.
          </span>
        </h1>
      </div>
      <Menu />
      <div className="flex justify-center items-center">
        <h2 className="text-slate-200">Employee Growth</h2>
      </div>

      <div className="flex flex-col justify-center h-1/2 w-1/2 ml-[30rem] border-2 p-4">
        <LineChart />
      </div>
    </div>
  );
};

export default UserPage;
