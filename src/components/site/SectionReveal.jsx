"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionReveal({ children, className = "", stagger = 0.08 }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal-item", { y: 34, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
      });
    }, ref);
    return () => ctx.revert();
  }, [stagger]);

  return <div ref={ref} className={className}>{children}</div>;
}
