const Greetings = ({ primary, secondary }) => {
  return (
    <div className=" flex justify-center items-center w-full pt-10 xxs:text-2xl xs:text-3xl sm:text-5xl xl:text-[4rem]  font-semibold ">
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
