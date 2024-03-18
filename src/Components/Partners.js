import React from 'react';

export default function Partners() {
  const images = [
    "https://www.myfuse.in/uploads/logo/Screenshot%202023-09-30%20at%202.06.14%20PM.png",
    "https://www.myfuse.in/uploads/logo/Screenshot%202023-09-30%20at%201.05.00%20PM.png",
    "https://www.myfuse.in/uploads/logo/Screenshot%202023-09-30%20at%202.00.31%20PM.png",
    "https://www.myfuse.in/uploads/logo/Screenshot%202023-09-30%20at%201.25.19%20PM.png",
    "https://www.myfuse.in/uploads/logo/Screenshot%202023-09-30%20at%201.13.43%20PM.png",
    "https://www.myfuse.in/uploads/logo/Screenshot%202023-09-30%20at%201.09.16%20PM.png",
    "https://www.myfuse.in/uploads/logo/Screenshot%202023-09-30%20at%201.06.27%20PM.png"
  ];

  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8  mx-auto">
                    <div className="max-w-2xl mx-auto text-center">
                      <p className="text-indigo-600">Elevate Your Profile</p>
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Discover Our Partnerships                  </h3>
                    <p className="mt-3">
                    Explore our partnerships offer unparalleled opportunities for career advancement and professional growth.














</p>
                </div>
      <div className="overflow-hidden">
        <div className="flex gap-x-6 sm:gap-x-12 lg:gap-x-24 animate-marquee">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              className="py-3 lg:py-5 w-40 sm:w-44 h-auto md:w-28 lg:w-32 mx-auto sm:mx-0"
              src={imageUrl}
              alt={`Logo ${index + 1}`}
            />
          ))}
          {images.map((imageUrl, index) => (
            <img
              key={index + images.length}
              className="py-3 lg:py-5 w-40 sm:w-44 h-auto md:w-28 lg:w-32 mx-auto sm:mx-0"
              src={imageUrl}
              alt={`Logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
