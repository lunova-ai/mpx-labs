export default function Services() {
  const items = [
    {
      title: "Custom AI Solutions",
      desc: "Tailored ML models & AI pipelines for industrial systems.",
      color: "border-mpx-aqua",
    },
    {
      title: "Automation Software",
      desc: "High-efficiency workflow automation and optimization tools.",
      color: "border-mpx-blue",
    },
    {
      title: "Data Integration",
      desc: "Seamless connectivity across production & enterprise systems.",
      color: "border-mpx-yellow",
    },
  ];

  return (
    <section id="services" className="py-32 relative bg-mpx-black text-mpx-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-16 text-mpx-aqua">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className={`p-8 border ${item.color} rounded-xl bg-mpx-black/40 backdrop-blur-lg 
              hover:scale-105 hover:border-mpx-white transition transform duration-300`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-mpx-blue">
                {item.title}
              </h3>
              <p className="text-mpx-white/80 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
