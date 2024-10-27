import Menu from "../StripMenu/Menu";
import { useContext } from "react";
import Context from "../../context/context";
import LineChart from "../Graph/LineChart";
import { employees } from "../../data/employees";

const totalEmployess = employees.length;

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
      <Menu clickedIcon={clickedIcon} />
      <div className="flex justify-start items-center w-1/2 mt-20 ml-auto mr-auto mb-2">
        <h2 className="text-slate-200 xl:text-2xl">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Growing
          </span>{" "}
          Family
        </h2>
      </div>

      <div className="flex flex-col justify-center h-1/2 w-1/2 ml-auto mr-auto border-2 p-4">
        <LineChart />
      </div>
      <div className="text-white flex justify-center items-center w-1/2 mt-20 ml-auto mr-auto mb-2">
        <h3 className="xl:text-2xl">
          We are happy to have you among the{" "}
          <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {totalEmployess}
          </span>{" "}
          members and still
          <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {" "}
            growing{" "}
          </span>
          family.
        </h3>
      </div>
    </div>
  );
};

export default UserPage;
