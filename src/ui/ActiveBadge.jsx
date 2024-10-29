import employees from "../data/employees.json";

const active = employees.filter(
  (employee) => employee.status === "Online"
).length;

console.log("size of online from actbadge comp", active);
const ActiveBadge = () => {
  return (
    <div className="flex justify-center mt-16 border-2 border-orange-500 text-white p-2 rounded-full w-48 h-20 ">
      x/20
    </div>
  );
};

export default ActiveBadge;
