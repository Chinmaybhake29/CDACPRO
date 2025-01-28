import React, { useState } from "react";
import PostJob from "./PostJob";
import WorkTracker from "./WorkTracker";
import ViewStudents from "./ViewStudents";
import ViewEmployees from "./ViewEmployees";
import Transactions from "./Transactions";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("postJob");

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  const logout = () => {
    localStorage.clear(); 
    alert("You have been logged out!");
    window.location.href = "/loginpage"; 
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-light p-3" style={{ width: "250px", height: "340vh" }}>
        <h3>Admin Dashboard</h3>
        <ul>
        
          <li onClick={() => showSection("postJob")}>Post Job</li>
          <li onClick={() => showSection("workTracker")}>Task Assign</li>
          <li onClick={() => showSection("viewStudents")}>View Students</li>
          <li onClick={() => showSection("viewEmployees")}>Employees Management</li>
          <li onClick={() => showSection("transactions")}>Transactions</li>
        </ul>
        <button className="btn btn-secondary logout-button" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Content Area */}
      <div className="content">
        {activeSection === "postJob" && <PostJob />}
        {activeSection === "workTracker" && <WorkTracker />}
        {activeSection === "viewStudents" && <ViewStudents />}
        {activeSection === "viewEmployees" && <ViewEmployees />}
        {activeSection === "transactions" && <Transactions/>}
      </div>
    </div>
  );
};

export default AdminDashboard;
