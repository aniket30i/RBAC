import Menu from "../StripMenu/Menu";
import { useContext } from "react";
import Context from "../../context/context";
import LineChart from "../Graph/LineChart";
import { employees } from "../../data/employees";
import Welcome from "../../ui/Welcome";
import Appreciation from "../../ui/Appreciation";

const UserPage = () => {
  const { clickedIcon } = useContext(Context);
  const { UserType } = useContext(Context);
  console.log(clickedIcon);
  return (
    <div className="relative  bg-zinc-950 h-screen">
      {clickedIcon === "overview" && (
        <>
          <Welcome />
          <Menu clickedIcon={clickedIcon} UserType={UserType} />
          <div className="flex justify-start items-center w-1/2 mt-20 ml-auto mr-auto mb-2">
            <h2 className="text-slate-200 xl:text-2xl">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Growing
              </span>{" "}
              Family
            </h2>
          </div>

          <div className="flex flex-col justify-center h-1/2 w-1/2 ml-auto mr-auto border-2 p-4 rounded-xl">
            <LineChart />
          </div>
          <Appreciation employees={employees} />
        </>
      )}
    </div>
  );
};

export default UserPage;
