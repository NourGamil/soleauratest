"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function EditorialBand() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", { xPercent: -50, duration: 18, ease: "none", repeat: -1 });
      gsap.to(".band-shoe", { y: -12, duration: 2.2, ease: "sine.inOut", yoyo: true, repeat: -1, stagger: 0.2 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="overflow-hidden px-4 py-20 md:px-8">
      <div className="dark-panel relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] px-6 py-14 text-cream shadow-soft md:px-12">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-caramel/20 blur-3xl" />
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-caramel">Lookbook energy</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] md:text-6xl">Built for city motion, styled for clean product storytelling.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cream/70">This section replaces flat template blocks with a campaign-like feature area using the original assets. It gives the store more personality without complicating the code.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {["/images/men3.webp", "/images/women6.webp", "/images/men5.webp"].map((img, i) => (
              <img key={img} src={img} alt="SoleAura lookbook" className={`band-shoe h-80 w-full rounded-[2rem] object-cover shadow-glow ${i === 1 ? "translate-y-8" : ""}`} />
            ))}
          </div>
        </div>
        <div className="mt-14 flex whitespace-nowrap text-5xl font-black uppercase tracking-[-0.06em] text-cream/10 md:text-7xl">
          <div className="marquee-track flex gap-8 pr-8">
            {Array.from({ length: 10 }).map((_, i) => <span key={i}>SoleAura · Premium Drops ·</span>)}
          </div>
          <div className="marquee-track flex gap-8 pr-8" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, i) => <span key={i}>SoleAura · Premium Drops ·</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
