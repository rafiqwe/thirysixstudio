import { useEffect, useRef, useState } from "react";
import canvasImage from "../canvasImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const Canvas = ({ details }) => {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;
  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
    gsap.from(canvasRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = canvasImage[index.value];
    image.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = `${canvas.offsetWidth}px`;
      canvas.style.height = `${canvas.offsetHeight}px`;
      context.scale(scale, scale);
      context.drawImage(image, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
      // Uncomment the line below to draw the image at the full canvas size
      // context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    console.log("canvasImage", canvasImage);
  }, [index]);

  return (
    <>
      <canvas
        data-scroll
        data-scroll-speed={Math.random().toFixed(1)}
        ref={canvasRef}
        className={`absolute`}
        style={{
          width: `${size * 1.2}px`,
          height: `${size * 1.2}px`,
          objectFit: "cover",
          top: `${top}%`,
          left: `${left}%`,
          zIndex: zIndex,
        }}
        id="canvas"
      ></canvas>
    </>
  );
};
