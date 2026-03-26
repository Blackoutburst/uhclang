import { highlight } from "@/lib/shiki"
import CodeTabsClient from "./CodeTabsClient"

export default async function CodeTabs({ uhc = "", cpp = "" }) {
  const [uhcHtml, cppHtml] = await Promise.all([
    highlight(uhc, "uhc"),
    highlight(cpp, "cpp"),
  ])

  return (
    <CodeTabsClient
      uhcHtml={uhcHtml}
      cppHtml={cppHtml}
      uhcCode={uhc.trim()}
      cppCode={cpp.trim()}
    />
  )
}
