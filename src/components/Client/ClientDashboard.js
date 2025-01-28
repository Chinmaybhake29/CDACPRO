import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ClientDashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-4">
        <h4>Client Dashboard</h4>
        <a href="#communication" className="d-block text-white p-2">Communication</a>
        <a href="#documents" className="d-block text-white p-2">Documents & Plans</a>
        <a href="#photo-gallery" className="d-block text-white p-2">Photo Gallery</a>
        <a href="#risk-management" className="d-block text-white p-2">Risk & Issue Management</a>
        <a href="#feedback-rating" className="d-block text-white p-2">Feedback & Rating</a>
        <a href="#profile-settings" className="d-block text-white p-2">Profile & Settings</a>
      </div>

      {/* Content */}
      <div className="container mt-5" style={{ marginLeft: "250px" }}>
        {/* Communication Section */}
        <section id="communication" className="mt-5">
          <h3>Communication with Admin/Staff</h3>
          <div className="card p-3">
            <h5>Message History</h5>
            <div className="chat-box">
              <p><strong>Admin:</strong> The construction is progressing well, we expect to finish on time.</p>
              <p><strong>Client:</strong> Great! Let me know if anything needs my attention.</p>
            </div>
            <textarea className="form-control mt-3" rows="3" placeholder="Send a message"></textarea>
            <button className="btn btn-primary mt-2">Send</button>
          </div>
        </section>

        {/* Documents Section */}
        <section id="documents" className="mt-5">
          <h3>Project Documents & Plans</h3>
          <div className="card p-3">
            <h5>Project Files</h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Contract Agreement</td>
                  <td>12th Jan 2024</td>
                  <td><button className="btn btn-info btn-sm">Download</button></td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-primary">Upload Document</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClientDashboard;
