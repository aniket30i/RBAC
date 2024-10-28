const Welcome = () => {
  return (
    <div className=" flex justify-center items-center w-full pt-10 xl:text-[4rem] md:text-5xl font-semibold ">
      <h1 className="text-slate-200">
        Welcome,{" "}
        <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          User.
        </span>
      </h1>
    </div>
  );
};

export default Welcome;
