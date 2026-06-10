import { reviews } from "@/lib/site";
import SectionReveal from "./SectionReveal";
import { IconStar } from "@/components/ui/Icons";

export default function Testimonials() {
  return (
    <section className="px-4 py-20 md:px-8">
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="reveal-item max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-caramel">Customer notes</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] text-ink md:text-6xl">The kind of comfort people actually talk about.</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="reveal-item rounded-[2.5rem] border border-black/10 bg-white/60 p-6 shadow-soft backdrop-blur-xl">
              <div className="flex gap-1 text-caramel">{Array.from({ length: 5 }).map((_, i) => <IconStar key={i} className="h-5 w-5" />)}</div>
              <p className="mt-6 text-lg leading-8 text-ink">“{review.quote}”</p>
              <div className="mt-8 flex items-center gap-4">
                <img src={review.image} alt={review.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-black text-ink">{review.name}</h3>
                  <p className="text-sm text-smoke">{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
