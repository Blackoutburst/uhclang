"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { stdlibNav } from "@/lib/stdlib-nav"
import {
  ChevronRightIcon,
} from "@heroicons/react/24/outline"

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
}

function filterTree(tree, query) {
  if (!query.trim()) return tree
  const q = normalize(query)

  return tree
    .map((section) => {
      const sectionMatch = normalize(section.label).includes(q)

      const filteredNamespaces = section.namespaces
        .map((ns) => {
          const nsMatch =
            normalize(ns.label).includes(q) || normalize(ns.slug).includes(q)
          const filteredMethods = ns.methods.filter(
            (m) =>
              normalize(m.label).includes(q) || normalize(m.slug).includes(q)
          )

          if (sectionMatch || nsMatch) return ns
          if (filteredMethods.length > 0)
            return { ...ns, methods: filteredMethods }
          return null
        })
        .filter(Boolean)

      if (sectionMatch) return section
      if (filteredNamespaces.length > 0)
        return { ...section, namespaces: filteredNamespaces }
      return null
    })
    .filter(Boolean)
}

export default function StdlibSidebar() {
  const [query, setQuery] = useState("")
  const pathname = usePathname()
  const searching = query.trim().length > 0

  const tree = useMemo(() => filterTree(stdlibNav, query), [query])

  const [openItems, setOpenItems] = useState(new Set())

  useEffect(() => {
    const parts = pathname.replace("/stdlib", "").split("/").filter(Boolean)
    if (parts.length === 0) return
    setOpenItems((prev) => {
      const next = new Set(prev)
      next.add(parts[0])
      if (parts[1]) next.add(`${parts[0]}/${parts[1]}`)
      return next
    })
  }, [pathname])

  function isOpen(key) {
    if (searching) return true
    return openItems.has(key)
  }

  function toggle(key) {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <aside className="flex flex-col h-full w-60 min-w-[15rem] border-r border-zinc-800 bg-[#1a1c1e]">
      <div className="flex flex-col items-center gap-2 px-5 py-5">
        <Link href="/" className="cursor-pointer text-2xl font-bold tracking-tight text-white">
              <img
                src="/uhc.png"
                width={128}
                height={128}
                alt="UnholyC logo"
              />
        </Link>
        <p className="text-xl font-bold text-rose-800 mt-0.5">Standard Library</p>
      </div>

      <div className="px-3 py-3 border-b border-zinc-800 shrink-0">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search…"
          className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-1.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:border-rose-800 transition-colors"
        />
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3 text-sm">
        {tree.length === 0 && (
          <p className="text-base text-zinc-300 px-2 py-2">No results.</p>
        )}

        {tree.map((section) => {
          const sectionKey = section.slug
          const sectionHref = `/stdlib/${section.slug}`
          const sectionActive = pathname === sectionHref
          const sectionOpen = isOpen(sectionKey)

          return (
            <div key={section.slug} className="mb-0.5">
              <div className="flex items-center gap-1 cursor-pointer">
                {section.namespaces.length > 0 && <button
                  onClick={() => toggle(sectionKey)}
                  className="flex items-center justify-center w-5 h-6 shrink-0 rounded cursor-pointer hover:bg-zinc-800"
                >
                  <ChevronRightIcon className={`w-4 h-4 color-zinc-400 transition duration-100 ${sectionOpen ? "rotate-90" : "rotate-0"}`} open={sectionOpen} />
                </button>}
                <Link
                  href={sectionHref}
                  className={`flex-1 rounded-md px-2 py-1 font-semibold tracking-wide transition-colors ${
                    sectionActive
                      ? "font-bold text-rose-800"
                      : "text-rose-800 hover:text-white"
                  }`}
                >
                  {section.label}
                </Link>
              </div>

              {sectionOpen && (
                <div className="ml-5 mt-0.5">
                  {section.namespaces.map((ns) => {
                    const nsKey = `${section.slug}/${ns.slug}`
                    const nsHref = `/stdlib/${section.slug}/${ns.slug}`
                    const nsActive = pathname === nsHref
                    const nsOpen = isOpen(nsKey)
                    const hasMethods = ns.methods.length > 0

                    return (
                      <div key={ns.slug} className="mb-0.5">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => toggle(nsKey)}
                            className={`flex items-center justify-center w-5 h-6 shrink-0 rounded cursor-pointer hover:bg-zinc-800 ${!hasMethods ? "invisible" : ""}`}
                            tabIndex={hasMethods ? 0 : -1}
                          >
                            <ChevronRightIcon className={`w-4 h-4 color-zinc-400 transition duration-100 ${nsOpen ? "rotate-90" : "rotate-0"}`} open={nsOpen} />
                          </button>
                          <Link
                            href={nsHref}
                            className={`flex-1 rounded-md px-2 py-1 transition-colors ${
                              nsActive
                                ? "font-bold text-zinc-400"
                                : "text-zinc-400 hover:text-zinc-100"
                            }`}
                          >
                            {ns.label}
                          </Link>
                        </div>

                        {hasMethods && nsOpen && (
                          <div className="ml-5 mt-0.5 flex flex-col gap-0.5">
                            {ns.methods.map((method) => {
                              const mHref = `/stdlib/${section.slug}/${ns.slug}#${method.slug}`
                              return (
                                <Link
                                  key={method.slug}
                                  href={mHref}
                                  className="rounded-md px-2 py-1 font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
                                >
                                  {method.label}
                                </Link>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
