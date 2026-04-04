export const stdlibNav = [
  {
    label: "Index",
    slug: "",
    namespaces: []
  },
  {
    label: "IO",
    slug: "io",
    namespaces: [
      {
        label: "File",
        slug: "file",
        methods: [
        ],
      },
      {
        label: "Log",
        slug: "log",
        methods: [
          { label: "Level", slug: "Level" },
        ],
      },
    ],
  },
  {
    label: "Math",
    slug: "math",
    namespaces: [
      {
        label: "Math",
        slug: "math",
        methods: [
        ],
      },
      {
        label: "Matrix",
        slug: "matrix",
        methods: [
          { label: "It", slug: "It" },
        ],
      },
      {
        label: "VectorF",
        slug: "vectorf",
        methods: [
        ],
      },
      {
        label: "VectorI",
        slug: "vectori",
        methods: [
          { label: "It", slug: "It" },
        ],
      },
    ],
  },
  {
    label: "Network",
    slug: "network",
    namespaces: [
      {
        label: "TcpClient",
        slug: "tcpclient",
        methods: [
          { label: "It", slug: "It" },
        ],
      },
      {
        label: "TcpServer",
        slug: "tcpserver",
        methods: [
          { label: "It", slug: "It" },
        ],
      },
    ],
  },
  {
    label: "STD",
    slug: "std",
    namespaces: [
      {
        label: "Buffer",
        slug: "buffer",
        methods: [
          { label: "It", slug: "It" },
        ],
      },
      {
        label: "DynamicLibrary",
        slug: "dynamiclibrary",
        methods: [
          { label: "It", slug: "It" },
        ],
      },
      {
        label: "List",
        slug: "list",
        methods: [
          { label: "It", slug: "It" },
          { label: "add", slug: "add" },
          { label: "addAt", slug: "addAt" },
          { label: "remove", slug: "remove" },
          { label: "removeAt", slug: "removeAt" },
          { label: "get", slug: "get" },
          { label: "set", slug: "set" },
          { label: "first", slug: "first" },
          { label: "last", slug: "last" },
          { label: "size", slug: "size" },
          { label: "clear", slug: "clear" },
        ],
      },
      {
        label: "Mutex",
        slug: "mutex",
        methods: [
          { label: "It", slug: "It" },
        ],
      },
      {
        label: "Thread",
        slug: "thread",
        methods: [
          { label: "Fn", slug: "Fn" },
          { label: "It", slug: "It" },
        ],
      },
    ],
  }
]
