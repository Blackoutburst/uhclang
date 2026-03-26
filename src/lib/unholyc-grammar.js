/**
 * TextMate grammar for UnholyC (.uhc / .uhh)
 * Translated from the lite-xl language_unholyc.lua plugin.
 * Uses Oniguruma regex (via vscode-textmate / Shiki).
 */
export const unholycGrammar = {
  name: "UnholyC",
  scopeName: "source.uhc",
  fileTypes: ["uhc", "uhh"],
  patterns: [
    { include: "#comment" },
    { include: "#preprocessor" },
    { include: "#string" },
    { include: "#namespace-decl" },
    { include: "#struct-decl" },
    { include: "#number" },
    { include: "#namespace-usage" },
    { include: "#function-call" },
    { include: "#screaming-snake" },
    { include: "#dot-type" },
    { include: "#underscore-t" },
    { include: "#pointer" },
    { include: "#operator" },
    { include: "#keyword" },
    { include: "#pascal-case" },
  ],
  repository: {
    comment: {
      patterns: [
        {
          name: "comment.line.double-slash.uhc",
          match: "//.*$",
        },
        {
          name: "comment.block.uhc",
          begin: "/\\*",
          end: "\\*/",
        },
      ],
    },

    preprocessor: {
      patterns: [
        {
          // #include <...> or #include "..."
          match: "(#\\s*include)(\\s*)(<[^>]*>|\"[^\"]*\")",
          captures: {
            1: { name: "keyword.other.preprocessor.uhc" },
            3: { name: "string.other.include.uhc" },
          },
        },
        {
          name: "keyword.other.preprocessor.uhc",
          match: "#\\s*[a-zA-Z_]\\w*",
        },
      ],
    },

    string: {
      patterns: [
        {
          name: "string.quoted.double.uhc",
          begin: '"',
          end: '"',
          patterns: [{ name: "constant.character.escape.uhc", match: "\\\\." }],
        },
        {
          name: "string.quoted.single.uhc",
          begin: "'",
          end: "'",
          patterns: [{ name: "constant.character.escape.uhc", match: "\\\\." }],
        },
      ],
    },

    number: {
      patterns: [
        {
          name: "constant.numeric.hex.uhc",
          match: "\\b0[xX][0-9a-fA-F]+[uUlL]*\\b",
        },
        {
          name: "constant.numeric.float.uhc",
          match: "\\b\\d+\\.\\d*([eEfF][+\\-]?\\d+)?[fFlLuU]*\\b",
        },
        {
          name: "constant.numeric.float.uhc",
          match: "\\.\\d+([eEfF][+\\-]?\\d+)?[fFlLuU]*\\b",
        },
        {
          name: "constant.numeric.integer.uhc",
          match: "\\b\\d+[fFlLuU]*\\b",
        },
      ],
    },

    // "namespace Foo" – keyword + namespace name
    "namespace-decl": {
      match: "\\b(namespace)(\\s+)([a-zA-Z_]\\w*)",
      captures: {
        1: { name: "keyword.other.uhc" },
        3: { name: "entity.name.namespace.uhc" },
      },
    },

    // "struct/union/enum Foo" – keyword + type name
    "struct-decl": {
      match: "\\b(struct|union|enum)(\\s+)([a-zA-Z_]\\w*)",
      captures: {
        1: { name: "keyword.other.uhc" },
        3: { name: "entity.name.type.uhc" },
      },
    },

    // PascalCase before a dot: "File.open" → "File" is namespace
    "namespace-usage": {
      match: "\\b[A-Z][a-zA-Z0-9_]*(?=\\.)",
      name: "entity.name.namespace.uhc",
    },

    // identifier before ( → function call
    "function-call": {
      match: "\\b[a-zA-Z_]\\w*(?=\\s*\\()",
      name: "entity.name.function.uhc",
    },

    // SCREAMING_SNAKE_CASE – must have at least one underscore
    "screaming-snake": {
      match: "\\b[A-Z][A-Z0-9]*_[A-Z0-9_]*\\b",
      name: "constant.other.caps.uhc",
    },

    // PascalCase types not already caught above
    "pascal-case": {
      match: "\\b[A-Z][a-zA-Z0-9_]*\\b",
      name: "entity.name.type.uhc",
    },

    // After a dot: uppercase identifier (e.g. File.It)
    "dot-type": {
      match: "(?<=\\.)[A-Z][a-zA-Z0-9_]*\\b",
      name: "entity.name.type.uhc",
    },

    // _t suffix types (pthread_t, uint32_t …)
    "underscore-t": {
      match: "\\b[a-zA-Z_]\\w*_t\\b",
      name: "storage.type.uhc",
    },

    // * as pointer declarator / dereference — same scope as C++ so it inherits
    // the storage.modifier purple from the theme
    pointer: {
      name: "storage.modifier.pointer.uhc",
      match: "\\*",
    },

    operator: {
      name: "keyword.operator.uhc",
      match: "::|[+\\-/^%=<>!~|&?:.\\[\\]{},;]",
    },

    keyword: {
      patterns: [
        {
          // Control flow
          name: "keyword.control.uhc",
          match:
            "\\b(if|else|for|while|do|switch|case|default|break|continue|return|goto)\\b",
        },
        {
          // Storage / qualifiers / declaration keywords
          name: "storage.modifier.uhc",
          match:
            "\\b(static|extern|inline|volatile|const|register|auto|constexpr|mutable|explicit|virtual|override|final|struct|union|enum|class|typedef|namespace|lambda|unused|template|typename|using|sizeof|alignof|decltype|new|delete|operator|public|private|protected|friend)\\b",
        },
        {
          // Built-in types: standard C + HolyC
          name: "storage.type.uhc",
          match:
            "\\b(void|int|char|short|long|float|double|unsigned|signed|bool|size_t|ptrdiff_t|intptr_t|uintptr_t|U0|U8|U16|U32|U64|I8|I16|I32|I64|F32|F64|F128)\\b",
        },
        {
          // Literals
          name: "constant.language.uhc",
          match: "\\b(true|false|NULL|nullptr|TRUE|FALSE)\\b",
        },
      ],
    },
  },
};
