"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { brand, heroShoes, stats } from "../../lib/site";
import { IconArrowRight, IconSpark } from "../../components/ui/Icons";

export default function Hero() {
  const root = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-kicker", { y: 20, opacity: 0, duration: 0.55 })
        .from(".hero-title", { y: 44, opacity: 0, duration: 0.8 }, "-=0.25")
        .from(".hero-copy", { y: 28, opacity: 0, duration: 0.7 }, "-=0.35")
        .from(".hero-cta", { y: 22, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.35")
        .from(".hero-card", { scale: 0.9, rotate: -4, opacity: 0, duration: 0.9 }, "-=0.65")
        .from(".hero-stat", { y: 22, opacity: 0, stagger: 0.08, duration: 0.55 }, "-=0.45");
      gsap.to(".floating-shoe", { y: -18, rotate: 2, duration: 2.7, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".hero-orb", { scale: 1.15, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative isolate min-h-screen overflow-hidden px-4 pb-20 pt-32 md:px-8 md:pt-40">
      <div className="absolute left-1/2 top-28 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full hero-orb" />
      <div className="premium-grid absolute inset-0 -z-20 opacity-60" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <div className="hero-kicker inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-smoke shadow-soft backdrop-blur-xl">
            <IconSpark className="h-4 w-4 text-caramel" /> New season drop
          </div>
          <h1 className="hero-title mt-7 max-w-4xl text-balance text-6xl font-black leading-[0.9] tracking-[-0.08em] text-ink sm:text-7xl xl:text-8xl">
            Walk louder without saying a word.
          </h1>
          <p className="hero-copy mt-7 max-w-2xl text-lg leading-8 text-smoke md:text-xl">
            {brand.name} turns the original sneaker store into a premium footwear experience: curated drops, refined materials, fast product discovery, and motion that feels as smooth as the shoes.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/collection" className="hero-cta group inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-black text-cream shadow-soft transition hover:-translate-y-1 hover:bg-caramel hover:text-ink">
              Explore collection <IconArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link href="/men" className="hero-cta inline-flex items-center justify-center rounded-full border border-black/10 bg-white/55 px-7 py-4 text-sm font-black text-ink transition hover:-translate-y-1 hover:bg-white">
              Shop men’s edit
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat rounded-[1.5rem] border border-black/10 bg-white/50 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black tracking-[-0.05em] text-ink">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-smoke">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card relative isolate mx-auto w-full max-w-[36rem]">
          <div className="absolute -left-8 top-16 z-30 hidden rounded-[2rem] bg-ink p-5 text-cream shadow-soft ring-1 ring-white/15 md:block">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/55">Deal</p>
            <p className="mt-1 text-3xl font-black">50%</p>
            <p className="text-sm text-cream/70">limited</p>
          </div>
          <div className="relative z-10 overflow-hidden rounded-[3rem] border border-black/10 bg-white/50 p-4 shadow-soft backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[2.35rem] bg-[#e98317]">
              <img src={heroShoes[active]} alt="Featured SoleAura sneaker" className="floating-shoe h-[28rem] w-full object-cover md:h-[34rem]" />
              <div className="absolute inset-x-5 bottom-5 rounded-[2rem] bg-cream/85 p-5 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-caramel">Today’s hero</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black tracking-[-0.04em] text-ink">Monarch Court Low</h2>
                    <p className="mt-1 text-sm text-smoke">Cream leather · amber interior</p>
                  </div>
                  <p className="text-3xl font-black tracking-[-0.06em] text-ink">$125</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-4 gap-3">
            {heroShoes.map((shoe, index) => (
              <button key={shoe} onClick={() => setActive(index)} className={`overflow-hidden rounded-2xl border p-1 transition ${active === index ? "border-ink bg-ink shadow-soft" : "border-black/10 bg-white/60 hover:-translate-y-1"}`}>
                <img src={shoe} alt="Shoe thumbnail" className="h-20 w-full rounded-xl object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
