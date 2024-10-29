import useFetchEmployees from "../../hooks/useFetchEmployees";
import edit from "../../assets/icons/edit.png";
import del from "../../assets/icons/del.png";

const Management = () => {
  const { employees, loading, error } = useFetchEmployees(
    "http://localhost:3080/employees"
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="text-slate-100 border-t-2 border-slate-100 mt-10">
      <div className="border-b-2">
        <div className="flex justify-center gap-2">
          <input type="text" placeholder="Unique ID" className="inputUtil" />
          <input type="text" placeholder="Full Name" className="inputUtil" />
          <input type="text" placeholder="Email" className="inputUtil" />
          <input type="text" placeholder="D.O.B" className="inputUtil" />
          <select name="posting" id="posting" className="inputUtil">
            <option value="">Select Posting</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
          <input type="text" placeholder="Month Joined" className="inputUtil" />
          <input type="text" placeholder="Assignment" className="inputUtil" />
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
