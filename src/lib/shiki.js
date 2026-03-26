import { createHighlighter } from "shiki";
import { unholycGrammar } from "./unholyc-grammar";

/**
 * Dark theme whose token colors mirror the lite-xl UnholyC plugin palette.
 * Background matches the site's zinc-950 (#18181b).
 */
const unholycTheme = {
  name: "unholyc-dark",
  type: "dark",
  colors: {
    "editor.background": "#18181b",
    "editor.foreground": "#e4e4e7",
  },
  tokenColors: [
    {
      scope: ["comment", "comment.block", "comment.line"],
      settings: { foreground: "#52525b" },
    },
    {
      // Control flow keywords
      scope: ["keyword.control"],
      settings: { foreground: "#c084fc" },
    },
    {
      // Storage / declaration keywords
      scope: ["storage.modifier", "keyword.other"],
      settings: { foreground: "#c084fc" },
    },
    {
      // Built-in types (void, int, U8, I32 …)
      scope: ["storage.type"],
      settings: { foreground: "#22d3ee" },
    },
    {
      scope: ["string.quoted", "string.other.include"],
      settings: { foreground: "#86efac" },
    },
    {
      scope: ["constant.character.escape"],
      settings: { foreground: "#fbbf24" },
    },
    {
      scope: ["constant.numeric"],
      settings: { foreground: "#fb923c" },
    },
    {
      // SCREAMING_SNAKE_CASE constants
      scope: ["constant.other.caps"],
      settings: { foreground: "#fb923c" },
    },
    {
      scope: ["constant.language"],
      settings: { foreground: "#fbbf24" },
    },
    {
      scope: ["entity.name.function"],
      settings: { foreground: "#60a5fa" },
    },
    {
      // Namespace qualifier (orange – exact from lite-xl plugin)
      scope: ["entity.name.namespace"],
      settings: { foreground: "#ff772e" },
    },
    {
      // Struct / PascalCase types (lime – exact from lite-xl plugin)
      scope: ["entity.name.type", "entity.name.class"],
      settings: { foreground: "#b9d918" },
    },
    {
      scope: ["keyword.operator"],
      settings: { foreground: "#a1a1aa" },
    },
  ],
};

// Module-level singleton promise – created once per process.
let _highlighter = null;

export async function getHighlighter() {
  if (!_highlighter) {
    _highlighter = createHighlighter({
      themes: [unholycTheme],
      langs: ["cpp", unholycGrammar],
    });
  }
  return _highlighter;
}

/**
 * Highlight a code string and return the rendered HTML.
 * @param {string} code
 * @param {"cpp"|"uhc"} lang
 */
export async function highlight(code, lang) {
  const hl = await getHighlighter();
  return hl.codeToHtml(code.trim(), {
    lang: lang === "uhc" ? "UnholyC" : "cpp",
    theme: "unholyc-dark",
  });
}
