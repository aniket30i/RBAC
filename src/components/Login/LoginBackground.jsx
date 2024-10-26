import React from "react";
import CustomDropdown from "./Dropdown";

const LoginBackground = () => {
  return (
    <div className="h-screen w-100 bg-black relative">
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="bg-gradient-to-r from-orange-600 to-stone-300 bg-clip-text text-[10rem] text-transparent text-center">
          Employee Management Simplified
        </h1>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-300 p-4">
        <div className="bg-slate-500 p-4">
          <div className="flex">
            <div>PIC</div>
            <div className="border-2 border-emarald-700 min-h-[500px] min-w-[300px]">
              <div className="flex flex-col gap-8 pt-8">
                <h4 className="text-white text-4xl">Welcome Back</h4>
                <p>Login as Admin/User to continue.</p>
              </div>

              <form action="" className="flex flex-col gap-4 mt-12">
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
              <button className="p-3 px-10 rounded-2xl bg-orange-500">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBackground;
