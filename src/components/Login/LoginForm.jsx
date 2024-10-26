import FrontImage from "../../assets/loginside.jpg";
import CustomDropdown from "./Dropdown";
const LoginForm = () => {
  return (
    <div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  p-6 bg-zinc-950/10 rounded-xl">
        <div className="bg-zinc-900/70 p-4 rounded-lg backdrop-blur-lg">
          <div className="flex justify-items-stretch gap-20">
            <div className="w-1/2">
              <img src={FrontImage} alt="" className="w-full rounded-lg" />
            </div>
            <div className=" min-h-[500px] min-w-[300px] flex flex-col">
              <div className="flex flex-col gap-8 pt-8 ">
                <h4 className="text-slate-100 text-4xl">Welcome Back</h4>
                <p className="text-slate-200">
                  Login as{" "}
                  <span className="text-orange-400"> Admin or User</span> to
                  continue.
                </p>
              </div>

              <form className="flex flex-col gap-6 mt-12 ">
                <CustomDropdown />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="fieldset"
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  className="fieldset"
                />
              </form>
              <button className="py-3 px-10 rounded-2xl w-full mt-12 text-xl text-slate-100 bg-orange-500 hover:bg-orange-600 transition duration-300">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
