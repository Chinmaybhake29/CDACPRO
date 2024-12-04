import React from 'react'


export default function ContactUs() {
  return (
    <>
    <div class="container mt-5 contact">
        <h2 class="text-center mb-4">Contact Us</h2>
        <form>
           
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your name" required/>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
            </div>

            <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="subject" placeholder="Enter the subject" required/>
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="5" placeholder="Write your message here" required></textarea>
            </div>

            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Send Message</button>
            </div>
        </form>
    </div>
    <br/>
    </>
  )
}
