"use client";

import Link from "next/link";
import { IconArrowRight, IconCart, IconClose, IconTruck } from "@/components/ui/Icons";
import { useCart } from "@/context/CartContext";

function money(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

export default function CartSection() {
  const {
    ready,
    items,
    itemCount,
    subtotal,
    delivery,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const freeDeliveryTarget = 150;
  const remainingForFreeDelivery = Math.max(0, freeDeliveryTarget - subtotal);
  const progress = subtotal === 0 ? 0 : Math.min(100, (subtotal / freeDeliveryTarget) * 100);

  return (
    <section className="px-4 pb-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.45fr]">
        <div className="rounded-[3rem] border border-black/10 bg-white/60 p-5 shadow-soft backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-caramel">Shopping cart</p>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.07em] text-ink">
                {itemCount > 0 ? `${itemCount} item${itemCount > 1 ? "s" : ""} selected.` : "Your cart is empty."}
              </h2>
            </div>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-cream">
              <IconCart className="h-6 w-6" />
            </span>
          </div>

          {!ready && (
            <div className="mt-6 rounded-[2rem] bg-cream p-6 text-sm font-bold text-smoke">
              Loading your cart...
            </div>
          )}

          {ready && items.length === 0 && (
            <div className="mt-6 rounded-[2.5rem] bg-cream p-8 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ink text-cream">
                <IconCart className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-3xl font-black tracking-[-0.06em] text-ink">Nothing here yet.</h3>
              <p className="mx-auto mt-3 max-w-md leading-7 text-smoke">
                Open the collection, choose a pair, and press Add to cart from the product preview.
              </p>
              <Link href="/collection" className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-black text-cream transition hover:-translate-y-1 hover:bg-caramel hover:text-ink">
                Shop collection <IconArrowRight className="h-5 w-5" />
              </Link>
            </div>
          )}

          {ready && items.length > 0 && (
            <>
              <div className="mt-6 grid gap-4">
                {items.map((item) => (
                  <article key={item.id} className="grid gap-5 rounded-[2rem] bg-cream p-4 md:grid-cols-[9rem_1fr_auto] md:items-center">
                    <Link href="/collection" className="overflow-hidden rounded-[1.5rem] bg-sand">
                      <img src={item.image} alt={item.name} className="h-40 w-full object-cover transition duration-500 hover:scale-110" />
                    </Link>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-caramel">{item.category} · {item.badge}</p>
                      <h3 className="mt-2 text-2xl font-black tracking-[-0.06em] text-ink md:text-3xl">{item.name}</h3>
                      <p className="mt-2 text-smoke">{item.tone} · {item.style}</p>

                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <div className="flex h-11 items-center overflow-hidden rounded-full border border-black/10 bg-white/70">
                          <button onClick={() => decreaseQuantity(item.id)} aria-label={`Decrease ${item.name} quantity`} className="h-full px-4 text-xl font-black text-caramel transition hover:bg-caramel hover:text-ink">−</button>
                          <span className="min-w-10 text-center text-sm font-black text-ink">{item.quantity}</span>
                          <button onClick={() => increaseQuantity(item.id)} aria-label={`Increase ${item.name} quantity`} className="h-full px-4 text-xl font-black text-caramel transition hover:bg-caramel hover:text-ink">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-smoke transition hover:bg-ink hover:text-cream">
                          <IconClose className="h-4 w-4" /> Remove
                        </button>
                      </div>
                    </div>

                    <div className="text-left md:text-right">
                      <p className="text-sm font-bold text-smoke">{money(item.price)} each</p>
                      <p className="mt-1 text-3xl font-black text-ink">{money(item.lineTotal)}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/collection" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-black text-ink transition hover:-translate-y-1 hover:bg-cream">
                  Continue shopping
                </Link>
                <button onClick={clearCart} className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-black text-smoke transition hover:-translate-y-1 hover:bg-ink hover:text-cream">
                  Clear cart
                </button>
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-black text-cream transition hover:-translate-y-1 hover:bg-caramel hover:text-ink">
                  Ask about sizing <IconArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </>
          )}
        </div>

        <aside className="dark-panel rounded-[3rem] p-6 text-cream shadow-soft md:p-8">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-caramel text-ink"><IconTruck className="h-7 w-7" /></div>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.07em]">Order summary</h2>

          <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.05] p-4">
            <div className="flex justify-between text-xs font-black uppercase tracking-[0.2em] text-cream/55">
              <span>Free delivery</span>
              <span>{subtotal >= freeDeliveryTarget ? "Unlocked" : `${money(remainingForFreeDelivery)} left`}</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-caramel transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="mt-8 grid gap-4 text-sm font-bold text-cream/70">
            <div className="flex justify-between"><span>Items</span><span className="text-cream">{itemCount}</span></div>
            <div className="flex justify-between"><span>Subtotal</span><span className="text-cream">{money(subtotal)}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span className="text-cream">{delivery === 0 ? "Free" : money(delivery)}</span></div>
            <div className="flex justify-between border-t border-white/10 pt-4 text-lg text-cream"><span>Total</span><span>{money(total)}</span></div>
          </div>

          <button disabled={items.length === 0} className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-cream px-7 py-4 text-sm font-black text-ink transition hover:-translate-y-1 hover:bg-caramel disabled:opacity-45 disabled:hover:translate-y-0 disabled:hover:bg-cream">
            Checkout preview <IconArrowRight className="h-5 w-5" />
          </button>
        </aside>
      </div>
    </section>
  );
}
