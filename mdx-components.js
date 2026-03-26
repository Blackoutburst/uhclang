import CodeTabs from "@/components/CodeTabs"
import Link from "next/link"
import { AnchorHeading } from "@/components/AnchorHeading"

export function useMDXComponents(components) {
  return {
    CodeTabs,
    h1: (props) => (
      <h1
        className="text-3xl font-bold text-rose-800 mb-6 pb-3 border-b border-zinc-800"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-xl font-semibold text-rose-800 mt-10 mb-3"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-base font-semibold text-zinc-200 mt-6 mb-2"
        {...props}
      />
    ),
    p: (props) => (
      <p className="text-zinc-400 leading-7 mb-4" {...props} />
    ),
    ul: (props) => (
      <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal list-inside text-zinc-400 mb-4 space-y-1" {...props} />
    ),
    li: (props) => <li className="leading-7" {...props} />,
    code: (props) => (
      <code
        className="font-mono text-sm bg-zinc-800 text-rose-300 px-1.5 py-0.5 rounded"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="font-mono text-sm bg-zinc-900 border border-zinc-800 rounded-xl p-5 overflow-x-auto mb-6 text-zinc-300"
        {...props}
      />
    ),
    a: ({ href, ...props }) => (
      <Link
        href={href ?? "#"}
        className="text-uhc text-rose-800 font-bold underline underline-offset-2 hover:text-uhc-subtle transition-colors"
        {...props}
      />
    ),
    H1: ({ id, children }) => (
      <AnchorHeading as="h1" id={id} className="text-3xl font-bold text-rose-800 mb-6 pb-3 border-b border-zinc-800">
        {children}
      </AnchorHeading>
    ),
    H2: ({ id, children }) => (
      <AnchorHeading as="h2" id={id} className="text-xl font-semibold text-rose-800 mt-10 mb-3">
        {children}
      </AnchorHeading>
    ),
    H3: ({ id, children }) => (
      <AnchorHeading as="h3" id={id} className="text-base font-semibold text-zinc-200 mt-6 mb-2">
        {children}
      </AnchorHeading>
    ),
    strong: (props) => <strong className="text-zinc-200 font-semibold" {...props} />,
    hr: () => <hr className="border-zinc-800 my-8" />,
    ...components,
  }
}
