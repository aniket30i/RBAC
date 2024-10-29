import online from "../../assets/icons/online.gif";
import { useContext } from "react";
import Context from "../../context/context";

const StatusPage = () => {
  const { currentStatus } = useContext(Context);
  console.log(currentStatus);
  return (
    <>
      <div className="bg-orange-500 w-full p-2 mt-10">
        <header className="flex md:justify-between xs:justify-center items-center">
          <div className="flex justify-between items-center xs:gap-3 xs:px-3 xl:px-12">
            <p className="xl:text-xl xs:text-lg font-semibold flex">
              Your Activity Status is:
            </p>
            <p className="flex justify-center p-1 px-2 bg-white rounded-lg ">
              Online
              <img src={online} alt="online" className="h-6 self-end" />
            </p>
          </div>
        </header>
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
