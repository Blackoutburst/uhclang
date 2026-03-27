import GraphicsSidebar from "@/components/GraphicsSidebar"
import { CodeTabsProvider } from "@/components/CodeTabsContext"

export const metadata = {
  title: "Graphics Library — UnholyC",
}

export default function GraphicslibLayout({ children }) {
  return (
    <CodeTabsProvider>
      <div className="flex h-screen overflow-hidden">
        <GraphicsSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="px-10 py-12">{children}</div>
        </main>
      </div>
    </CodeTabsProvider>
  )
}
