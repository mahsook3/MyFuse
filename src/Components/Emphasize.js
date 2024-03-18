import React, { useState } from 'react';
import Resume from './ResumeCheck';
import Assessments from './Assessments';
import Competitions from './Competitions';
import * as Tabs from "@radix-ui/react-tabs";
export default function Emphasize() {

    const [selectedTab, setSelectedTab] = useState('Resume');

    const tabItems = [
      'Resume',
      'Competitions',
      'Assessments'
    ];
  return (
    <>
          <div className="max-w-2xl mx-auto text-center">
                   
                   <p className="">
                   At MyFuse, we've streamlined the journey to your dream career. Here's a glimpse into our seamless process:                    </p>
               </div>
     {/* Tabs Section */}
     <Tabs.Root
       className="max-w-screen-xl mt-2 mx-auto px-4 md:px-8 "
       value={selectedTab}
       onValueChange={(value) => setSelectedTab(value)}
     >
       <Tabs.List
         className="flex gap-x-4 mt-8 bg-gray-100"
         aria-label="Main Navigation"
       >
         {tabItems.map(item => (
           <Tabs.Trigger
             key={item}
             value={item}
             className={`px-4 py-2 rounded-md cursor-pointer text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-gray-400 ${
               selectedTab === item ? 'bg-gray-200' : ''
             }`}
           >
             {item}
           </Tabs.Trigger>
         ))}
       </Tabs.List>
       {tabItems.map(item => (
         <Tabs.Content key={item} value={item}>
           {item === 'Resume' && <Resume />}
           {item === 'Competitions' && <Competitions />}
           {item === 'Assessments' && <Assessments />}
         </Tabs.Content>
       ))}
     </Tabs.Root>
    </>
  )
}
