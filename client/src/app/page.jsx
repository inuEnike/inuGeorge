import Image from "next/image";
import Intro from "./components/Intro";
import Index from "./components/Navbar/Index";
import { AppContextProvider } from "./hooks/Context";
import myPisure from "@/app/public/myPisure.png";

export default function Home() {
  return (
    <div className="">
      <AppContextProvider>
        <Index />
      </AppContextProvider>
      <Intro />
      <div className="my-5">
        <h2 className="text-xl text-center">About</h2>
        <div className="grid md:grid-cols-2 justify-center place-items-center items-center">
          <div className="text p-5">
            <h2 className="text-2xl font-bold mb-2">Title</h2>
            <h3 className="text-xl mb-3">Sub Title</h3>
            <p className="text-base leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              sapiente dicta doloribus debitis impedit, assumenda aspernatur ex
              alias eaque nostrum magni suscipit. Nostrum sequi nulla, dolorem
              repellendus cum, ad vero delectus quidem nihil excepturi recusandae
              magnam id sapiente voluptatibus labore quos at? Tempore repellendus
              amet cumque, quam et dignissimos distinctio rem.
            </p>
          </div>
          
          {/* Image Section with Outline */}
          <div className="relative flex justify-center items-center">
            <div className="outline outline-2 outline-orange-500 p-2 relative w-[80%] ">
              <Image
                alt="Inu Enike"
                className="rounded-lg -z-40 -mt-5 md:-mt-10" // Adjust negative margin for pop-out effect
                src={myPisure}
                width={600}
                height={600}
                layout="responsive" // Keeps the image responsive
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
