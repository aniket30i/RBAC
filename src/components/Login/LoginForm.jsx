import FrontImage from "../../assets/pic/loginside.jpg";
import CustomDropdown from "../../ui/Dropdown";
import { useContext, useEffect } from "react";
import Context from "../../context/context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const options = ["Admin", "User"];
const LoginForm = () => {
  const { userType, setUserType } = useContext(Context);
  const navigate = useNavigate();
  console.log(userType);

  useEffect(() => {
    setUserType("");
  }, [setUserType]);

  const handleLogin = () => {
    console.log("login clicked");
    if (userType) {
      if (userType === "Admin") {
        navigate("/admin");
      }
      if (userType === "User") {
        navigate("/user");
      }
    } else {
      toast.error("Please choose a role");
    }
  };

  return (
    <div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  p-6 bg-zinc-950/10 rounded-xl">
        <div className="bg-zinc-900/70 p-4 rounded-lg backdrop-blur-lg">
          <div className="flex justify-items-stretch lg:gap-12">
            <div className="xl:w-1/2 md:hidden xl:block">
              <img
                src={FrontImage}
                alt="An office building"
                className="w-full rounded-lg lg:h-[550px]"
              />
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
                <CustomDropdown options={options} defaultOp="Choose a role" />
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
              <button
                className="py-3 px-10 rounded-2xl w-full mt-8 text-xl text-slate-100 bg-orange-500 hover:bg-orange-600 transition duration-300"
                onClick={handleLogin}
              >
                Login
              </button>
              <div className="mt-2 flex justify-between text-slate-100">
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="check"
                  />
                  <label>Remember Me</label>
                </div>
                <div>
                  <a href="">
                    <p>Forget Password</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
