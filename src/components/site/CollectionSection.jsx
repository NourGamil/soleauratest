import Link from "next/link";
import { collections } from "@/lib/site";
import SectionReveal from "./SectionReveal";
import { IconArrowRight } from "@/components/ui/Icons";

export default function CollectionSection({ compact = false }) {
  return (
    <section className={`px-4 py-20 md:px-8 ${compact ? "pt-32" : ""}`}>
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="reveal-item flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-caramel">Curated capsules</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.07em] text-ink md:text-6xl">Four moods. One premium closet.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-smoke">From polished leather classics to neon streetwear, the old collection pages are now a proper editorial shopping experience.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((item, index) => (
            <Link href={item.href} key={item.title} className={`reveal-item group card-shine relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/60 shadow-soft transition duration-500 hover:-translate-y-2 ${index === 0 ? "md:col-span-2 xl:col-span-1" : ""}`}>
              <img src={item.image} alt={item.title} className="h-80 w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-caramel">{item.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cream/75">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black">Shop edit <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
