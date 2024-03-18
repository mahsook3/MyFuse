// NavBar.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faHospital,
  faLaptop,
  faPlane,
  faShoppingBag,
  faTools,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const dropdownNavs = [
  {
    title: "Engineering and Manufacturing",
    desc: "Find jobs in engineering and manufacturing sector",
    path: "javascript:void(0)",
    icon: <FontAwesomeIcon icon={faTools} />,
  },
  {
    title: "Health Care",
    desc: "Explore healthcare job opportunities",
    path: "javascript:void(0)",
    icon: <FontAwesomeIcon icon={faHospital} />,
  },
  {
    title: "Retail and Consumer",
    desc: "Browse retail and consumer industry jobs",
    path: "javascript:void(0)",
    icon: <FontAwesomeIcon icon={faShoppingBag} />,
  },
  {
    title: "Technology And IT",
    desc: "Discover technology and IT job openings",
    path: "javascript:void(0)",
    icon: <FontAwesomeIcon icon={faLaptop} />,
  },
  {
    title: "Transportation and Logistics",
    desc: "Search for transportation and logistics jobs",
    path: "javascript:void(0)",
    icon: <FontAwesomeIcon icon={faTruck} />,
  },
  {
    title: "Travel And Tourism",
    desc: "Find jobs in the travel and tourism industry",
    path: "javascript:void(0)",
    icon: <FontAwesomeIcon icon={faPlane} />,
  },
];

const NavBar = () => {
  const [state, setState] = useState(false);
  const [dropdownState, setDropdownState] = useState({
    isActive: false,
    idx: null,
  });
  const location = useLocation();

  const navigation = [
    { title: "Home", path: "/", isDropdown: false },
    {
      title: "Jobs",
      path: "javascript:void(0)",
      isDropdown: true,
      navs: dropdownNavs,
    },
    { title: "About", path: "/about", isDropdown: false },
    { title: "Contact", path: "/contact", isDropdown: false },
    { title: "Blog", path: "/blog", isDropdown: false },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu"))
        setDropdownState({ isActive: false, idx: null });
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[2147483647] bg-white w-full md:text-sm border-b border-gray-200 shadow-md ${
        state ? "shadow-lg rounded-b-xl md:shadow-none z-[2147483647]" : ""
      }`}
      id="navbar"
    >
      <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8 h-15">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/">
            <img
              src="https://media.licdn.com/dms/image/C561BAQF6Lagk_r1ogg/company-background_10000/0/1613031547817/myfuse_india_cover?e=2147483647&v=beta&t=Jy6m2pU57cbUHWSjR--cfPQ_eSVe9uGPjboD41Nu4yA"
              width={120}
              height={50}
              className="mt-1"
              alt="Float UI logo"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className={location.pathname === item.path ? "active" : ""}>
                {item.isDropdown ? (
                  <div className="relative">
                    <button
                      className="block text-gray-700 hover:text-indigo-600 focus:outline-none"
                      onClick={() =>
                        setDropdownState({
                          isActive: !dropdownState.isActive,
                          idx,
                        })
                      }
                    >
                      {item.title}
                      <FontAwesomeIcon
                        icon={
                          dropdownState.isActive ? faChevronUp : faChevronDown
                        }
                        className="ml-2"
                      />
                    </button>
                    {dropdownState.isActive && dropdownState.idx === idx && (
                      <div className="absolute left-0 mt-2 w-48 py-2 bg-white rounded-md shadow-xl">
                        {item.navs.map((subNavItem, subIdx) => (
                          <a
                            key={subIdx}
                            href={subNavItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subNavItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-gray-700 hover:text-indigo-600"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
            {/* Login and Sign up buttons */}
            <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
              <li>
                <a
                  href="javascript:void(0)"
                  className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                >
                  Log in
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                >
                  Sign in
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
