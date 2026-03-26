import StdlibSidebar from "@/components/StdlibSidebar";
import { CodeTabsProvider } from "@/components/CodeTabsContext";

export const metadata = {
  title: "Standard Library — UnholyC",
};

export default function StdlibLayout({ children }) {
  return (
    <CodeTabsProvider>
      <div className="flex h-screen overflow-hidden">
        <StdlibSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-10 py-12">{children}</div>
        </main>
      </div>
    </CodeTabsProvider>
  );
}
