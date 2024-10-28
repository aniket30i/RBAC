import CustomDropdown from "../../ui/Dropdown";

const options = ["Online", "Offline"];

const StatusPage = () => {
  return (
    <div>
      <div className="bg-orange-500 w-full h-12 mt-10">
        <div className="flex md:justify-start xs:justify-center items-center">
          <div className="flex justify-between items-center xl:gap-5 xs:gap-4 xs:px-3 xl:px-12">
            <p className="xl:text-xl xs:text-lg">Set your status here</p>
            <CustomDropdown options={options} defaultOp="Select" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
