import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faUserTie,
  faCalendarAlt,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt as farCalendarAlt } from "@fortawesome/free-regular-svg-icons"; // Renamed to avoid conflict

export default () => {
  const features = [
    {
      icon: faPaintBrush,
      title: "Right Job For You",
      desc: "Myfuse's comprehensive platform is designed to help you discover the right job for you.",
    },
    {
      icon: faUserTie,
      title: "One to One Conversation With HR's",
      desc: "MyFuse offers the unique advantage of one-to-one conversations with HR professionals.",
    },
    {
      icon: farCalendarAlt,
      title: "No Work Experience Required",
      desc: "Myfuse welcomes applicants with no work experience, providing valuable opportunities and resources.",
    },
    {
      icon: faFileAlt,
      title: "Easy To Apply",
      desc: "Myfuse's straightforward application process is designed to be easy to apply.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl space-y-3">
          <h3 className="text-indigo-600 font-semibold">Features</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Your JOB FUSE Journey Starts Here
          </p>
          <p>
            Unlock endless career possibilities with Myfuse – the platform that
            bridges gap between Students and Job opportunities in India.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-4 lg:gap-x-0">
            {features.map((item, idx) => (
              <li
                key={idx}
                className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}
              >
                <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
