import React from 'react';
import { navItems } from './data';
import { Signika } from "next/font/google";

// Load the Google Font
const signika = Signika({
  weight: ["300", "700"],
  subsets: ["latin"],
});

const Mobile = () => {
//   const { navOpen } = useAppContext(); // Destructure navOpen from context
  return (
    <div className="md:hidden block">
      <div className="flex justify-center flex-col items-center w-full h-[50vh]">
        <ul className={`navItems text-sm flex items-center flex-col ${signika.className} text-center`}>
          {navItems.map((data, index) => (
            <li key={index} className="py-10">
              <a href={data.path}>{data.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
