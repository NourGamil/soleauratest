import Link from "next/link";
import { brand, navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-12 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[3rem] border border-black/10 bg-white/55 p-6 shadow-soft backdrop-blur-xl md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr_0.7fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-[1.1rem] bg-ink text-cream"><img src="/images/soleaura-mark.svg" alt="SoleAura mark" className="h-8 w-8" /></span>
              <span className="text-2xl font-black tracking-[-0.06em] text-ink">{brand.name}</span>
            </Link>
            <p className="mt-5 max-w-md text-base leading-7 text-smoke">{brand.tagline}</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-caramel">Pages</h3>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => <Link key={link.href} href={link.href} className="font-bold text-smoke transition hover:text-ink">{link.label}</Link>)}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-caramel">Contact</h3>
            <div className="mt-5 grid gap-3 text-smoke">
              <p>{brand.location}</p>
              <p>{brand.email}</p>
              <p>{brand.phone}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-black/10 pt-6 text-sm font-bold text-smoke md:flex md:items-center md:justify-center">
                    <a
          href="https://nourgamil.github.io/Main-Portfolio/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center gap-[20px]"
          >
            <span className="">Copyright © 2026 Nour</span>
            <div className="flex max-sm:h-[44px] max-sm:w-[44px] h-[54px] w-[54px] items-center justify-center rounded-full border border-[var(--tx1)]/50 bg-[var(--tx1)]/[0.5] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#fdc700]/40 hover:shadow-[0_18px_45px_rgba(253,199,0,0.12)]">
              <img className="max-sm:h-[24px] max-sm:w-[24px] h-[34px] w-[34px]" src="images/favicon.ico" alt="" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
