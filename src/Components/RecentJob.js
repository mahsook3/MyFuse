import React, { useState, useEffect } from "react";

const jobData = [
  {
    company: "Deloitte",
    title: "Associate Analyst",
    location: "Bengaluru",
    salary: "Not Disclosed",
    type: "Full Time",
    image:
      "https://www.myfuse.in/uploads/logo/Screenshot%202024-01-24%20at%2012.31.35%20PM.png",
  },
  {
    company: "AIRBUS",
    title: "Data Analyst",
    location: "Bangalore Area",
    salary: "Not Disclosed",
    type: "Full Time",
    image:
      "https://www.myfuse.in/uploads/logo/Screenshot%202024-01-24%20at%2012.28.26%20PM.png",
  },
  {
    company: "Bajaj Allianz",
    title: "Junior Service Engineer",
    location: "Begusarai – Ext",
    salary: "4.5 LPA (Expected)",
    type: "Full Time",
    image:
      "https://www.myfuse.in/uploads/logo/Screenshot%202024-01-24%20at%2012.25.26%20PM.png",
  },
  {
    company: "Amdocs",
    title: "IT Professional",
    location: "Pune, Maharashtra",
    salary: "4 – 6 LPA (Estimated)",
    type: "Full Time",
    image:
      "https://www.myfuse.in/uploads/logo/Screenshot%202024-01-24%20at%2012.22.12%20PM.png",
  },
  {
    company: "Google",
    title: "Software Engineer",
    location: "Mountain View, CA",
    salary: "Not Disclosed",
    type: "Full Time",
    image:
      "https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number-thumbnail.png",
  },
  {
    company: "Microsoft",
    title: "Cloud Solutions Architect",
    location: "Redmond, WA",
    salary: "Not Disclosed",
    type: "Full Time",
    image: "https://pngimg.com/uploads/microsoft/microsoft_PNG4.png",
  },
];

export default function RecentJob() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === Math.ceil(jobData.length / 3) - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Adjust the interval as needed (e.g., every 5 seconds)

    return () => clearInterval(interval);
  }, []);

  const renderJobCards = () => {
    const startIndex = currentSlide * 3;
    const endIndex = Math.min(startIndex + 3, jobData.length);

    return jobData.slice(startIndex, endIndex).map((job, index) => (
      <div
        key={index}
        className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl border border-white bg-white transition duration-300 hover:shadow-xl"
      >
        {/* Job Image */}
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <img src={job.image} alt="Job Image" className="rounded-xl" />
        </div>
        {/* Job Details */}
        <div className="w-full md:w-2/3 bg-white flex flex-col justify-between p-3">
          {/* Job Type and Company Name */}
          <div>
            <div className="flex justify-between item-center">
              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                {job.type}
              </div>
            </div>
            {/* Company Name and Title */}
            <h3 className="font-black text-gray-800 md:text-2xl text-xl">
              {job.company}
            </h3>
            <div className="flex flex-wrap">
              {/* Job Title */}
              <h1 className="flex-auto text-sm font-semibold text-gray-900">
                {job.title}
              </h1>
              {/* Location and Salary */}
              <div className="flex items-center mt-5">
                <svg
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Location icon SVG */}
                </svg>
                <div className="text-sm font-semibold text-black">
                  {job.location}
                </div>
              </div>
              <div className="flex items-center mt-5">
                <svg
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 320 512"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Salary icon SVG */}
                </svg>
                <div className="text-sm font-medium text-black">
                  {job.salary}
                </div>
              </div>
            </div>
          </div>
          {/* Apply Now Button */}
          <button
            type="button"
            className="mt-5 inline-block rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            Apply Now
          </button>
        </div>
      </div>
    ));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const renderDots = () => {
    return Array.from({ length: Math.ceil(jobData.length / 3) }, (_, index) => (
      <span
        key={index}
        className={`h-2 w-2 mx-1 rounded-full ${
          currentSlide === index ? "bg-gray-800" : "bg-gray-400"
        } cursor-pointer`}
        onClick={() => handleDotClick(index)}
      ></span>
    ));
  };

  return (
    <div className="bg-gray-100 pb-10 pt-10">
      <div className="flex justify-center items-center">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          {/* Title Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 px-4 md:px-0">
  <div className="sm:w-1/2">
    <h3 className="text-indigo-600 font-semibold">Trending</h3>
    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
      RECENT JOB
    </p>
    <div className="max-w-xl">
      <p>
        Recent job trends highlight positions in data analysis,
        telemedicine, and remote project management.
      </p>
    </div>
  </div>
  <form
  onSubmit={(e) => e.preventDefault()}
  className="flex items-center sm:w-1/2"
>
  <div className="relative flex-grow">
    <svg
      className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
    <input
      type="text"
      placeholder="Enter your job title"
      className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
    />
  </div>
  <button className="block mt-3 sm:mt-0 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:w-auto ml-2">
    Search
  </button>
</form>


</div>


          {/* Job Listings Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 justify-center">
            {renderJobCards()}
          </div>
          {/* Show More Button */}
          {/* Dots Section */}
          <div className="flex justify-center mt-5">{renderDots()}</div>
        </div>
      </div>
    </div>
  );
}
