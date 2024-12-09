import React, { useState } from "react";


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
    <div style={{display: "flex",justifyContent: "center",alignItems: "center",height: "100vh", backgroundColor: "#f0f0f5",padding: "20px",}}>
      <div className="section">
        <div className="card p-3" style={{ maxWidth: "800px", width: "100%" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.8rem", margin: 0 }}>
            Profile 
          </h2>
          <br />
          <div className="form-grid" style={{display: "flex", gap: "1rem", flexWrap: "wrap",}}>
            <div className="form-group" style={{ flex: 1, minWidth: "300px" }}>
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter your full name"
              />

              <label htmlFor="education" className="form-label">
                Education
              </label>
              <input
                type="text"
                className="form-control"
                id="education"
                placeholder="Enter your highest qualification"
              />

              <label htmlFor="experience" className="form-label">
                Work Experience
              </label>
              <textarea
                className="form-control"
                id="experience"
                rows="3"
                placeholder="Describe your work experience"
              ></textarea>

              <label htmlFor="resumeupload" className="form-label">
                Upload Resume
              </label>
              <input type="file" className="form-control" id="resume" />
            </div>

            <div className="form-group" style={{ flex: 1, minWidth: "300px" }}>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />

              <label htmlFor="skills" className="form-label">
                Skills
              </label>
              <input
                type="text"
                className="form-control"
                id="skills"
                placeholder="Enter your skills (e.g., JavaScript, React)"
              />

              <label htmlFor="certifications" className="form-label">
                Certifications
              </label>
              <textarea
                className="form-control"
                id="certifications"
                rows="2"
                placeholder="List your certifications"
              ></textarea>

              <label htmlFor="careerGoals" className="form-label">
                Career Goals
              </label>
              <textarea
                className="form-control"
                id="careerGoals"
                rows="3"
                placeholder="Describe your career aspirations"
              ></textarea>
            </div>
          </div>
          <br />
          <button
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={() => alert("Profile Created successfully!")}
          >
            Create
          </button>
        </div>
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
    <div className="section">
      <h2>Available Jobs</h2>
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

const JobAlert = () => (
  <div className="section">
    <h2>Job Alerts</h2>
    <p>No new job alerts.</p>
  </div>
);

export default StudentDashboard;
