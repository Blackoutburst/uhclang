import { highlight } from "@/lib/shiki";
import CodeTabsClient from "./CodeTabsClient";

/**
 * Server component – highlights both snippets at build/request time,
 * then hands pre-rendered HTML to the client tab switcher.
 *
 * MDX usage:
 *   <CodeTabs
 *     uhc={`I32 File.getSize(U8* path) { ... }`}
 *     cpp={`int getSize(const char* path) { ... }`}
 *   />
 */
export default async function CodeTabs({ uhc = "", cpp = "" }) {
  const [uhcHtml, cppHtml] = await Promise.all([
    highlight(uhc, "uhc"),
    highlight(cpp, "cpp"),
  ]);

  return <CodeTabsClient uhcHtml={uhcHtml} cppHtml={cppHtml} />;
}
