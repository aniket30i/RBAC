import Menu from "../../ui/Menu";
import AltMenu from "../../ui/AltMenu";
import { useContext } from "react";
import Context from "../../context/context";
import LineChart from "../Graph/LineChart";
import Greetings from "../../ui/Greetings";
import Appreciation from "../../ui/Appreciation";
import StatusPage from "./StatusPage";
import Profile from "../../ui/Profile";

const UserPage = () => {
  const { clickedIcon } = useContext(Context);
  const { userType } = useContext(Context);

  return (
    <div className="relative  bg-zinc-950 h-screen">
      <AltMenu clickedIcon={clickedIcon} UserType={userType} />
      <Menu clickedIcon={clickedIcon} UserType={userType} />
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

          <div className="flex flex-col justify-center w-full sm:w-3/4 md:w-1/2 lg:w-3/5 mx-auto border-2 p-4 rounded-xl lg:h-[50vh] sm:h-[60vh]">
            <LineChart />
          </div>
          <Appreciation />
        </>
      )}
      {clickedIcon === "status" && (
        <>
          <Greetings primary="Your" secondary="Status." />
          <StatusPage />
        </>
      )}
      {clickedIcon === "profile" && (
        <>
          <Greetings primary="Your" secondary="Profile." />
          <Profile support="Administrator" type="User" />
        </>
      )}
    </div>
  );
};

export default UserPage;
