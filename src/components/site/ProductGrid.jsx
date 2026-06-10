"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { products } from "@/lib/site";
import { IconArrowLeft, IconArrowRight, IconCart, IconClose, IconSpark } from "@/components/ui/Icons";
import { useCart } from "@/context/CartContext";

const filters = ["All", "Signature", "Performance", "Classic", "Streetwear", "Evening", "Lifestyle"];

export default function ProductGrid({ title = "The full drop", subtitle = "A more premium version of the original men/women product pages, rebuilt with filters, quick preview, and smooth transitions.", gender = "all", featuredOnly = false }) {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const gridRef = useRef(null);

  const visible = useMemo(() => {
    let list = gender === "all" ? products : products.filter((p) => p.gender === gender || p.gender === "unisex");
    if (featuredOnly) list = list.slice(0, 8);
    if (filter !== "All") list = list.filter((p) => p.category === filter);
    return list;
  }, [filter, gender, featuredOnly]);

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(gridRef.current.querySelectorAll(".product-card"), { y: 22, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.04, ease: "power3.out" });
  }, [visible]);

  const gallery = selected?.gallery || (selected ? [selected.image] : []);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setQty(1);
    setActiveImage(0);
    setAdded(false);
  }, [selected]);

  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-caramel">Shop the edit</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.07em] text-ink md:text-6xl">{title}</h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-smoke">{subtitle}</p>
        </div>

        <div className="no-scrollbar mt-8 flex gap-3 overflow-x-auto pb-3">
          {filters.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`shrink-0 rounded-full border px-5 py-3 text-sm font-black transition ${filter === item ? "border-ink bg-ink text-cream" : "border-black/10 bg-white/60 text-smoke hover:-translate-y-0.5 hover:bg-white hover:text-ink"}`}>
              {item}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((product) => (
            <article key={product.id} className="product-card group overflow-hidden rounded-[2.25rem] border border-black/10 bg-white/65 p-3 shadow-soft backdrop-blur-xl transition duration-500 hover:-translate-y-2">
              <button onClick={() => setSelected(product)} className="relative block w-full overflow-hidden rounded-[1.75rem] bg-sand text-left">
                <img src={product.image} alt={product.name} className="h-72 w-full object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-ink backdrop-blur-xl">{product.badge}</span>
                <span className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-ink text-cream shadow-soft transition group-hover:bg-caramel group-hover:text-ink">
                  <IconArrowRight className="h-5 w-5" />
                </span>
              </button>
              <div className="p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-caramel">{product.category}</p>
                    <h3 className="mt-2 text-xl font-black tracking-[-0.04em] text-ink">{product.name}</h3>
                  </div>
                  <p className="text-xl font-black text-ink">${product.price}</p>
                </div>
                <p className="mt-2 text-sm text-smoke">{product.tone} · {product.style}</p>
                <button onClick={() => setSelected(product)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-black text-cream transition hover:bg-caramel hover:text-ink">
                  <IconCart className="h-4 w-4" /> Quick view
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-ink/70 p-4 backdrop-blur-xl" onClick={() => setSelected(null)}>
          <div className="relative grid max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[2.5rem] bg-cream p-4 shadow-soft lg:grid-cols-[0.9fr_1fr]" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-ink text-cream"><IconClose className="h-5 w-5" /></button>
            <div className="relative overflow-hidden rounded-[2rem] bg-sand">
              <img src={gallery[activeImage] || selected.image} alt={selected.name} className="h-[28rem] w-full object-cover lg:h-full" />
              {gallery.length > 1 && (
                <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
                  <button onClick={() => setActiveImage((v) => (v - 1 + gallery.length) % gallery.length)} className="grid h-11 w-11 place-items-center rounded-full bg-cream text-ink shadow-soft"><IconArrowLeft className="h-5 w-5" /></button>
                  <button onClick={() => setActiveImage((v) => (v + 1) % gallery.length)} className="grid h-11 w-11 place-items-center rounded-full bg-cream text-ink shadow-soft"><IconArrowRight className="h-5 w-5" /></button>
                </div>
              )}
            </div>
            <div className="p-6 md:p-9">
              <div className="inline-flex items-center gap-2 rounded-full bg-caramel/15 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-caramel"><IconSpark className="h-4 w-4" /> {selected.badge}</div>
              <h2 className="mt-6 text-4xl font-black tracking-[-0.07em] text-ink md:text-6xl">{selected.name}</h2>
              <p className="mt-4 text-lg leading-8 text-smoke">{selected.description}</p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <p className="text-4xl font-black text-ink">${selected.price}.00</p>
                {selected.oldPrice && <p className="text-xl font-bold text-smoke line-through">${selected.oldPrice}.00</p>}
                <span className="rounded-full bg-ink px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-cream">{selected.tone}</span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div className="flex h-14 items-center justify-between overflow-hidden rounded-full border border-black/10 bg-white/70 sm:w-40">
                  <button onClick={() => setQty((v) => Math.max(1, v - 1))} className="h-full px-5 text-2xl font-black text-caramel">−</button>
                  <span className="font-black text-ink">{qty}</span>
                  <button onClick={() => setQty((v) => v + 1)} className="h-full px-5 text-2xl font-black text-caramel">+</button>
                </div>
                <button
                  onClick={() => {
                    addToCart(selected.id, qty);
                    setAdded(true);
                  }}
                  className="flex h-14 flex-1 items-center justify-center gap-3 rounded-full bg-ink px-7 text-sm font-black text-cream transition hover:bg-caramel hover:text-ink"
                >
                  <IconCart className="h-5 w-5" /> {added ? "Added to cart" : "Add to cart"}
                </button>
              </div>
              {added && (
                <p className="mt-4 rounded-2xl border border-caramel/25 bg-caramel/10 px-4 py-3 text-sm font-black text-caramel">
                  Added to your cart. Open the cart from the navbar to review it.
                </p>
              )}
              {gallery.length > 1 && (
                <div className="mt-8 grid grid-cols-4 gap-3">
                  {gallery.map((img, i) => <button key={img} onClick={() => setActiveImage(i)} className={`rounded-2xl border p-1 ${activeImage === i ? "border-ink bg-ink" : "border-black/10 bg-white"}`}><img src={img} alt="Gallery thumbnail" className="h-20 w-full rounded-xl object-cover" /></button>)}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
