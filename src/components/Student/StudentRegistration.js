import React from 'react'

export default function StudentRegistration() {
  return (
    <>
    
    <div className="container text-center">
    <h2>Profile Builder</h2>
    <p>Fill out your profile details to improve your visibility to recruiters.</p>
        <div className="row">
        </div>
         <div className="card-body">
        <img
          src={ "https://via.placeholder.com/150"}
          alt="Profile"
          className="rounded-circle mb-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <input
          type="file"
          className="form-control"
          accept="image/*"
        />
      </div>
      <div class="col-md-9 p-4">
           
            <form>
                <div class="mb-3">
                    <label for="fullName" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="fullName" placeholder="Enter your full name"/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                </div>
                <div class="mb-3">
                    <label for="education" class="form-label">Education</label>
                    <input type="text" class="form-control" id="education" placeholder="Enter your highest qualification"/>
                </div>
                <div class="mb-3">
                    <label for="skills" class="form-label">Skills</label>
                    <input type="text" class="form-control" id="skills" placeholder="Enter your skills (e.g., JavaScript, React)"/>
                </div>
                <div class="mb-3">
                    <label for="experience" class="form-label">Work Experience</label>
                    <textarea class="form-control" id="experience" rows="3" placeholder="Describe your work experience"></textarea>
                </div>
                <div class="mb-3">
                    <label for="certifications" class="form-label">Certifications</label>
                    <textarea class="form-control" id="certifications" rows="2" placeholder="List your certifications"></textarea>
                </div>
                <div class="mb-3">
                    <label for="careerGoals" class="form-label">Career Goals</label>
                    <textarea class="form-control" id="careerGoals" rows="3" placeholder="Describe your career aspirations"></textarea>
                </div>
                <div class="mb-3">
                    <label for="resumeupload" class="form-label">Upload Resume</label>
                    <input type="file" class="form-control" id="resume"/>
                </div>
                <button type="submit" class="btn btn-primary">Save Profile</button>
            </form>
        </div>
    </div>
    </>
  )
}
