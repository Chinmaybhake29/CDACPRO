import React, { useState } from "react";
import logo from "../assests/women.png";
import l1 from "../assests/jobcategorylogo/accounts.png";
import l2 from "../assests/jobcategorylogo/human-resources.png";
import l3 from "../assests/jobcategorylogo/megaphone.png";
import l4 from "../assests/jobcategorylogo/social-media.png";
import l5 from "../assests/jobcategorylogo/software-engineer.png";
import l6 from "../assests/jobcategorylogo/technical.png";
import l7 from "../assests/jobcategorylogo/test.png";
import l8 from "../assests/jobcategorylogo/web-design.png";

export default function Home() {
  const [query, setQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);

  const jobCategories = [
    { title: "Software Development", img: l5 },
    { title: "Marketing", img: l4 },
    { title: "Web Design", img: l8 },
    { title: "Sales", img: l3 },
    { title: "IT Support", img: l6 },
    { title: "Finance", img: l1 },
    { title: "Software Testing", img: l7 },
    { title: "HR", img: l2 },
  ];

  const handleSearch = () => {
    if (query.trim() !== "") {
      const results = jobCategories.filter((category) =>
        category.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCategories(results);
    } else {
      setFilteredCategories([]);
    }
  };

  const categoriesToDisplay =
    filteredCategories.length > 0 ? filteredCategories : jobCategories;

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
            <input
              type="text"
              placeholder="Search for jobs (e.g., Software Developer)"
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        <div className="col-xl-6 image-section">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="job-categories container">
        <h2 className="text-center mb-4">Popular Job Categories</h2>
        <div className="row justify-content-center">
          {categoriesToDisplay.map((category, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
              <div className="card category-card text-center">
                <img
                  src={category.img}
                  alt={category.title}
                  className="card-img-top mx-auto"
                />
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredCategories.length === 0 && query && (
          <div className="text-center mt-4">No results found.</div>
        )}
      </div>
    </div>
  );
}
