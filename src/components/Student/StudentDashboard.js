import React, { useState, useEffect } from "react";


const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("profileBuilder");
  const [studentImage, setStudentImage] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([
    { title: "Software Developer", company: "ABC Corp", status: "Pending" },
  ]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setStudentImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile text-center">
          <img
            src={studentImage || "placeholder.png"}
            alt="Student"
            className="img-thumbnail"
          />
          <p>Student Name</p>
          <input
            type="file"
            accept="image/*"
            className="form-control mt-2"
            onChange={handleImageUpload}
          />
        </div>
        <ul className="list-unstyled mt-4">
          <li
            className={`p-2 ${activeSection === "profileBuilder" ? "active" : ""}`}
            onClick={() => setActiveSection("profileBuilder")}
          >
            Profile Builder
          </li>
          <li
            className={`p-2 ${activeSection === "jobApply" ? "active" : ""}`}
            onClick={() => setActiveSection("jobApply")}
          >
            Job Apply
          </li>
          <li
            className={`p-2 ${activeSection === "viewAppliedJobs" ? "active" : ""}`}
            onClick={() => setActiveSection("viewAppliedJobs")}
          >
            View Applied Jobs
          </li>
          <li
            className={`p-2 ${activeSection === "jobAlert" ? "active" : ""}`}
            onClick={() => setActiveSection("jobAlert")}
          >
            Job Alerts
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="content">
        {activeSection === "profileBuilder" && <ProfileBuilder />}
        {activeSection === "jobApply" && (
          <JobApply onApply={(job) => setAppliedJobs([...appliedJobs, job])} />
        )}
        {activeSection === "viewAppliedJobs" && (
          <ViewAppliedJobs appliedJobs={appliedJobs} />
        )}
        {activeSection === "jobAlert" && <JobAlert />}
      </div>
    </div>
  );
};

const ProfileBuilder = () => {
  return (
    <div class="container">
   <div class="profile-card">
    <h1>
     John Doe
    </h1>
    <p>
     Software Engineer
    </p>
   </div>
   <div class="section">
    <h2>
     Personal Information
    </h2>
    <ul>
     <li>
      <i class="fas fa-envelope">
      </i>
      Email: john.doe@example.com
     </li>
     <li>
      <i class="fas fa-phone">
      </i>
      Phone: +1 234 567 890
     </li>
     <li>
      <i class="fas fa-map-marker-alt">
      </i>
      Address: 1234 Elm Street, Some City, Some Country
     </li>
    </ul>
   </div>
   <div class="section">
    <h2>
     Skills
    </h2>
    <div class="skills">
     <span>
      JavaScript
     </span>
     <span>
      React
     </span>
     <span>
      Node.js
     </span>
     <span>
      Tailwind CSS
     </span>
    </div>
   </div>
   <div class="section projects">
    <h2>
     Recent Projects
    </h2>
    <div class="project">
     <h3>
      Project One
     </h3>
     <p>
      Description of project one. (Technologies: HTML, CSS, JS)
     </p>
    </div>
    <div class="project">
     <h3>
      Project Two
     </h3>
     <p>
      Description of project two. (Technologies: React, Node.js)
     </p>
    </div>
    <div class="project">
     <h3>
      Project Three
     </h3>
     <p>
      Description of project three. (Technologies: Tailwind CSS, JavaScript)
     </p>
    </div>
   </div>
   <div class="section">
    <h2>
     Education
    </h2>
    <ul>
     <li>
      Formal Education
     </li>
     <li>
      B.S. in Computer Science, Some University, 2020
     </li>
    </ul>
   </div>
  </div>
  );
  
  
};

const JobApply = ({ onApply }) => {
  const jobs = [
    { title: "Frontend Developer", company: "XYZ Tech", salary: "$50,000/year" },
    { title: "Backend Developer", company: "ABC Inc", salary: "$60,000/year" },
  ];

  return (

    <div style={{ alignItems: "center", height: "100vh", backgroundColor: "#f0f0f5", padding: "20px", }}>
      <center><h2>Available Jobs</h2></center>
      {jobs.map((job, index) => (
        <div key={index} className="card p-3 d-flex align-items-center justify-content-between mb-3">
          <div>
            <h4>{job.title}</h4>
            <p>{job.company}</p>
            <p>Salary: {job.salary}</p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => onApply({ title: job.title, company: job.company, status: "Applied" })}
          >
            Apply
          </button>
        </div>
      ))}

    </div>
  );
};

const ViewAppliedJobs = ({ appliedJobs }) => (
  <div className="section">
    <h2>Applied Jobs</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Company</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appliedJobs.map((job, index) => (
          <tr key={index}>
            <td>{job.title}</td>
            <td>{job.company}</td>
            <td>{job.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const JobAlert = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Retrieve the posted jobs from localStorage
    const storedJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
    setJobs(storedJobs);
  }, []);

  return (
    <div
      style={{
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f5",
        padding: "20px",
      }}
    >
      <h2>Posted Jobs</h2>
      {jobs.length > 0 ? (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#fff",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>Title</th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Description
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>Skills</th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>Salary</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {job.title}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {job.description}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {job.skills}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  ₹{job.salary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No jobs posted yet.</p>
      )}
    </div>

  );
}

export default StudentDashboard;
