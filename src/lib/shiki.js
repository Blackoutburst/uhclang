import { createHighlighter } from "shiki";
import { unholycGrammar } from "./unholyc-grammar";

const unholycTheme = {
  name: "unholyc-dark",
  type: "dark",
  colors: {
    "editor.background": "#141417",
    "editor.foreground": "#c8c8c8",
  },
  tokenColors: [
    {
      scope: ["comment", "comment.block", "comment.line"],
      settings: { foreground: "#555555" },
    },
    {
      scope: ["keyword.control"],
      settings: { foreground: "#28A9FF" },
    },
    {
      scope: ["storage.modifier", "keyword.other"],
      settings: { foreground: "#28A9FF" },
    },
    {
      scope: ["storage.type"],
      settings: { foreground: "#E66DFF" },
    },
    {
      scope: ["string.quoted", "string.other.include"],
      settings: { foreground: "#42DD76" },
    },
    {
      scope: ["constant.character.escape"],
      settings: { foreground: "#42DD76" },
    },
    {
      scope: ["constant.numeric"],
      settings: { foreground: "#FF7135" },
    },
    {
      scope: ["constant.other.caps"],
      settings: { foreground: "#ff772e" },
    },
    {
      scope: ["constant.language"],
      settings: { foreground: "#FFB638" },
    },
    {
      scope: ["entity.name.function"],
      settings: { foreground: "#FFB638" },
    },
    {
      scope: ["entity.name.namespace"],
      settings: { foreground: "#ff772e" },
    },
    {
      scope: ["entity.name.type", "entity.name.class"],
      settings: { foreground: "#b9d918" },
    },
    {
      scope: ["keyword.operator"],
      settings: { foreground: "#c8c8c8" },
    },
  ],
};

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

export async function highlight(code, lang) {
  const hl = await getHighlighter();
  return hl.codeToHtml(code.trim(), {
    lang: lang === "uhc" ? "UnholyC" : "cpp",
    theme: "unholyc-dark",
  });
}
