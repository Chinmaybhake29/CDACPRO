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
      <Sidebar
        studentImage={studentImage}
        handleImageUpload={handleImageUpload}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

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

const Sidebar = ({ studentImage, handleImageUpload, activeSection, setActiveSection }) => (
  <div className="sidebar" style={{ height: "190vh" }}>
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
      {[ 
        { id: "profileBuilder", label: "Profile Builder" },
        { id: "jobApply", label: "Job Apply" },
        { id: "viewAppliedJobs", label: "View Applied Jobs" },
        { id: "jobAlert", label: "Job Alerts" },
      ].map((section) => (
        <li
          key={section.id}
          className={`p-2 ${activeSection === section.id ? "active" : ""}`}
          onClick={() => setActiveSection(section.id)}
        >
          {section.label}
        </li>
      ))}
    </ul>
  </div>
);


const ProfileBuilder = () => (
  <div className="form-container">
    <h1>Chinmay Bhake</h1>
    <p>Student - B.Sc in Computer Science</p>

    <Section title="Personal Information">
      <ul>
        <li>Email: chinmaybhake@example.com</li>
        <li>Phone: +91 7453456789</li>
        <li>Address: 45, XYZ Street, Nashik City</li>
        <li>University: Nashik University</li>
      </ul>
    </Section>

    <Section title="Skills">
      <div className="skills">
        {["JavaScript", "React", "Node.js", "Tailwind CSS"].map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </Section>

    <Section title="Recent Projects">
      {[{ name: "Project One", description: "Description of project one. (Technologies: HTML, CSS, JS)" }].map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </Section>

    <Section title="Education">
      <ul>
        <li>B.Sc in Computer Science, Nashik University, 2024</li>
      </ul>
    </Section>

    <Section title="Achievements">
      <ul>
        <li>Completed a coding bootcamp on Full Stack Development</li>
        <li>Won 1st place in a hackathon competition</li>
      </ul>
    </Section>
  </div>
);

const Section = ({ title, children }) => (
  <div className="section">
    <h2>{title}</h2>
    {children}
  </div>
);


const JobApply = ({ onApply }) => {
  const jobs = [
    { title: "Frontend Developer", company: "XYZ Tech", salary: "$50,000/year" },
    { title: "Backend Developer", company: "ABC Inc", salary: "$60,000/year" },
  ];

  return (
    <div className="job-apply-container">
      <h2>Available Jobs</h2>
      {jobs.map((job, index) => (
        <div key={index} className="card p-3 mb-3">
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
    const storedJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
    setJobs(storedJobs);
  }, []);

  return (
    <div className="job-alert-container">
      <h2>Posted Jobs</h2>
      {jobs.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Skills</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.description}</td>
                <td>{job.skills}</td>
                <td>₹{job.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No jobs posted yet.</p>
      )}
    </div>
  );
};

export default StudentDashboard;
