import React from "react";

const LoginBackground = () => {
  return (
    <div className="h-screen w-100 bg-black relative">
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="bg-gradient-to-r from-orange-600 to-stone-300 bg-clip-text text-[10rem] text-transparent">
          Manage your Employees
        </h1>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-300 p-4">
        <div className="bg-red-500 p-4">
          <p className="text-white text-2xl">Hello form</p>
        </div>
      </div>
    </div>
  );
};

export default LoginBackground;
