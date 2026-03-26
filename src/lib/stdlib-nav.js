export const stdlibNav = [
  {
    label: "IO",
    slug: "io",
    namespaces: [
      {
        label: "File",
        slug: "file",
        methods: [
          { label: "getSize", slug: "getSize" },
          { label: "open", slug: "open" },
          { label: "close", slug: "close" },
          { label: "read", slug: "read" },
        ],
      },
      {
        label: "Log",
        slug: "log",
        methods: [],
      },
    ],
  },
  {
    label: "MATH",
    slug: "math",
    namespaces: [
      { label: "Math", slug: "math", methods: [] },
      { label: "Matrix", slug: "matrix", methods: [] },
      { label: "VectorF", slug: "vectorf", methods: [] },
      { label: "VectorI", slug: "vectori", methods: [] },
    ],
  },
  {
    label: "NETWORK",
    slug: "network",
    namespaces: [
      { label: "TcpClient", slug: "tcpclient", methods: [] },
      { label: "TcpServer", slug: "tcpserver", methods: [] },
    ],
  },
  {
    label: "STD",
    slug: "std",
    namespaces: [
      { label: "Buffer", slug: "buffer", methods: [] },
      { label: "DynamicLibrary", slug: "dynamiclibrary", methods: [] },
      { label: "List", slug: "list", methods: [] },
      { label: "Mutex", slug: "mutex", methods: [] },
      { label: "Thread", slug: "thread", methods: [] },
    ],
  },
];
