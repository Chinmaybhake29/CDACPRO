import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("postJob");

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      skills: "JavaScript, HTML",
      image: "placeholder.png",
    },
  ]);

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Jane Smith",
      position: "Software Engineer",
      image: "placeholder.png",
    },
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
          <li onClick={() => setActiveSection("employeeRegister")}>
            Employee Register
          </li>
          <li onClick={() => setActiveSection("postJob")}>Post Job</li>
          <li onClick={() => setActiveSection("candidateSearch")}>
            Candidate Search
          </li>
          <li onClick={() => setActiveSection("workTracker")}>Work Tracker</li>
          <li onClick={() => setActiveSection("viewStudents")}>
            View Students
          </li>
          <li onClick={() => setActiveSection("viewEmployees")}>
            View Employees
          </li>
        </ul>
      </div>

      <div className="content">
        {activeSection === "employeeRegister" && <EmployeeRegister />}
        {activeSection === "postJob" && <PostJob />}
        {activeSection === "candidateSearch" && <CandidateSearch />}
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
          <ViewEmployees
            employees={employees}
            deleteEmployee={deleteEmployee}
          />
        )}
      </div>
    </div>
  );
};

const EmployeeRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    phone: "",
    experience: "",
    email: "",
    education: "",
    address: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveProfile = () => {
    const userId = uuidv4(); // Generate user ID
    const userProfile = { ...formData, userId }; // Add userId 

    // Log or handle the profile data
    console.log("User Profile:", userProfile);

    // Optionally, reset the form
    setFormData({
      name: "",
      position: "",
      phone: "",
      experience: "",
      email: "",
      education: "",
      address: "",
      skills: "",
    });

    alert("Profile saved with User ID: " + userId);
  };

  return (
    <div className="form-container">
      <div
        className="form-part"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        <div className="column" style={{ flex: "1 1 45%" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="column" style={{ flex: "1 1 45%" }}>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            className="form-control"
            placeholder="Enter position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>
        <div className="column" style={{ flex: "1 1 45%" }}>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Enter phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="column" style={{ flex: "1 1 45%" }}>
          <label>Experience:</label>
          <input
            type="text"
            name="experience"
            className="form-control"
            placeholder="Enter experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>
      </div>
      <div
        className="form-part"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div className="column" style={{ flex: "1 1 45%" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="column" style={{ flex: "1 1 45%" }}>
          <label>Education:</label>
          <input
            type="text"
            name="education"
            className="form-control"
            placeholder="Enter education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div className="column" style={{ flex: "1 1 45%" }}>
          <label>Address:</label>
          <textarea
            name="address"
            className="form-control"
            placeholder="Enter address"
            style={{ resize: "none" }}
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="column" style={{ flex: "1 1 45%" }}>
          <label>Skills:</label>
          <textarea
            name="skills"
            className="form-control"
            placeholder="Enter skills"
            style={{ resize: "none" }}
            value={formData.skills}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={saveProfile}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const PostJob = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f0f0f5",
      padding: "20px",
    }}
  >
    <div
      className="section"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: "800px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "1.8rem", margin: 0 }}>
          Post Job
        </h2>
        <br />
        <div className="form-group">
          <label>Job Title:</label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter job title"
          />
        </div>
        <div className="form-group">
          <label>Job Description:</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Enter job description"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Required Skills:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter required skills"
          />
        </div>
        <div className="form-group">
          <label>Annual Salary:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter salary"
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            const newJob = {
              title: document.querySelector('[placeholder="Enter job title"]')
                .value,
              description: document.querySelector(
                '[placeholder="Enter job description"]'
              ).value,
              skills: document.querySelector(
                '[placeholder="Enter required skills"]'
              ).value,
              salary: document.querySelector('[placeholder="Enter salary"]')
                .value,
            };

            // Save job to localStorage
            const existingJobs =
              JSON.parse(localStorage.getItem("postedJobs")) || [];
            existingJobs.push(newJob);
            localStorage.setItem("postedJobs", JSON.stringify(existingJobs));

            alert("Job posted successfully!");
          }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Post Job
        </button>
      </div>
    </div>
  </div>
);

const CandidateSearch = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "112vh",
      backgroundColor: "#f0f0f5",
      padding: "20px",
    }}
  >
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
          <img
            src="placeholder.png"
            alt="Candidate"
            className="rounded-circle"
            width="50"
          />
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
  </div>
);

const WorkTracker = () => {
  const [newTask, setNewTask] = useState({ employee: "", details: "" });
  const employees = ["Swapnil", "Pankaja", "Mohit"];

  const assignTask = () => {
    if (newTask.details.trim()) {
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      // Add the new task
      savedTasks.push(newTask);
      // Save updated tasks to local storage
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
      // Reset the form
      setNewTask({ employee: "", details: "" });
      alert("Task assigned successfully!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "112vh",
        backgroundColor: "#f0f0f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          height: "auto",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div>
            <label
              htmlFor="employeeSelect"
              style={{ fontSize: "1.1rem", fontWeight: "600" }}
            >
              Assign Task To:
            </label>
            <select
              id="employeeSelect"
              className="form-control"
              value={newTask.employee}
              onChange={(e) =>
                setNewTask({ ...newTask, employee: e.target.value })
              }
              style={{
                fontSize: "1rem",
                padding: "10px",
                width: "100%",
                marginTop: "5px",
              }}
            >
              <option value="">Select an employee</option>
              {employees.map((employee, index) => (
                <option key={index} value={employee}>
                  {employee}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="taskDetails"
              style={{ fontSize: "1.1rem", fontWeight: "600" }}
            >
              Task Details:
            </label>
            <textarea
              id="taskDetails"
              className="form-control"
              rows="6"
              value={newTask.details}
              onChange={(e) =>
                setNewTask({ ...newTask, details: e.target.value })
              }
              placeholder="Describe the task details here"
              style={{
                fontSize: "1rem",
                padding: "10px",
                width: "100%",
                marginTop: "5px",
              }}
            ></textarea>
            {newTask.details.trim() === "" && (
              <small style={{ color: "red", fontSize: "0.9rem" }}>
                Task details are required.
              </small>
            )}
          </div>
          <button
            onClick={assignTask}
            disabled={newTask.details.trim() === ""}
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "1.2rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: newTask.details.trim() === "" ? "not-allowed" : "pointer",
              opacity: newTask.details.trim() === "" ? 0.6 : 1,
            }}
          >
            Assign Task
          </button>
        </div>
      </div>
    </div>
  );
};

const ViewStudents = ({ students, deleteStudent }) => (
  <div
    style={{
      justifyContent: "center",
      alignItems: "center",
      height: "112vh",
      backgroundColor: "#f0f0f5",
    }}
  >
    <div className="section">
      <center>
        <h2>View Students</h2>
      </center>
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
                <img
                  src={student.image}
                  alt="Student"
                  className="rounded-circle"
                  width="50"
                />
              </td>
              <td>{student.name}</td>
              <td>{student.skills}</td>
              <td>
                <button className="btn btn-warning btn-sm mx-1">Edit</button>
                <button
                  className="btn btn-danger btn-sm mx-1"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ViewEmployees = ({ employees, deleteEmployee }) => (
  <div
    style={{
      justifyContent: "center",
      alignItems: "center",
      height: "112vh",
      backgroundColor: "#f0f0f5",
    }}
  >
    <div className="section">
      <center>
        <h2>View Employess</h2>
      </center>
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
                <img
                  src={employee.image}
                  alt="Employee"
                  className="rounded-circle"
                  width="50"
                />
              </td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>
                <button className="btn btn-warning btn-sm mx-1">Edit</button>
                <button
                  className="btn btn-danger btn-sm mx-1"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminDashboard;
