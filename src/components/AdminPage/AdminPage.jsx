import AltMenu from "../../ui/AltMenu";
import Menu from "../../ui/Menu";
import { useContext } from "react";
import Context from "../../context/context";
import Greetings from "../../ui/Greetings";
import LineChart from "../Graph/LineChart";
import ActiveBadge from "../../ui/ActiveBadge";
import Profile from "../../ui/Profile";
import Management from "./Management";

const AdminPage = () => {
  const { clickedIcon } = useContext(Context);
  const { userType } = useContext(Context);
  return (
    <div className="relative bg-zinc-950 min-h-screen">
      <Menu clickedIcon={clickedIcon} UserType={userType} />
      <AltMenu clickedIcon={clickedIcon} UserType={userType} />
      {clickedIcon === "overview" && (
        <>
          <Greetings primary="Welcome" secondary="Admin." />
          <div className="flex justify-start items-center w-1/2 mt-20 ml-auto mr-auto mb-2">
            <h2 className="text-slate-200 xl:text-2xl">
              Employee{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Sign-Ups
              </span>{" "}
              Monthly
            </h2>
          </div>
          <div className="flex flex-col justify-center w-full sm:w-3/4 md:w-1/2 lg:w-3/5 mx-auto border-2 p-4 rounded-xl lg:h-[50vh] sm:h-[60vh] ">
            <LineChart />
          </div>
          <ActiveBadge />
        </>
      )}
      {clickedIcon === "manage" && (
        <>
          <Greetings primary="Employee" secondary="Management." />
          <Management />
        </>
      )}
      {clickedIcon === "profile" && (
        <>
          <Greetings primary="Your" secondary="Profile." />
          <Profile support="Tech Team" type="Admin" />
        </>
      )}
    </div>
  );
};

export default AdminPage;
