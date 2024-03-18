import * as Tabs from "@radix-ui/react-tabs";
import React, { useState } from 'react';

export default () => {
  const slidesData = [
    {
      id: 1,
      title: "Re-imagine MyFuse",
      subtitle: "Design & Code Competition",
      description: "Design your Future",
      buttonLabel: "Win ₹15,000 reward",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "ongoing",
    },
    {
      id: 2,
      title: "Explore MyFuse",
      subtitle: "Coding Challenge",
      description: "Code your Future",
      buttonLabel: "Win ₹20,000 reward",
      imageUrl: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Innovate with MyFuse",
      subtitle: "Innovation Contest",
      description: "Innovate for the Future",
      buttonLabel: "Win ₹25,000 reward",
      imageUrl: "https://images.unsplash.com/photo-1473186664755-1c495368b58c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "completed",
    },
  ];
  
  const [selectedTab, setSelectedTab] = useState("ongoing");

  const tabItems = ["ongoing", "upcoming", "completed"];

  return (
    <>
                    <div className="max-w-2xl mx-auto text-center">
                      <p className="text-indigo-600">Challenges</p>
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Unleash Your Potential                    </h3>
                    <p className="mt-3">
                    Engage in exhilarating competitions designed to ignite your passion and showcase your skills. Seize the opportunity to stand out and unlock exciting career prospects with MyFuse.






</p>
                </div>
    <Tabs.Root
      className="max-w-screen-xl mt-2 mx-auto px-4 md:px-8"
      value={selectedTab}
      onValueChange={(val) => setSelectedTab(val)}
    >
      <Tabs.List
        className="hidden bg-gray-100 py-1.5 px-2.5 rounded-lg gap-x-3 overflow-x-auto text-sm sm:flex"
        aria-label="Manage your account"
      >
        {tabItems.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className={`py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-indigo-600 hover:bg-white active:bg-white/50 font-medium ${
              selectedTab === item ? 'bg-white text-indigo-600 shadow-sm' : ''
            }`}
            value={item}
          >
            {item}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      
      {slidesData
        .filter((slide) => slide.status === selectedTab)
        .map((slide) => (
          <Tabs.Content key={slide.id} className="py-6" value={slide.status}>
            <div className="container mx-auto">
              <div
                className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
                style={{backgroundImage: `url(${slide.imageUrl})`}}
              >
                <div className="md:w-1/2">
                  <p className="font-bold text-sm uppercase">{slide.title}</p>
                  <p className="text-3xl font-bold">{slide.subtitle}</p>
                  <p className="text-2xl mb-10 leading-none">{slide.description}</p>
                  <a
                    href="#"
                    className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                  >
                    {slide.buttonLabel}
                  </a>
                </div>
              </div>
            </div>
          </Tabs.Content>
        ))}
    </Tabs.Root>
    </>
  );
};
