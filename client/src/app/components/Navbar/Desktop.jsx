"use client";
import React from "react";
import Image from "next/image";
import { navItems } from "./data";
import { Signika } from "next/font/google";
import Logo from "@/app/public/Imperium.png";
import Button from "../Button";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useAppContext } from "@/app/hooks/Context";
import Mobile from "./Mobile";

// Load the Google Font
const signika = Signika({
  weight: ["300", "700"],
  subsets: ["latin"],
});

const Desktop = () => {
  const { handleNav, navOpen } = useAppContext();
  return (
    <div className="">
      <div className="grid md:grid-cols-3 md:gap-0 gap-[15rem] grid-cols-2 place-items-center my-4">
        <div className="">
          {/* <Image
            className="w-[50%] rounded-full"
            src={Logo}
            alt="Imperium Logo"
            width={100}
            height={100}
          /> */}
          <h2>DE IMPERIUM</h2>
        </div>
        <div className="md:block hidden">
          <ul
            className={`navItems text-sm flex items-center ${signika.className}`}
          >
            {navItems.map((data, index) => (
              <li key={index} className="px-7">
                <a href={data.path}>{data.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:block hidden">
          <Button font={signika.className} text={"Contact Me"} />
        </div>
        <div className="">
          {navOpen ? (
            <button className="md:hidden block" onClick={handleNav}>
              <MdClose />
            </button>
          ) : (
            <button className="md:hidden block" onClick={handleNav}>
              <GiHamburger size={25}/>
            </button>
          )}
        </div>
      </div>
      {navOpen && <Mobile />}
    </div>
  );
};

export default Desktop;
