"use client"

import { useState } from "react"
import {
  CheckIcon,
  LinkIcon,
} from "@heroicons/react/24/outline"


export function AnchorHeading({ as: Tag, id, className, children }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    const url = `${window.location.origin}${window.location.pathname}#${id}`
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <Tag id={id} className={`group flex items-center gap-2 ${className}`}>
      {children}
      <button
        onClick={copy}
        aria-label="Copy link"
        className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500 hover:text-zinc-300"
      >
        {copied ? (
          <CheckIcon className="w-5 h-5" />
        ) : (
          <LinkIcon className="w-5 h-5" />
        )}
      </button>
    </Tag>
  )
}
