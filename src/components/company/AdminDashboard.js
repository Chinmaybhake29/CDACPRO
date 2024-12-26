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
          <li onClick={() => setActiveSection("StudentRegister")}>Student Register</li>

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
          <li onClick={() => setActiveSection("Transactions")}>
            Transactions
          </li>
        </ul>
      </div>

      <div className="content">
        
        {activeSection === "employeeRegister" && <EmployeeRegister />}
        {activeSection === "StudentRegister" && <StudentRegister />}
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
        {activeSection === "Transactions" && (
          <Transactions />
        )}
      </div>
    </div>
  );
};

function EmployeeRegister() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '', // Date of birth
    gender: '', // Gender (e.g., Male, Female, Other)
    phone: '',
    email: '',
    address: '',
    jobTitle: '', // Job Title
    department: '', // Department
    employeeId: '', // Store the generated employee ID
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to generate a unique employee ID
  const generateEmployeeId = () => {
    const timestamp = new Date().getTime(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 1000); // Generate random number
    return `E-${timestamp}-${randomNum}`; // Format as 'E-<timestamp>-<randomNumber>'
  };

  // Handle form submission
  const saveProfile = () => {
    // Generate employee ID when form is submitted
    const employeeId = generateEmployeeId();

    // Add the generated employee ID to the form data
    setFormData((prevData) => ({
      ...prevData,
      employeeId: employeeId,
    }));

    // Here you can handle saving the form data to a backend or local state
    alert(`Form submitted successfully! Employee ID: ${employeeId}`);
  };

  return (
    <div className="form-container" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Employee Registration Form</h2>
      
      <div className="form-part" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          />
        </div>

        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          />
        </div>

        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Gender:</label>
          <select
            name="gender"
            className="form-control"
            value={formData.gender}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Phone:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Enter phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          />
        </div>
      </div>

      <div className="form-part" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          />
        </div>

        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Address:</label>
          <textarea
            name="address"
            className="form-control"
            placeholder="Enter address"
            style={{ width: '100%', resize: 'none', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px', height: '100px' }}
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            className="form-control"
            placeholder="Enter job title"
            value={formData.jobTitle}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          />
        </div>

        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Department:</label>
          <input
            type="text"
            name="department"
            className="form-control"
            placeholder="Enter department"
            value={formData.department}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          />
        </div>
      </div>

      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={saveProfile}
          style={{
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0, 123, 255, 0.2)',
          }}
        >
          Save Profile
        </button>
      </div>

      {formData.employeeId && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p><strong>Generated Employee ID:</strong> {formData.employeeId}</p>
        </div>
      )}
    </div>
  );
}


function StudentRegister() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '', // Date of birth
    gender: '', // Gender (e.g., Male, Female, Other)
    phone: '',
    email: '',
    address: '',
    major: '', // Field of Study
    year: '', // Year of Study
    userId: '', // Store the generated user ID
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to generate a unique user ID
  const generateUserId = () => {
    const timestamp = new Date().getTime(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 1000); // Generate random number
    return `S-${timestamp}-${randomNum}`; // Format as 'S-<timestamp>-<randomNumber>'
  };

  const saveProfile = () => {
    const userId = generateUserId();

    setFormData((prevData) => ({
      ...prevData,
      userId: userId,
    }));
    //show userid
    alert(`Form submitted successfully! User ID: ${userId}`);
  };

  return (
    <div className="form-container" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Student Registration Form</h2>
      
      <div className="form-part" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          />
        </div>

        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          />
        </div>

        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Gender:</label>
          <select
            name="gender"
            className="form-control"
            value={formData.gender}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Phone:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Enter phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          />
        </div>
      </div>

      <div className="form-part" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          />
        </div>

        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Address:</label>
          <textarea
            name="address"
            className="form-control"
            placeholder="Enter address"
            style={{ width: '100%', resize: 'none', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px', height: '100px' }}
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Major/Field of Study:</label>
          <input
            type="text"
            name="major"
            className="form-control"
            placeholder="Enter your major/field of study"
            value={formData.major}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          />
        </div>

        <div className="column" style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Year of Study:</label>
          <input
            type="number"
            name="year"
            className="form-control"
            placeholder="Enter year of study"
            value={formData.year}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}
          />
        </div>
      </div>

      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={saveProfile}
          style={{
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0, 123, 255, 0.2)',
          }}
        >
          Save Profile
        </button>
      </div>

      {formData.userId && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p><strong>Generated User ID:</strong> {formData.userId}</p>
        </div>
      )}
    </div>
  );
}

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

const Transactions = () => (
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
        <h2>Transaction History</h2>
      </center>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#">#123</a></td>
              <td>Social Media Expert</td>
              <td class="amount">₹99.00</td>
              <td>Dec 15, 2018</td>
              <td><span class="icon paypal"></span> Paytem</td>
              <td class="status-pending"><span class="icon pending"></span> Pending</td>
            </tr>
            <tr>
              <td><a href="#">#456</a></td>
              <td>Web Designer</td>
              <td class="amount">₹199.00</td>
              <td>Nov 10, 2018</td>
              <td><span class="icon bank-transfer"></span> Bank Transfer</td>
              <td class="status-pending"><span class="icon pending"></span> Pending</td>
            </tr>
            <tr>
              <td><a href="#">#789</a></td>
              <td>Finance Accountant</td>
              <td class="amount">₹299.00</td>
              <td>Oct 5, 2018</td>
              <td><span class="icon paypal"></span> Google Pay</td>
              <td class="status-pending"><span class="icon pending"></span> Pending</td>
            </tr>
            <tr>
              <td><a href="#">#101</a></td>
              <td>Social Media Expert</td>
              <td class="amount">₹399.00</td>
              <td>Dec 15, 2018</td>
              <td><span class="icon bank-transfer"></span> Bank Transfer</td>
              <td class="status-successful"><span class="icon successful"></span> Successful</td>
            </tr>
            <tr>
              <td><a href="#">#112</a></td>
              <td>Web Designer</td>
              <td class="amount">₹499.00</td>
              <td>Nov 10, 2018</td>
              <td><span class="icon paypal"></span> Paytem</td>
              <td class="status-pending"><span class="icon pending"></span> Pending</td>
            </tr>
            <tr>
              <td><a href="#">#987</a></td>
              <td>Finance Accountant</td>
              <td class="amount">₹599.00</td>
              <td>Oct 5, 2018</td>
              <td><span class="icon bank-transfer"></span> Bank Transfer</td>
              <td class="status-successful"><span class="icon successful"></span> Successful</td>
            </tr>
            <tr>
              <td><a href="#">#654</a></td>
              <td>Social Media Expert</td>
              <td class="amount">₹699.00</td>
              <td>Dec 15, 2018</td>
              <td><span class="icon paypal"></span> Paytem</td>
              <td class="status-successful"><span class="icon successful"></span> Successful</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);



export default AdminDashboard;
