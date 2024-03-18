import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBullseye,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

export default function ResumeCreate() {
  const plan = {
    name: "AI Resume Boost",
    desc: "Get noticed faster with our AI-powered resume writing service.",
    features: [
      "ATS Friendly",
      "Job Specific",
      "Highlight Skills",
      "Quantify Impact",
      "AI-Powered Assist",
      "Keyword Optimized",
      "Content Tailoring",
      "Resume Building",
    ],
  };

  const features = [
    {
      name: "Optimize for Applicant Tracking Systems (ATS)",
      desc: "Our AI analyzes your skills and experience to ensure your resume uses the right keywords to get noticed by hiring managers using Applicant Tracking Systems.",
      icon: (
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="w-6 h-6 text-currentColor"
        />
      ),
    },
    {
      name: "Tailor Your Content for Each Job",
      desc: "Tell us about your target job and our AI will suggest relevant achievements and tailor your resume to showcase the perfect qualifications for the position.",
      icon: (
        <FontAwesomeIcon
          icon={faBullseye}
          className="w-6 h-6 text-currentColor"
        />
      ),
    },
    {
      name: "Highlight Your Accomplishments",
      desc: "Struggling to quantify your achievements? Let our AI help you transform your experience into impactful statements that showcase your value.",
      icon: (
        <FontAwesomeIcon
          icon={faTrophy}
          className="w-6 h-6 text-currentColor"
        />
      ),
    },
  ];

  return (
    <section className="relative py-14" id="createresume">
      <div className="max-w-screen-xl mx-auto text-gray-600 md:px-8">
        <div className="relative max-w-xl space-y-3 px-4 md:px-0">
          <h3 className="text-indigo-600 font-semibold">
            AI-Powered Resume Builder
          </h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Craft Your Resume with AI-Powered Assistance
          </p>
          <div className="max-w-xl">
            <p>
              In today's competitive job market, a strong resume is your first
              impression. But crafting a compelling resume that stands out can
              be time-consuming and challenging. Myfuse.in takes the guesswork
              out of the process with our innovative AI-powered resume writing
              service.
            </p>
          </div>
          <p className="text-base text-gray-600">
            Want to check your ATS score
            <a
              href="#checkresume"
              className="text-indigo-600 font-semibold hover:underline"
            >
              click here
            </a>
          </p>
        </div>
        <div className="mt-16 justify-between gap-8 md:flex">
          <ul className="flex-1 max-w-md space-y-10 px-4 md:px-0">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-3">
                <div className="flex-none w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 font-medium">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 mt-2 md:text-sm">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex-1 flex flex-col border-y mt-6 md:max-w-xl md:rounded-xl md:border md:border-x-none md:shadow-lg md:mt-0">
            <div className="p-4 py-8 border-b md:p-8">
              <div className="justify-between flex">
                <div className="max-w-xs">
                  <span className="text-2xl text-gray-800 font-semibold sm:text-3xl">
                    {plan.name}
                  </span>
                  <p className="mt-3 sm:text-sm">{plan.desc}</p>
                </div>
              </div>
              <button className="mt-4 px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">
                Create Now
              </button>
            </div>
            <ul className="p-4 space-y-3 sm:grid sm:grid-cols-2 md:block md:p-8 lg:grid">
              <div className="pb-2 col-span-2 text-gray-800 font-medium">
                <p>Here's how our AI can help you land your dream job:</p>
              </div>
              {plan.features.map((featureItem, idx) => (
                <li key={idx} className="flex items-center gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {featureItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
