import { useEffect, useRef, useState } from "react";
import canvasImage from "../canvasImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const Canvas = ({startIndex}) => {
  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + 150,
      duration: 3,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = canvasImage[index.value];
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
      // context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    console.log("canvasImage", canvasImage);
  }, [index]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="w-[18rem] h-[18rem]"
        id="canvas"
      ></canvas>
    </>
  );
};
