import employees from "../data/employees.json";

const active = employees.filter(
  (employee) => employee.status === "Online"
).length;
const total = employees.length;

console.log("size of online from actbadge comp", active);
const ActiveBadge = () => {
  return (
    <div className="flex justify-center items-center md:gap-8 mt-16">
      <div className="">
        <p className="text-slate-100 text-3xl font-semibold">
          Employees Online Now :{" "}
        </p>
      </div>
      <div className="flex justify-center items-center border-4 border-orange-400 text-white p-2 rounded-full w-36 h-20 ">
        <p className="text-[2rem]">
          {active} <span className="text-orange-500">/ {total} </span>
        </p>
      </div>
    </div>
  );
};

export default ActiveBadge;
