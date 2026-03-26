"use client";

import { useState } from "react";

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="w-4 h-4"
      fill="currentColor"
    >
      <path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0z" />
    </svg>
  );
}

export function AnchorHeading({ as: Tag, id, className, children }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
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
          <span className="text-xs font-sans font-normal text-zinc-400">
            Copied!
          </span>
        ) : (
          <LinkIcon />
        )}
      </button>
    </Tag>
  );
}
