import React, { useState } from "react";
import useEmployeeActions from "../../hooks/useEmployeeActions";

const AddEmployees = ({ setAddClicked }) => {
  const { addEmployee } = useEmployeeActions("http://localhost:3080/employees");
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    employmentType: "",
    monthOfJoining: "",
    workAssigned: "",
    status: "Offline",
    id: "",
  });
  const handleAddEmployee = (e) => {
    e.preventDefault();
    addEmployee(newEmployee);
    setNewEmployee({
      name: "",
      email: "",
      dateOfBirth: "",
      employmentType: "",
      monthOfJoining: "",
      workAssigned: "",
      status: "Offline",
      id: "",
    });
    setAddClicked(false);
  };
  return (
    <div>
      <form
        onSubmit={handleAddEmployee}
        className="2xl:flex justify-center w-full gap-2 xs:grid xs:grid-cols-2"
      >
        <input
          type="text"
          placeholder="Unique ID - (139xxx)"
          className="inputUtil"
          value={newEmployee.id}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, id: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Full Name"
          className="inputUtil"
          value={newEmployee.name}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, name: e.target.value })
          }
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="inputUtil"
          value={newEmployee.email}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, email: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="D.O.B - (YYYY-MM-DD)"
          className="inputUtil"
          value={newEmployee.dateOfBirth}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, dateOfBirth: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Post (Admin/User)"
          className="inputUtil"
          value={newEmployee.employmentType}
          onChange={(e) =>
            setNewEmployee({
              ...newEmployee,
              employmentType: e.target.value,
            })
          }
          required
        />
        <input
          type="text"
          placeholder="Month Joined"
          className="inputUtil"
          value={newEmployee.monthOfJoining}
          onChange={(e) => {
            setNewEmployee({
              ...newEmployee,
              monthOfJoining: e.target.value,
            });
          }}
          required
        />
        <input
          type="text"
          placeholder="Assignment"
          className="inputUtil"
          value={newEmployee.workAssigned}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, workAssigned: e.target.value })
          }
          required
        />
        <div className="flex gap-2">
          <button
            className="p-2 bg-emerald-600 hover:bg-emerald-700 text-slate-100 font-semibold rounded-lg xs:w-24"
            type="submit"
          >
            Add
          </button>
          <button
            className="p-2 bg-gray-600 hover:bg-gray-700 text-slate-100 font-semibold rounded-lg"
            onClick={() => setAddClicked(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployees;
