import React from "react";

const featureData = {
  features: [
    {
      icon: "fas fa-users",
      title: "Connecting People",
      description:
        "At Myfuse, we understand the importance of connecting individuals with the right job opportunities.",
    },
    {
      icon: "fas fa-briefcase",
      title: "Best Job Listings",
      description:
        "We promise to provide the best job listings and resources to help you land your dream job in India.",
    },
    {
      icon: "fas fa-user-friends",
      title: "Experienced Team",
      description:
        "Our team consists of industry professionals, experienced recruiters, and HR experts dedicated to bridging the gap between candidates and job opportunities in India.",
    },
    {
      icon: "fas fa-globe",
      title: "Inclusive Vision",
      description:
        "Our vision is a world where every candidate has access to the resources and opportunities they need to succeed in their chosen careers.",
    },
  ],
};

export default function Goals() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <section className="relative pt-16 bg-blueGray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-indigo-600 fill-current"
                    />
                  </svg>
                  <h4 className="text-xl font-bold text-white">Our Goal</h4>
                  <p className="text-md font-light mt-2 text-white">
                    Empowering Futures, Enabling Success: Our vision at
                    MyFuse.In is to be the catalyst for connecting talent with
                    opportunities, nurturing careers, and fostering growth.
                    We're committed to shaping a world where every individual
                    finds their perfect placement and realizes their full
                    potential.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                {featureData.features.map((feature, index) => (
                  <div key={index} className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className={feature.icon} />
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          {feature.title}
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
