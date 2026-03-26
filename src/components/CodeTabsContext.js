"use client"

import { createContext, useContext, useState } from "react"

const CodeTabsContext = createContext(null)

export function CodeTabsProvider({ children }) {
  const [activeLang, setActiveLang] = useState("uhc")
  return (
    <CodeTabsContext.Provider value={{ activeLang, setActiveLang }}>
      {children}
    </CodeTabsContext.Provider>
  )
}

export function useCodeTabs() {
  return useContext(CodeTabsContext)
}
