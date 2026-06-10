export default function PageIntro({ eyebrow, title, copy }) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-32 md:px-8 md:pt-40">
      <div className="premium-grid absolute inset-0 -z-10 opacity-60" />
      <div className="absolute right-8 top-24 -z-10 h-80 w-80 rounded-full bg-caramel/20 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-caramel">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.08em] text-ink md:text-7xl">{title}</h1>
        {copy && <p className="mt-6 max-w-2xl text-lg leading-8 text-smoke">{copy}</p>}
      </div>
    </section>
  );
}
