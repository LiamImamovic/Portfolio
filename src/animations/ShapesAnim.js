import gsap from "gsap";
import { useEffect } from "react";

export const ShapesAnim = () => {
  useEffect(() => {
    const shapes = document.querySelectorAll(".shape");
    const tl = gsap.timeline();

    gsap.set(shapes, { transformOrigin: "50% 50%", scale: 0, opacity: 0 });

    shapes.forEach((shape) => {
      tl.to(shape, {
        scale: 1,
        opacity: 0.6,
        duration: 0.3,
        ease: "power1.in",
      });
    });
  }, []);
};
