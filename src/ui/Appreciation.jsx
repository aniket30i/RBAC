const Appreciation = ({ employees }) => {
  const totalEmployess = employees.length;
  return (
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
  );
};

export default Appreciation;
