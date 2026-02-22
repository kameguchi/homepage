export default function PageHero({ title, lead }) {
  return (
    <section className="bg-[var(--color-primary)] text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-base md:text-lg text-[var(--color-sub)]">{lead}</p>
      </div>
    </section>
  );
}
