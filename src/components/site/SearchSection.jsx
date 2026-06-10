"use client";

import { useMemo, useState } from "react";
import ProductGrid from "../../components/site/ProductGrid";
import { products } from "../../lib/site";
import { IconSearch } from "../../components/ui/Icons";

export default function SearchSection() {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return products.slice(0, 6);
    return products.filter((product) =>
      [product.name, product.category, product.gender, product.style, product.tone, product.badge]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [query]);

  return (
    <section className="px-4 pb-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[3rem] border border-black/10 bg-white/60 p-5 shadow-soft backdrop-blur-xl md:p-8">
          <label className="flex flex-col gap-4 md:flex-row md:items-center">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink text-cream">
              <IconSearch className="h-6 w-6" />
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search sneakers, heels, runners, formal shoes..."
              className="h-16 flex-1 rounded-[1.5rem] border border-black/10 bg-cream px-5 text-lg font-bold text-ink outline-none transition placeholder:text-smoke focus:border-caramel"
            />
          </label>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {matches.map((product) => (
            <article key={product.id} className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white/65 p-3 shadow-soft transition hover:-translate-y-2">
              <div className="overflow-hidden rounded-[1.55rem] bg-sand">
                <img src={product.image} alt={product.name} className="h-72 w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-4">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-caramel">{product.category} · {product.style}</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-ink">{product.name}</h3>
                <p className="mt-2 text-sm text-smoke">{product.tone}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full bg-caramel/15 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-caramel">{product.badge}</span>
                  <span className="text-2xl font-black text-ink">${product.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {matches.length === 0 && (
          <div className="mt-10 rounded-[2rem] border border-black/10 bg-white/60 p-8 text-center shadow-soft">
            <h2 className="text-3xl font-black tracking-[-0.06em] text-ink">No shoes found.</h2>
            <p className="mt-3 text-smoke">Try searching for sneaker, runner, heel, classic, red, pink, black, or lifestyle.</p>
          </div>
        )}
      </div>
    </section>
  );
}
