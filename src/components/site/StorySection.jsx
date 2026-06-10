import Link from "next/link";
import { benefits, brand } from "@/lib/site";
import SectionReveal from "./SectionReveal";
import { IconArrowRight, IconShield, IconSpark, IconTruck } from "@/components/ui/Icons";

export default function StorySection({ page = false }) {
  return (
    <section className={`px-4 py-20 md:px-8 ${page ? "pt-32" : ""}`}>
      <SectionReveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <div className="reveal-item relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-caramel/20 blur-3xl" />
          <div className="grid gap-4 sm:grid-cols-2">
            <img src="/images/collection1.webp" alt="Premium leather shoes" className="h-80 w-full rounded-[2.5rem] object-cover shadow-soft sm:translate-y-10" />
            <img src="/images/collection4.webp" alt="Premium street sneakers" className="h-80 w-full rounded-[2.5rem] object-cover shadow-soft" />
          </div>
          <div className="absolute bottom-6 left-6 rounded-[2rem] bg-cream/90 p-5 shadow-soft backdrop-blur-xl">
            <p className="text-3xl font-black tracking-[-0.06em] text-ink">Since 2026</p>
            <p className="mt-1 text-sm font-bold text-smoke">Designed like a boutique. Built like a store.</p>
          </div>
        </div>

        <div className="reveal-item">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-caramel">About the rebuild</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] text-ink md:text-6xl">From simple shoe pages to a premium retail experience.</h2>
          <p className="mt-6 text-lg leading-8 text-smoke">
            The original project had a nice idea: product gallery, men’s and women’s categories, collections, sign-in, and contact. I rebuilt that idea into {brand.name}: smoother navigation, cleaner product data, better responsive layouts, polished cards, and GSAP movement.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <div key={item} className="rounded-[1.5rem] border border-black/10 bg-white/55 p-4 shadow-soft backdrop-blur-xl">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-ink text-cream">
                  {index % 3 === 0 ? <IconSpark className="h-5 w-5" /> : index % 3 === 1 ? <IconShield className="h-5 w-5" /> : <IconTruck className="h-5 w-5" />}
                </div>
                <p className="font-black text-ink">{item}</p>
              </div>
            ))}
          </div>
          <Link href="/collection" className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-black text-cream transition hover:-translate-y-1 hover:bg-caramel hover:text-ink">
            Browse the full edit <IconArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </SectionReveal>
    </section>
  );
}
