import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Components/canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const spanRef = useRef(null);
  const handleHeading = (e) => {
    // console.log( e.clientY);
    console.log(e);
    
    setShowCanvas(!showCanvas);
    // gsap.set(spanRef.current, {
    //   top: e.clientY,
    //   left: e.clientX,
    // });
    // gsap.to(spanRef.current, {
    //   duration: 0.1,
    //   scale: 1000,
    //   ease: "power2.inOut",
    // });
  };


  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    handleHeading();
  }, []);
  return (
    <>
      <span ref={spanRef} className=" w-4 h-4 block bg-red-500"></span>
      <div className="w-full min-h-screen bg-black  relative text-white font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[0].map((canvasItem, canvasIndex) => {
            return <Canvas key={canvasIndex} details={canvasItem} />;
          })}
        <div className="w-full h-screen relative z-[1]   text-white  ">
          <nav className=" w-full py-4">
            <div className="container mx-auto px-4">
              <ul className="flex items-center justify-between gap-8">
                <div className="brend text-2xl font-bold">thitysixstudio</div>
                <div className="link flex gap-10">
                  {["Home", "About", "Projects", "Contact"].map(
                    (link, index) => (
                      <li key={index}>
                        <a
                          href={`#${link.toLowerCase()}`}
                          className="text-white/70 text-md hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    )
                  )}
                </div>
              </ul>
            </div>
          </nav>
          <div className="px-[20%] text-container w-full">
            <div className="text w-[40%] ">
              <h3 className="text-3xl leading-[1.4]">
                At Thirtysixstudio, we build digital assets and immersive
                experiences for purposeful brands
              </h3>
              <p className="text-md w-[80%] mt-10 font-md">
                We're a boutique production studio focused on design, animation,
                and technology, constantly rethinking what digital craft can do
                for present-day ads and campaigns.
              </p>
              <p className="mt-10 text-md">scroll </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-20 ">
            <h1
              onClick={handleHeading}
              className="text-[15rem] font-normal tracking-tighter leading-none"
            >
              Thirtysixstudio
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full text-white relative z-[1] mt-52 h-screen px-10 relative ">
        {showCanvas &&
          data[1].map((canvasItem, canvasIndex) => {
            return <Canvas key={canvasIndex} details={canvasItem} />;
          })}
        <div className="relative z-[1">
          <h1 className="text-8xl">About this brand</h1>
          <p className="text-lg leading-[1.8] w-[80%] mt-10 font-light">
            We're a boutique production studio focused on design, animation, and
            technology, constantly rethinking what digital craft can do for
            present-day ads and campaigns.
          </p>
        </div>
      </div>
    </>
  );
}
