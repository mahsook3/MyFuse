import React, { useState } from 'react';
import Search from '../assets/svg/Search.svg';
import get from '../assets/svg/get.svg';
import Apply from '../assets/svg/Apply.svg';
import Emphasize from './Emphasize';
const cardData = [
  {
    id: 1,
    title: '1. Search a job',
    subtitle: 'Your dream job may be just a click away!',
    imageUrl: Search
  },
  {
    id: 2,
    title: '2. Apply for job',
    subtitle: 'Your future awaits apply for your dream job now!.',
    imageUrl: Apply
  },
  {
    id: 3,
    title: '3. Get your job',
    subtitle: 'Your future career is just a few clicks away..',
    imageUrl: get
  }
];

export default function HowWorks() {
  const [selectedTab, setSelectedTab] = useState('Resume');

  const tabItems = [
    'Resume',
    'Competitions',
    'Assessments'
  ];

  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 p-10">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-black text-3xl font-semibold sm:text-4xl">
            How it Works
          </h3>
          <p className="mt-3 text-gray-900 mb-5">
            MyFuse is designed to help you discover the right job for you. Myfuse welcomes applicants with no work experience, providing valuable opportunities and resources. Myfuse's straightforward application process is designed to be easy to apply.
          </p>
        </div>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-center dark:bg-black" />

        {/* Container for the cards */}
        <div className="flex justify-center flex-wrap">
  {/* Mapping over cardData to render each card */}
  {cardData.map(card => (
    <div key={card.id} className="group relative m-4 flex h-72 w-96 max-w-xs sm:w-96 sm:max-w-lg rounded-xl shadow-xl ring-gray-900/5">
      {/* Image Container */}
      <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-100 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
        <img
          src={card.imageUrl}
          className="animate-fade-in block h-full w-full scale-100 transform p-10 opacity-100 transition duration-300 group-hover:scale-110"
          alt=""
        />
      </div>

      {/* Text Content Container */}
      <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
        {/* Title */}
        <h1 className="text-2xl font-bold text-black">
          {card.title}
        </h1>
        {/* Subtitle */}
        <h1 className="text-sm font-light text-gray-900">
          {card.subtitle}
        </h1>
      </div>
    </div>
  ))}
</div>

      </div>
      <div className='bg-gray-50'>
<Emphasize />
      </div>
    </>
  );
}
