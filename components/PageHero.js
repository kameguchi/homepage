export default function PageHero({ title, lead }) {
  return (
    <section className="bg-[var(--color-primary)] text-white px-6 py-[2.6em] md:py-[3em] text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-[0.5em] leading-tight">{title}</h1>
        <p className="text-base md:text-lg text-[var(--color-sub)]">{lead}</p>
      </div>
    </section>
  );
}
