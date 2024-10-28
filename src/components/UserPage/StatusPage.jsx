import CustomDropdown from "../../ui/Dropdown";
import online from "../../assets/icons/online.gif";
import offline from "../../assets/icons/offline.gif";
import unknown from "../../assets/icons/unknown.gif";
import { useContext } from "react";
import Context from "../../context/context";

const options = ["Online", "Offline"];

const StatusPage = () => {
  const { currentStatus } = useContext(Context);
  console.log(currentStatus);
  return (
    <>
      <div>
        <div className="bg-orange-500 w-full h-12 mt-10">
          <div className="flex md:justify-between xs:justify-center items-center">
            <div className="flex justify-between items-center xl:gap-5 xs:gap-4 xs:px-3 xl:px-12">
              <p className="xl:text-xl xs:text-lg font-semibold">
                Set your status here
              </p>
              <CustomDropdown options={options} defaultOp="Select" />
            </div>
            <div className="mr-4 hidden md:block ">
              {currentStatus === "Online" ? (
                <img
                  src={online}
                  className="invert h-10 border-2 border-white"
                />
              ) : currentStatus === "Offline" ? (
                <img src={offline} className="invert h-9" />
              ) : (
                <img src={unknown} className="invert h-10 " />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-l-2 border-orange-500 mt-24 h-[20rem] sm:ml-auto sm:mr-auto xs:w-full sm:w-1/2 text-white p-4">
        <div>
          <p className="xl:text-4xl mb-4">Your Current Task Appears below : </p>
          <div>
            <ul className="list-disc ml-10 xl:text-xl">
              <li>Customer complaints handling</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusPage;
