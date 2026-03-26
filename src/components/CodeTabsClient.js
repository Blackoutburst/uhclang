"use client";

import { useCodeTabs } from "./CodeTabsContext";

const TABS = [
  { key: "uhc", label: "/uhc.png" },
  { key: "cpp", label: "/cpp.png" },
];

export default function CodeTabsClient({ uhcHtml, cppHtml }) {
  const { activeLang: active, setActiveLang: setActive } = useCodeTabs();

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-zinc-800">
      <div className="flex items-center gap-1 px-3 py-2 bg-zinc-900 border-b border-zinc-800">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              active === tab.key
                ? "bg-zinc-700 text-zinc-100"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <img width={20} height={20} src={tab.label}/>
          </button>
        ))}
      </div>

      <div
        className="[&>pre]:!m-0 [&>pre]:!rounded-none [&>pre]:!border-0 [&>pre]:p-5 [&>pre]:overflow-x-auto [&>pre]:text-sm"
        dangerouslySetInnerHTML={{
          __html: active === "uhc" ? uhcHtml : cppHtml,
        }}
      />
    </div>
  );
}
