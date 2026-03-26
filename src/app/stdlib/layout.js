import StdlibSidebar from "@/components/StdlibSidebar";

export const metadata = {
  title: "Standard Library — uhclang",
};

export default function StdlibLayout({ children }) {
  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-50 font-sans overflow-hidden">
      <StdlibSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-10 py-12">{children}</div>
      </main>
    </div>
  );
}
