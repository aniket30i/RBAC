import { useEffect, useState } from "react";
import employees from "../data/employees.json";
import useFetchEmployees from "../hooks/useFetchEmployees";

const ActiveBadge = () => {
  const { employees, loading, error } = useFetchEmployees(
    "http://localhost:3080/employees"
  );
  const active = employees.filter(
    (employee) => employee.status === "Online"
  ).length;
  const total = employees.length;
  return (
    <div className="flex justify-center items-center xs:gap-3 md:gap-8 mt-16">
      <div className="">
        <p className="text-slate-100 md:text-3xl xs:text-xl font-semibold">
          Employees Online Now :{" "}
        </p>
      </div>
      <div className="flex justify-center items-center xs:border-2 lg:border-4 border-orange-400 text-white p-2 rounded-full lg:w-36 lg:h-20 xs:w-24 xs:h-12 ">
        <p className="lg:text-[2rem] xs:text-lg">
          {active} <span className="text-orange-500">/ {total} </span>
        </p>
      </div>
    </div>
  );
};

export default ActiveBadge;
