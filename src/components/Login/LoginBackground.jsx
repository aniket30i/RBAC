import React from "react";

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
          <p className="text-white text-2xl">Welcome Back</p>
          <div className="flex">
            <div>PIC</div>
            <div className="border-2 border-emarald-700 min-h-[500px] min-w-[300px]">
              <form action="" className="flex flex-col gap-4 mt-12">
                <div className="flex justify-center">
                  <select
                    id="role"
                    className="px-5 border-none rounded-xl w-2/3 h-10"
                  >
                    <option value="" disabled selected>
                      Choose a role
                    </option>
                    <option value="admin" className="rounded-xl">
                      Admin
                    </option>
                    <option value="user">User</option>
                  </select>
                </div>

                <input type="text" placeholder="Enter Username" className="" />

                <input type="password" placeholder="Enter Password" />
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
