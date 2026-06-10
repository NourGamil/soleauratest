import Link from "next/link";
import { IconArrowRight, IconShield } from "../../components/ui/Icons";

export default function AuthSection() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <form className="rounded-[3rem] border border-black/10 bg-white/60 p-6 shadow-soft backdrop-blur-xl md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-caramel">Returning customer</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] text-ink md:text-5xl">Sign in to your SoleAura account.</h2>
          <label className="mt-8 grid gap-2 text-sm font-black text-ink">Email address<input type="email" className="h-14 rounded-2xl border border-black/10 bg-cream px-4 outline-none focus:border-caramel" /></label>
          <label className="mt-5 grid gap-2 text-sm font-black text-ink">Password<input type="password" className="h-14 rounded-2xl border border-black/10 bg-cream px-4 outline-none focus:border-caramel" /></label>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/contact" className="text-sm font-black text-smoke underline decoration-caramel/50 underline-offset-4 hover:text-ink">Forgot password?</Link>
            <button className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-black text-cream transition hover:bg-caramel hover:text-ink">Sign in <IconArrowRight className="h-5 w-5" /></button>
          </div>
        </form>
        <div className="dark-panel rounded-[3rem] p-8 text-cream shadow-soft md:p-10">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-caramel text-ink"><IconShield className="h-7 w-7" /></div>
          <h2 className="mt-8 text-4xl font-black tracking-[-0.07em] md:text-5xl">New here? Create a closet profile.</h2>
          <p className="mt-5 text-lg leading-8 text-cream/70">Save your preferred sizes, track orders, manage returns, and get early access to limited releases.</p>
          <div className="mt-8 grid gap-3 text-cream/80">
            <p>• Personal product recommendations</p>
            <p>• Drop alerts and restock tracking</p>
            <p>• Faster checkout and support</p>
          </div>
          <button className="mt-8 rounded-full bg-cream px-7 py-4 text-sm font-black text-ink transition hover:-translate-y-1 hover:bg-caramel">Create account</button>
        </div>
      </div>
    </section>
  );
}
