import edit from "../../assets/icons/edit.png";
import del from "../../assets/icons/del.png";
import useEmployeeActions from "../../hooks/useEmployeeActions";
import { useState } from "react";

const itemsPerPage = 10;

const Management = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);
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
    id: "",
  });
  const [editingEmployee, setEditingEmployee] = useState(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const currentChunk = employees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

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
  };
  const handleUpdateEmployee = (e) => {
    e.preventDefault();
    if (editingEmployee) {
      updateEmployee(editingEmployee);
      setEditingEmployee(null);
    }
  };
  const handleDeleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      deleteEmployee(id);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    const filtered = employees.filter((employee) =>
      employee.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  const iterable = searchQuery ? filteredEmployees : currentChunk;

  return (
    <div className="text-slate-100 mt-10">
      <div className="flex justify-end items-center gap-7 my-3 mx-[14rem] ">
        <p className="font-semibold">Search Employee</p>
        <input
          type="text"
          placeholder="Enter Email"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="inputUtil w-[300px]"
        />
      </div>
      <div>
        <div>
          <form
            onSubmit={handleAddEmployee}
            className="flex justify-center gap-2 sm:flex-col xl:flex-row"
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
            <button
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-slate-100 font-semibold rounded-lg"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
      <div className="w-3/4 ml-auto mr-auto mt-4 h-[33rem] overflow-y-auto overflow-x-auto">
        <table className="table table-hover table-dark border-2">
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
            {iterable.map((employee, index) => (
              <tr key={employee.id}>
                <td>{(currentPage - 1) * itemsPerPage + (index + 1)}</td>
                <td>{employee.id}</td>
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
                      onClick={() => setEditingEmployee(employee)}
                    />
                    <img
                      src={del}
                      alt="delete"
                      className="h-7 hover:bg-zinc-900"
                      onClick={() => handleDeleteEmployee(employee.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-2">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="bg-slate-100 text-slate-900 p-1 rounded-lg font-semibold"
          >
            Previous
          </button>
          <span>
            {"  "}
            Page {currentPage} of {totalPages}{" "}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="bg-slate-100 text-slate-900 p-1 rounded-lg font-semibold"
          >
            Next
          </button>
        </div>
      <div className="mt-2">
        {editingEmployee && (
          <form
            onSubmit={handleUpdateEmployee}
            className="flex gap-4 p-4 bg-neutral-700 justify-center w-screen translate-y-[]"
          >
            <input
              type="text"
              className="inputUtil"
              placeholder="Name"
              value={editingEmployee.name}
              onChange={(e) =>
                setEditingEmployee({ ...editingEmployee, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              className="inputUtil"
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
              className="inputUtil"
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
              className="inputUtil"
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
              className="inputUtil"
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
              className="inputUtil"
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
            <button
              type="submit"
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-slate-100 font-semibold rounded-lg"
            >
              Update
            </button>
            <button
              type="button"
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-slate-100 font-semibold rounded-lg"
              onClick={() => setEditingEmployee(null)}
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Management;
