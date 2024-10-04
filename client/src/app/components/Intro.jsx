import React from "react";
import { Jacquarda_Bastarda_9 } from "next/font/google";
import Button from "./Button";

// Load Google Font
const Jacquarda = Jacquarda_Bastarda_9({
  weight: ["400"],
  subsets: ["latin"],
});

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <h1
        className={`md:text-5xl text-4xl px-2 ${Jacquarda.className} capitalize my-10 text-center`}
      >
        Software engineer, technical writer & Product Designer
      </h1>
      <div className="md:my-10">
        <Button text={"Download Resume"} />
      </div>

      {/* GitHub Contributions Graph */}
      <div className="mt-20 w-full md:max-w-3xl"> {/* Set a max width for larger screens */}
        <img
          className="w-full h-auto px-5" // Full width and auto height for responsive design
          src="https://github-readme-activity-graph.vercel.app/graph?username=inuEnike&theme=react-dark"
          alt="GitHub Contributions Graph"
        />
      </div>
    </div>
  );
};

export default Intro;
