import { IconArrowRight } from "@/components/ui/Icons";

export default function Newsletter() {
  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[3rem] border border-black/10 bg-ink p-6 text-cream shadow-soft md:p-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-caramel">Early access</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] md:text-6xl">Get the next limited drop before it sells out.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/65">Join the SoleAura list for launch alerts, size restocks, and styling notes.</p>
        </div>
        <form className="rounded-[2rem] bg-cream p-3 shadow-glow sm:flex">
          <input type="email" placeholder="Email address" className="h-14 min-w-0 flex-1 rounded-full bg-transparent px-5 text-ink outline-none placeholder:text-smoke" />
          <button className="mt-3 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-caramel px-6 text-sm font-black text-ink transition hover:bg-ink hover:text-cream sm:mt-0 sm:w-auto">Notify me <IconArrowRight className="h-5 w-5" /></button>
        </form>
      </div>
    </section>
  );
}
