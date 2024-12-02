import React, { useState } from "react";


const EmployeeDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    position: "",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const saveProfile = () => {
    const { name, email, position } = profile;
    if (name && email && position) {
      alert(`Profile saved:\nName: ${name}\nEmail: ${email}\nPosition: ${position}`);
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
      </div>
    </div>
  );
};

const Profile = ({ profile, onProfileChange, saveProfile }) => (
  <div className="section">
    <h2>Employee Profile</h2>
    <div className="card p-3">
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
);

const TaskTracker = () => (
  <div className="section">
    <h2>Task Tracker</h2>
    <div className="card p-3">
      <h3>Today's Tasks</h3>
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          id="task1"
        />
        <label className="form-check-label" htmlFor="task1">
          Complete the monthly report
        </label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="task2"
        />
        <label className="form-check-label" htmlFor="task2">
          Attend team meeting
        </label>
      </div>
    </div>
    <div className="card p-3 mt-3">
      <h3>Group Project Tasks</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Assigned To</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Develop project module A</td>
            <td>John Doe</td>
            <td>In Progress</td>
          </tr>
          <tr>
            <td>Test the application</td>
            <td>Jane Smith</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>Prepare project documentation</td>
            <td>You</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default EmployeeDashboard;
