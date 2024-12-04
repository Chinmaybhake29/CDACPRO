import React, { useState } from "react";


const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("postJob");

  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", skills: "JavaScript, HTML", image: "placeholder.png" },
  ]);

  const [employees, setEmployees] = useState([
    { id: 1, name: "Jane Smith", position: "Software Engineer", image: "placeholder.png" },
  ]);

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ employee: "", details: "" });

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const assignTask = () => {
    if (newTask.employee && newTask.details) {
      setTasks([...tasks, newTask]);
      alert("Task assigned successfully!");
      setNewTask({ employee: "", details: "" });
    } else {
      alert("Please fill in all task details.");
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h3>Admin Dashboard</h3>
        <ul>
          <li onClick={() => setActiveSection("postJob")}>Post Job</li>
          <li onClick={() => setActiveSection("candidateSearch")}>Candidate Search</li>
          <li onClick={() => setActiveSection("workTracker")}>Work Tracker</li>
          <li onClick={() => setActiveSection("viewStudents")}>View Students</li>
          <li onClick={() => setActiveSection("viewEmployees")}>View Employees</li>
        </ul>
      </div>

      <div className="content">
        {activeSection === "postJob" && (
          <PostJob />
        )}
        {activeSection === "candidateSearch" && (
          <CandidateSearch />
        )}
        {activeSection === "workTracker" && (
          <WorkTracker
            employees={employees}
            newTask={newTask}
            setNewTask={setNewTask}
            assignTask={assignTask}
          />
        )}
        {activeSection === "viewStudents" && (
          <ViewStudents students={students} deleteStudent={deleteStudent} />
        )}
        {activeSection === "viewEmployees" && (
          <ViewEmployees employees={employees} deleteEmployee={deleteEmployee} />
        )}
      </div>
    </div>
  );
};

const PostJob = () => (
  <div className="section">
    <h2>Post Job</h2>
    <div className="card p-3">
      <div className="form-group">
        <label>Job Title:</label>
        <input type="text" className="form-control" placeholder="Enter job title" />
      </div>
      <div className="form-group">
        <label>Job Description:</label>
        <textarea className="form-control" rows="4" placeholder="Enter job description"></textarea>
      </div>
      <div className="form-group">
        <label>Required Skills:</label>
        <input type="text" className="form-control" placeholder="Enter required skills" />
      </div>
      <div className="form-group">
        <label>Annual Salary:</label>
        <input type="number" className="form-control" placeholder="Enter salary" />
      </div>
      <button className="btn btn-primary" onClick={() => alert("Job posted successfully!")}>
        Post Job
      </button>
    </div>
  </div>
);

const CandidateSearch = () => (
  <div className="section">
    <h2>Candidate Search</h2>
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search by skill"
      onChange={(e) => console.log("Searching for skill:", e.target.value)}
    />
    <div className="card p-3">
      <h3>Matching Candidates</h3>
      <div className="student-card d-flex align-items-center">
        <img src="placeholder.png" alt="Candidate" className="rounded-circle" width="50" />
        <div>
          <p>Name: John Doe</p>
          <p>Skills: JavaScript, HTML</p>
          <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </div>
      </div>
    </div>
  </div>
);

const WorkTracker = ({ employees, newTask, setNewTask, assignTask }) => (
  <div className="section">
    <h2>Work Tracker</h2>
    <div className="card p-3">
      <div className="form-group">
        <label>Assign Task To:</label>
        <select
          className="form-control"
          value={newTask.employee}
          onChange={(e) => setNewTask({ ...newTask, employee: e.target.value })}
        >
          <option value="">Select an employee</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Task Details:</label>
        <textarea
          className="form-control"
          rows="4"
          value={newTask.details}
          onChange={(e) => setNewTask({ ...newTask, details: e.target.value })}
          placeholder="Enter task details"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={assignTask}>
        Assign Task
      </button>
    </div>
  </div>
);

const ViewStudents = ({ students, deleteStudent }) => (
  <div className="section">
    <h2>View Students</h2>
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Skills</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>
              <img src={student.image} alt="Student" className="rounded-circle" width="50" />
            </td>
            <td>{student.name}</td>
            <td>{student.skills}</td>
            <td>
              <button className="btn btn-warning btn-sm mx-1">Edit</button>
              <button className="btn btn-danger btn-sm mx-1" onClick={() => deleteStudent(student.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ViewEmployees = ({ employees, deleteEmployee }) => (
  <div className="section">
    <h2>View Employees</h2>
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>
              <img src={employee.image} alt="Employee" className="rounded-circle" width="50" />
            </td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>
              <button className="btn btn-warning btn-sm mx-1">Edit</button>
              <button className="btn btn-danger btn-sm mx-1" onClick={() => deleteEmployee(employee.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AdminDashboard;
