import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
gsap.registerPlugin(ScrollTrigger);
const Features = () => {
  const videoref = useRef();
  useGSAP(() => {
    gsap.to("#explorevideo", {
      scrollTrigger: {
        trigger: "#explorevideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoref.current.play();
      },
    });
    gsap.to("#features_title", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#features_title",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
    });
    gsap.to(".g_grow", {
      scale: 1,
      ease: "power1",
      opacity: 1,
      scrollTrigger: {
        trigger: ".g_grow",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
        scrub: 5.5,
      },
    });
    gsap.to(".g_text", {
      scrollTrigger: {
        trigger: ".g_text",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <section className=" common-padding h-full overflow-hidden  relative">
      <div className=" screen-max-width">
        <div className=" mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
        <div className=" flex flex-col justify-center items-center overflow-hidden">
          <div className=" mt-32 mb-24   pl-24">
            <h2 className=" text-5xl lg:text-7xl">iPhone.</h2>
            <h2 className=" text-5xl lg:text-7xl">Foreged in titanium</h2>
          </div>
          <div className=" flex-center flex-col sm:px-10">
            <div className=" relative h-[50vh] flex items-center w-full">
              <video
                playsInline
                id="explorevideo"
                className=" w-full h-full  object-cover object-center"
                preload="none"
                autoPlay
                muted
                ref={videoref}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="  flex flex-col  w-full relative">
              <div className="feature-video-container">
                <div className=" overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className=" feature-video g_grow"
                  />
                </div>
                <div className=" overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium"
                    className=" feature-video g_grow"
                  />
                </div>
              </div>
              <div className=" feature-text-container">
                <div className=" flex-1 flex-center">
                  <p className=" feature-text g_text">
                    iphone 15 pro is{" "}
                    <span className=" text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    using the same alloy that spacecraft use for mission to Mars
                  </p>
                </div>
                <div className=" flex-1 flex-center">
                  <p className=" feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal making these our{" "}
                    <span className=" text-white">
                      lightest pro models ever.
                    </span>
                    You'll notice the difference the momment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
