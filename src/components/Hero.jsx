import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo);
    } else {
      setvideoSrc(heroVideo);
    }
  };
  // attaching this to the useeffct
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    // removing the eventlistner in react as it is important in react
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);
  return (
    <section className=" w-full  nav-height bg-black relative">
      <div className=" h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 16 Pro
        </p>
        <div className=" md:w-10/12 w-9/12">
          <video
            className=" pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className=" flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn ">
          Buy
        </a>
        <p className=" font-normal text-xl">
          From &#8377; 3000/month or &#8377; 1,30,000{" "}
        </p>
      </div>
    </section>
  );
};

export default Hero;
