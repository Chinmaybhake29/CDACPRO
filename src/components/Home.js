import React from 'react'
import logo from '../assests/women.png';
import l1 from  '../assests/jobcategorylogo/accounts.png';
import l2 from  '../assests/jobcategorylogo/human-resources.png';
import l3 from  '../assests/jobcategorylogo/megaphone.png';
import l4 from  '../assests/jobcategorylogo/social-media.png';
import l5 from  '../assests/jobcategorylogo/software-engineer.png';
import l6 from  '../assests/jobcategorylogo/technical.png';
import l7 from  '../assests/jobcategorylogo/test.png';
import l8 from  '../assests/jobcategorylogo/web-design.png';
export default function Home() {
  return (
   <div className="homepage container-fluid">
      <div className="row align-items-center">
        <div className="col-xl-6 text-section">
          <h1>Discover Your Dream Job</h1>
          <p>
            Explore thousands of job listings tailored to your skills and
            preferences. Join now and take the next step in your career journey.
          </p>
          <div className="search-bar">
          <input type="text" placeholder="Search for jobs (e.g., Software Developer)"className="search-input"/>
          <button className="search-button">Search</button>
        </div>
        </div>

        <div className="col-xl-6 image-section">
          <img src={logo} alt="logo" />
        </div>

        <div class="job-categories container">
    <h2 class="text-center mb-4">Popular Job Categories</h2>
    <div class="row justify-content-center">
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card category-card text-center">
          <img src={l5} alt="Software Development" class="card-img-top mx-auto"/>
          <div class="card-body">
            <h5 class="card-title">Software Development</h5>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card category-card text-center">
          <img src={l4} alt="Marketing" class="card-img-top mx-auto"/>
          <div class="card-body">
            <h5 class="card-title">Marketing</h5>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card category-card text-center">
          <img src={l8} alt="Design" class="card-img-top mx-auto"/>
          <div class="card-body">
            <h5 class="card-title">Web Design</h5>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card category-card text-center">
          <img src={l3} alt="Sales" class="card-img-top mx-auto"/>
          <div class="card-body">
            <h5 class="card-title">Sales</h5>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card category-card text-center">
          <img src={l6} alt="Sales" class="card-img-top mx-auto"/>
          <div class="card-body">
            <h5 class="card-title">IT Support</h5>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card category-card text-center">
          <img src={l1} alt="Sales" class="card-img-top mx-auto"/>
          <div class="card-body">
            <h5 class="card-title">Finance</h5>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card category-card text-center">
          <img src={l7} alt="Sales" class="card-img-top mx-auto"/>
          <div class="card-body">
            <h5 class="card-title">Software Testing</h5>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card category-card text-center">
          <img src={l2} alt="Sales" class="card-img-top mx-auto"/>
          <div class="card-body">
            <h5 class="card-title">HR</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  )
}
