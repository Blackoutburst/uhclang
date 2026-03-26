"use client"

import { useState } from "react"
import { useCodeTabs } from "./CodeTabsContext"
import {
  CheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline"

const TABS = [
  { key: "uhc", label: "/uhc.png" },
  { key: "cpp", label: "/cpp.png" },
]

export default function CodeTabsClient({ uhcHtml, cppHtml, uhcCode, cppCode }) {
  const { activeLang: active, setActiveLang: setActive } = useCodeTabs()
  const [copied, setCopied] = useState(false)

  function copy() {
    const code = active === "uhc" ? uhcCode : cppCode
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-zinc-800">
      <div className="flex items-center gap-1 px-3 py-2 bg-zinc-900 border-b border-zinc-800">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`cursor-pointer px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              active === tab.key
                ? "bg-zinc-700 text-zinc-100"
                : "text-zinc-500 hover:bg-zinc-700/30"
            }`}
          >
            <img width={20} height={20} src={tab.label} />
          </button>
        ))}

        <button
          onClick={copy}
          aria-label="Copy code"
          className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded-md text-xs text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700/30 transition-colors"
        >
          {copied ? (
            <>
              <CheckIcon className="w-5 h-5" />
            </>
          ) : (
            <ClipboardDocumentIcon className="w-5 h-5"  />
          )}
        </button>
      </div>

      <div
        className="[&>pre]:!m-0 [&>pre]:!rounded-none [&>pre]:!border-0 [&>pre]:p-5 [&>pre]:overflow-x-auto [&>pre]:text-sm"
        dangerouslySetInnerHTML={{
          __html: active === "uhc" ? uhcHtml : cppHtml,
        }}
      />
    </div>
  )
}

