import React, { useEffect, useState } from "react";


const Section = ({ title, children }) => (
  <section className="section">
    <h2>{title}</h2>
    {children}
  </section>
);


const Profile = () => {
  const employeeInfo = [
    { label: "Email", value: "chinmaybhake@example.com" },
    { label: "Phone", value: "+91 7453456789" },
    { label: "Address", value: "45, XYZ Street, Nashik City" },
    { label: "Company", value: "Tech Solutions Pvt. Ltd." },
    { label: "Designation", value: "Software Engineer" },
  ];

  const skills = ["JavaScript", "React", "Node.js", "Tailwind CSS"];

  const projects = [
    {
      name: "Project One",
      description: "Description of project one. (Technologies: HTML, CSS, JS)",
    },
  ];

  const achievements = [
    "Completed a coding bootcamp on Full Stack Development",
    "Won 1st place in a hackathon competition",
  ];

  return (
    <div className="form-container">
      <h1>Chinmay Bhake</h1>
      <p>Software Engineer</p>

      <Section title="Employee Information">
        <ul>
          {employeeInfo.map((item, index) => (
            <li key={index}>
              <strong>{item.label}:</strong> {item.value}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Skills">
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Recent Projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Achievements">
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
};
const Project = () => (
  <div className="project-section">
    <h2 className="project-title">My Projects</h2>
    <div className="project-list">
      {["Project 1", "Project 2", "Project 3"].map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project}</h3>
          <p>A brief description of {project}. Highlight key features or technologies used.</p>
        </div>
      ))}
    </div>
  </div>
);

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);

    const handleStorageChange = () => {
      const updatedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(updatedTasks);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const clearTasks = () => {
    localStorage.removeItem("tasks");
    setTasks([]);
  };

  return (
    <div className="form-container">
      <h2>Task Tracker</h2>
      <button className="btn btn-primary" onClick={clearTasks}>Clear Tasks</button>
      {tasks.length === 0 ? (
        <p>No tasks assigned yet.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}><strong>{task.employee}</strong>: {task.details}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Status = () => (
  <div className="status-section">
    <h1>Project Status</h1>
    <table className="status-table">
      <thead>
        <tr>
          <th>Project ID</th>
          <th>Project Title</th>
          <th>Date</th>
          <th>Status</th>
          <th>Delay Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Food Delivery App</td>
          <td>11/23/2024</td>
          <td>Working</td>
          <td>None</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const EmployeeDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    position: "",
    dateOfBirth: "",
    gender: "",
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
      <div className="sidebar" style={{ height: "190vh" }}>
        <h3>Employee Dashboard</h3>
        <ul>
          {["profile", "taskTracker", "project", "Status"].map((section) => (
            <li
              key={section}
              className={activeSection === section ? "active" : ""}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {activeSection === "profile" && (
          <Profile profile={profile} onProfileChange={handleProfileChange} saveProfile={saveProfile} />
        )}
        {activeSection === "taskTracker" && <TaskTracker />}
        {activeSection === "project" && <Project />}
        {activeSection === "Status" && <Status />}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
