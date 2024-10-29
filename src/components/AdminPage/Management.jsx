import edit from "../../assets/icons/edit.png";
import del from "../../assets/icons/del.png";
import useEmployeeActions from "../../hooks/useEmployeeActions";
import { useState } from "react";

const Management = () => {
  const {
    employees,
    loading,
    error,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  } = useEmployeeActions("http://localhost:3080/employees");
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    employmentType: "",
    monthOfJoining: "",
    workAssigned: "",
    status: "Offline",
    employeeId: "",
  });
  const [editingEmployee, setEditingEmployee] = useState("true");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleAddEmployee = () => {};
  const handleUpdateEmployee = () => {};
  const handleDeleteEmployee = () => {};

  return (
    <div className="text-slate-100  mt-10">
      {/* <div>
        {editingEmployee && (
          <form onSubmit={handleUpdateEmployee}>
            <input
              type="text"
              placeholder="Name"
              value={editingEmployee.name}
              onChange={(e) =>
                setEditingEmployee({ ...editingEmployee, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={editingEmployee.email}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  email: e.target.value,
                })
              }
              required
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={editingEmployee.dateOfBirth}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  dateOfBirth: e.target.value,
                })
              }
              required
            />
            <input
              type="text"
              placeholder="Employment Type"
              value={editingEmployee.employmentType}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  employmentType: e.target.value,
                })
              }
              required
            />
            <input
              type="text"
              placeholder="Month of Joining"
              value={editingEmployee.monthOfJoining}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  monthOfJoining: e.target.value,
                })
              }
              required
            />
            <input
              type="text"
              placeholder="Work Assigned"
              value={editingEmployee.workAssigned}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  workAssigned: e.target.value,
                })
              }
              required
            />
            <button type="submit">Update Employee</button>
            <button type="button" onClick={() => setEditingEmployee(null)}>
              Cancel
            </button>
          </form>
        )}
      </div> */}
      <div className="">
        <div className="flex justify-center gap-2">
          <form onSubmit={handleAddEmployee}>
            <input
              type="text"
              placeholder="Unique ID - (139xxx)"
              className="inputUtil"
              value={newEmployee.employeeId}
              required
            />
            <input
              type="text"
              placeholder="Full Name"
              className="inputUtil"
              value={newEmployee.name}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="inputUtil"
              value={newEmployee.email}
              required
            />
            <input
              type="text"
              placeholder="D.O.B - (DD/MM/YYYY)"
              className="inputUtil"
              value={newEmployee.dateOfBirth}
              required
            />
            <input
              type="text"
              placeholder="Post (Admin/User)"
              className="inputUtil"
              value={newEmployee.employmentType}
              required
            />
            <input
              type="text"
              placeholder="Month Joined"
              className="inputUtil"
              value={newEmployee.monthOfJoining}
              required
            />
            <input
              type="text"
              placeholder="Assignment"
              className="inputUtil"
              value={newEmployee.workAssigned}
              required
            />
            <button
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-slate-100 font-semibold rounded-lg"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
      <div className="w-3/4 ml-auto mr-auto mt-4">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <td>Serial</td>
              <td>Unique ID</td>
              <td>Full Name</td>
              <td>Email</td>
              <td>D.O.B</td>
              <td>Posting</td>
              <td>Month Joined</td>
              <td>Assignment</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.employeeId}>
                <td>{index + 1}</td>
                <td>{employee.employeeId}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.employmentType}</td>
                <td>{employee.monthOfJoining}</td>
                <td>{employee.workAssigned}</td>
                <td>
                  <div className="flex gap-2">
                    <img
                      src={edit}
                      alt="edit"
                      className="h-7 invert hover:bg-blue-300"
                    />
                    <img
                      src={del}
                      alt="delete"
                      className="h-7 hover:bg-zinc-900"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Management;
