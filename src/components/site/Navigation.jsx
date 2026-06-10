"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { brand, navLinks, utilityLinks } from "../../lib/site";
import { IconCart, IconClose, IconMenu, IconSearch, IconSpark, IconUser } from "../../components/ui/Icons";
import { useCart } from "../../context/CartContext";

function isActivePath(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -32, opacity: 0, filter: "blur(10px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (!mobileRef.current) return;
    if (open) {
      gsap.fromTo(
        mobileRef.current,
        { y: -24, opacity: 0.2, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.42, ease: "power3.out" }
      );
    }
  }, [open]);

  const iconLinks = [
    { href: "/search", label: "Search", icon: <IconSearch className="h-5 w-5" /> },
    { href: "/account", label: "Account", icon: <IconUser className="h-5 w-5" /> },
    { href: "/cart", label: "Cart", icon: <IconCart className="h-5 w-5" />, count: itemCount, featured: true },
  ];

  return (
    <>
      <header ref={navRef} className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-ink/88 text-cream shadow-soft backdrop-blur-2xl">
          <div className="hidden items-center justify-between border-b border-white/10 px-5 py-2 text-[0.68rem] font-black uppercase tracking-[0.32em] text-cream/55 md:flex">
            <Link href="/new-arrivals" className="inline-flex items-center gap-2 transition hover:text-cream">
              <IconSpark className="h-3.5 w-3.5 text-caramel" /> Limited capsule now live
            </Link>
            <Link href="/cart" className="transition hover:text-cream">Free Cairo delivery over $150</Link>
          </div>

          <nav className="flex items-center justify-between gap-4 px-4 py-3 md:px-5">
            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cream shadow-glow ring-1 ring-white/20 transition group-hover:rotate-[-6deg] group-hover:scale-105">
                <img src="images/icon.svg" alt="SoleAura mark" className="h-8 w-8" />
              </span>
              <span className="leading-none">
                <span className="block text-xl font-black tracking-[-0.06em] text-cream">{brand.name}</span>
                <span className="mt-1 hidden text-[0.65rem] font-black uppercase tracking-[0.34em] text-caramel sm:block">Studio footwear</span>
              </span>
            </Link>

            <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 lg:flex">
              {navLinks.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-4 py-2.5 text-xs font-black uppercase tracking-[0.16em] transition ${active ? "bg-cream text-ink shadow-soft" : "text-cream/58 hover:bg-white/[0.08] hover:text-cream"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              {iconLinks.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-label={item.label}
                    className={`relative hidden h-11 w-11 place-items-center rounded-2xl transition hover:-translate-y-0.5 md:grid ${item.featured ? "bg-caramel text-ink hover:bg-cream" : active ? "bg-cream text-ink" : "border border-white/10 bg-white/[0.07] text-cream hover:bg-white hover:text-ink"}`}
                  >
                    {item.icon}
                    {item.count > 0 && <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-cream px-1 text-[10px] font-black text-ink ring-2 ring-ink">{item.count}</span>}
                  </Link>
                );
              })}
              <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] text-cream transition hover:bg-white hover:text-ink lg:hidden">
                <IconMenu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ink/60 p-4 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
          <aside ref={mobileRef} className="mx-auto mt-2 flex w-full max-w-md flex-col rounded-[2rem] border border-white/10 bg-ink p-5 text-cream shadow-soft" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-cream"><img src="images/soleaura-mark.svg" alt="SoleAura mark" className="h-8 w-8" /></span>
                <span className="text-2xl font-black tracking-[-0.06em]">{brand.name}</span>
              </Link>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-2xl bg-cream text-ink"><IconClose className="h-5 w-5" /></button>
            </div>
            <div className="mt-8 grid gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`rounded-2xl border px-5 py-4 text-lg font-black transition ${isActivePath(pathname, link.href) ? "border-caramel bg-caramel text-ink" : "border-white/10 bg-white/[0.06] text-cream hover:bg-caramel hover:text-ink"}`}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {utilityLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl bg-cream px-3 py-4 text-center text-sm font-black text-ink transition hover:bg-caramel">
                  {link.label}{link.href === "/cart" && itemCount > 0 ? ` (${itemCount})` : ""}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
