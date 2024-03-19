import React, { useState, useEffect } from "react";

const teams = [
  {
    name: "Education",
    description:
      "A collaborative effort of a group to achieve common educational goals in the most effective and efficient way.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80",
  },
  {
    name: "Engineering",
    description:
      "A collaborative effort of engineers to design, develop, and implement solutions to various problems.",
    imageUrl:
      "https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Retail and Consumer",
    description:
      "A collaborative effort within retail and consumer industries to meet market demands and enhance customer satisfaction.",
    imageUrl:
      "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Technology and IT",
    description:
      "A collaborative effort within the technology and IT sector to innovate, develop, and maintain digital solutions.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Travel And Tourism",
    description:
      "A collaborative effort within the travel and tourism industry to provide memorable experiences and facilitate travel.",
    imageUrl:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Health Care",
    description:
      "A collaborative effort within the healthcare sector to promote wellness, treat illnesses, and improve patient outcomes.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1663013549676-1eba5ea1d16e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Transportation",
    description:
      "A collaborative effort within the transportation sector to ensure the efficient movement of goods and people.",
    imageUrl:
      "https://images.unsplash.com/photo-1532330384785-f94c84352e91?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Finance and Banking",
    description:
      "A collaborative effort within the finance and banking industry to manage financial assets, mitigate risks, and provide banking services.",
    imageUrl:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function TopCat() {
  return (
    <>
      <div className="bg-gray-100 p-10">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 ">
          <div className="relative max-w-xl space-y-3 px-4 md:px-0">
            <h3 className="text-indigo-600 font-semibold">Explore</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              TOP CATEGORIES
            </p>
            <div className="max-w-xl">
              <p>
                High-demand job categories feature software development,
                nursing, and digital marketing roles
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {teams.map((team, index) => (
            <div
              key={index}
              className="relative group w-96 h-96 overflow-hidden bg-gray-100 m-4 rounded-lg"
            >
              {" "}
              <img
                className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
                src={team.imageUrl}
                alt={team.name}
              />
              <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0" />
              <div className="absolute bg-gradient-to-t from-indigo-600 w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div className="absolute w-full flex place-content-center">
                  <p className="capitalize  font-bold text-3xl text-center shadow-2xl text-white mt-10">
                    {team.name}
                  </p>
                </div>
                <div className="absolute w-full flex place-content-center mt-20">
                  <p className=" text-center w-4/5 text-white mt-5">
                    {team.description}
                  </p>
                </div>
                <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
