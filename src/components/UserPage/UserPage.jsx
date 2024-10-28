import Menu from "../StripMenu/Menu";
import { useContext } from "react";
import Context from "../../context/context";
import LineChart from "../Graph/LineChart";
import { employees } from "../../data/employees";
import Greetings from "../../ui/Greetings";
import Appreciation from "../../ui/Appreciation";
import StatusPage from "./StatusPage";

const UserPage = () => {
  const { clickedIcon } = useContext(Context);
  const { UserType } = useContext(Context);
  console.log(clickedIcon);
  return (
    <div className="relative  bg-zinc-950 h-screen">
      <Menu clickedIcon={clickedIcon} UserType={UserType} />
      {clickedIcon === "overview" && (
        <>
          <Greetings primary="Welcome" secondary="User." />
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
      {clickedIcon === "status" && (
        <>
          <Greetings primary="Your" secondary="Status." />
          <StatusPage />
        </>
      )}
    </div>
  );
};

export default UserPage;
