const Greetings = ({ primary, secondary }) => {
  return (
    <div className=" flex justify-center items-center w-full pt-10 xl:text-[4rem] md:text-5xl font-semibold ">
      <h1 className="text-slate-200">
        {primary},{" "}
        <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          {secondary}
        </span>
      </h1>
    </div>
  );
};

export default Greetings;
