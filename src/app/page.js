import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans">
      <main className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center gap-20">
        {/* Logo / Hero */}
        <section className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-6xl font-bold tracking-tight text-white">
            uhc<span className="text-indigo-400">lang</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-md">
            A small, expressive programming language built for clarity and fun.
          </p>
        </section>

        {/* Three blocks */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <FeatureBlock
            title="Language"
            description="Strong static typing, pattern matching, first-class functions, and a clean syntax designed to stay out of your way."
            icon="{ }"
            accent="indigo"
          />
          <FeatureBlock
            title="Std Lib"
            description="A batteries-included standard library covering collections, I/O, strings, math, and concurrency primitives."
            icon="[]"
            accent="violet"
            href="/stdlib"
          />
          <FeatureBlock
            title="Graphic Lib"
            description="A lightweight 2D graphics library for drawing shapes, handling input, and building interactive visual programs."
            icon="▲"
            accent="fuchsia"
          />
        </section>
      </main>
    </div>
  );
}

function FeatureBlock({ title, description, icon, accent, href }) {
  const accentClasses = {
    indigo: {
      border: "border-indigo-500/30 hover:border-indigo-500/60",
      icon: "bg-indigo-500/10 text-indigo-400",
      heading: "text-indigo-400",
    },
    violet: {
      border: "border-violet-500/30 hover:border-violet-500/60",
      icon: "bg-violet-500/10 text-violet-400",
      heading: "text-violet-400",
    },
    fuchsia: {
      border: "border-fuchsia-500/30 hover:border-fuchsia-500/60",
      icon: "bg-fuchsia-500/10 text-fuchsia-400",
      heading: "text-fuchsia-400",
    },
  }[accent];

  const inner = (
    <>
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center font-mono text-sm font-bold ${accentClasses.icon}`}
      >
        {icon}
      </div>
      <h2 className={`text-lg font-semibold ${accentClasses.heading}`}>
        {title}
      </h2>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </>
  );

  const cls = `flex flex-col gap-4 rounded-2xl border bg-zinc-900 p-6 transition-colors ${accentClasses.border}${href ? " cursor-pointer" : ""}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return <div className={cls}>{inner}</div>;
}
