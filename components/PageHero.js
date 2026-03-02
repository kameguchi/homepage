export default function PageHero({ title, lead }) {
  return (
    <section className="bg-[var(--color-primary)] text-white px-[var(--hero-padding-horizontal)] py-[var(--hero-padding-vertical)] text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bold mb-[0.5em] leading-tight text-[var(--heading-size)] md:text-[var(--heading-size-md)]">{title}</h1>
        <p className="text-base md:text-lg text-[var(--color-sub)]">{lead}</p>
      </div>
    </section>
  );
}
