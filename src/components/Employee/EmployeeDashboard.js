import React, { useEffect, useState } from "react";

const EmployeeDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    position: "",
  });

  const Profile = ({ profile, onProfileChange, saveProfile }) => (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "112vh",
        backgroundColor: "#f0f0f5",
      }}
    >
      <div
        className="section"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="card p-3" style={{ width: "400px" }}>
          <h2>Employee Profile</h2>
          <div className="mb-3">
            <label htmlFor="employeeName" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="employeeName"
              name="name"
              value={profile.name}
              onChange={onProfileChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="employeeEmail" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="employeeEmail"
              name="email"
              value={profile.email}
              onChange={onProfileChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="employeedatebirth" className="form-label">
              Date of Birth:
            </label>
            <input
              type="date"
              className="form-control"
              id="employeedatebirth"
              name="dateOfBirth"
              value={profile.dateOfBirth}
              onChange={onProfileChange}
              placeholder="Enter your position"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="employeegender" className="form-label">
              Gender:
            </label>
            <br />
            <input type="radio" id="male" name="gender" value="Male" />
            <label htmlFor="male" className="form-label">
              Male
            </label>
            <br />
            <input type="radio" id="Female" name="gender" value="Female" />
            <label htmlFor="male" className="form-label">
              Female
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="employeePosition" className="form-label">
              Position:
            </label>
            <input
              type="text"
              className="form-control"
              id="employeePosition"
              name="position"
              value={profile.position}
              onChange={onProfileChange}
              placeholder="Enter your position"
            />
          </div>
          <button className="btn btn-primary" onClick={saveProfile}>
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );

  const Project = () => {
    return (
      <div className="project-section">
        <h2 className="project-title">My Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h2>Project 1</h2>
            <p>
              A brief description of Project 1. Highlight key features or
              technologies used.
            </p>
          </div>
          <div className="project-card">
            <h2>Project 2</h2>
            <p>
              A brief description of Project 2. Highlight key features or
              technologies used.
            </p>
          </div>
          <div className="project-card">
            <h2>Project 3</h2>
            <p>
              A brief description of Project 3. Highlight key features or
              technologies used.
            </p>
          </div>
        </div>
      </div>
    );
  };
  const TaskTracker = () => {
    
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Retrieve the data from localStorage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);

    // Listen for changes in local storage
    const handleStorageChange = () => {
      const updatedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(updatedTasks);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // clear tasks
  const clearTasks = () => {
    localStorage.removeItem('tasks');
    setTasks([]);
  };

  return (
    <div className="project-section">
      <h2 className="project-title">Task Tracker</h2>
      <button className="btn btn-primary" onClick={clearTasks}>
          Clear Tasks
      </button>
      {tasks.length === 0 ? (
        <p>No tasks assigned yet.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.employee}</strong>: {task.details}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  };
  const Status = () => (
    <div class="attendance">
      <center>
        <h1>Project Status</h1>
      </center>
      <table class="attendance-table">
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Project Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>Dealy Type</th>
          </tr>
        </thead>
        <tbody id="attendanceBody">
          <td>1</td>
          <td>Food Delivery App</td>
          <td>11/23/2024</td>
          <td>Working</td>
          <td>None</td>
        </tbody>
      </table>

      <form id="attendanceForm">
        <input type="text" id="projectID" placeholder="Project ID" required />
        <input
          type="text"
          id="projecttitle"
          placeholder="Project Title"
          required
        />
        <input type="date" id="date" required />
        <select id="status" required>
          <option value="">Select Status</option>
          <option value="Working">Working</option>
          <option value="SolvingBug">SolvingBugs</option>
          <option value="Released">Released</option>
          <option value="Delay">Dealy</option>
        </select>
        <input type="text" id="DelayType" placeholder="Delay Type (if any)" />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const saveProfile = () => {
    const { name, email, position } = profile;
    if (name && email && position) {
      alert(
        `Profile saved:\nName: ${name}\nEmail: ${email}\nPosition: ${position}`
      );
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Employee Dashboard</h3>
        <ul>
          <li
            className={activeSection === "profile" ? "active" : ""}
            onClick={() => setActiveSection("profile")}
          >
            Profile
          </li>
          <li
            className={activeSection === "taskTracker" ? "active" : ""}
            onClick={() => setActiveSection("taskTracker")}
          >
            Task Tracker
          </li>
          <li
            className={activeSection === "project" ? "active" : ""}
            onClick={() => setActiveSection("project")}
          >
            Project
          </li>
          <li
            className={activeSection === "Status" ? "active" : ""}
            onClick={() => setActiveSection("Status")}
          >
            Project Status
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="content">
        {activeSection === "profile" && (
          <Profile
            profile={profile}
            onProfileChange={handleProfileChange}
            saveProfile={saveProfile}
          />
        )}
        {activeSection === "taskTracker" && <TaskTracker />}
        {activeSection === "project" && <Project />}
        {activeSection === "Status" && <Status />}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
