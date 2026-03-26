import Link from "next/link";
import {
  CodeBracketIcon,
  BookOpenIcon,
  CubeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <main className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center gap-20">
        <section className="flex flex-col items-center gap-4 text-center">
          <div className="flex gap-4 items-center">
            <img src="/uhc.png" width={100} height={100} />
            <h1 className="text-6xl font-bold tracking-tight text-white">
              UnholyC
            </h1>
          </div>
          <p className="text-zinc-400 text-lg max-w-md">
            UnholyC is a custom dialect transpiled to C++ which mean it has
            perfect interop with C and C++
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <FeatureBlock
            title="Language feature"
            description="Take a look at UnholyC features"
            icon={CodeBracketIcon}
          />
          <FeatureBlock
            title="Std Lib"
            description="Complete documentation of the UnholyC std lib"
            icon={BookOpenIcon}
            href="/stdlib"
          />
          <FeatureBlock
            title="Graphic Lib"
          description="Complete documentation of UnholyC grapgics library"
            icon={CubeIcon}
          />
          <FeatureBlock
            title="Tools"
            description="UnholyC tools and more"
            icon={WrenchScrewdriverIcon}
          />
        </section>
      </main>
    </div>
  );
}

function FeatureBlock({ title, description, icon: Icon, href }) {
  const inner = (
    <>
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center text-rose-800 transition-colors group-hover:text-rose-300 duration-300`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <h2 className={`text-lg font-semibold`}>
        {title}
      </h2>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </>
  );

  const cls = `group flex flex-col gap-4 rounded-2xl border border-rose-800 bg-[#1a1c1e] p-6 transition-colors cursor-pointer hover:border-rose-300 duration-300`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return <div className={cls}>{inner}</div>;
}
