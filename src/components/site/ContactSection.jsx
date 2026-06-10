import { brand } from "@/lib/site";
import { IconArrowRight } from "@/components/ui/Icons";

export default function ContactSection() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1fr]">
        <div className="dark-panel rounded-[3rem] p-8 text-cream shadow-soft md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-caramel">Talk to us</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] md:text-6xl">Need help picking the right pair?</h2>
          <p className="mt-6 text-lg leading-8 text-cream/70">Tell us your size, style, budget, and event. We’ll recommend the best SoleAura capsule.</p>
          <div className="mt-10 grid gap-4 text-cream/80">
            <p><span className="font-black text-cream">Email:</span> {brand.email}</p>
            <p><span className="font-black text-cream">Phone:</span> {brand.phone}</p>
            <p><span className="font-black text-cream">Studio:</span> {brand.location}</p>
          </div>
        </div>
        <form className="rounded-[3rem] border border-black/10 bg-white/60 p-6 shadow-soft backdrop-blur-xl md:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-ink">Name<input className="h-14 rounded-2xl border border-black/10 bg-cream px-4 font-medium outline-none focus:border-caramel" placeholder="Your name" /></label>
            <label className="grid gap-2 text-sm font-black text-ink">Email<input type="email" className="h-14 rounded-2xl border border-black/10 bg-cream px-4 font-medium outline-none focus:border-caramel" placeholder="you@email.com" /></label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-black text-ink">Topic<select className="h-14 rounded-2xl border border-black/10 bg-cream px-4 font-medium outline-none focus:border-caramel"><option>Product recommendation</option><option>Order support</option><option>Partnership</option></select></label>
          <label className="mt-5 grid gap-2 text-sm font-black text-ink">Message<textarea className="min-h-36 rounded-2xl border border-black/10 bg-cream p-4 font-medium outline-none focus:border-caramel" placeholder="Tell us what you need..." /></label>
          <button className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-black text-cream transition hover:bg-caramel hover:text-ink sm:w-auto">Send message <IconArrowRight className="h-5 w-5" /></button>
        </form>
      </div>
    </section>
  );
}
