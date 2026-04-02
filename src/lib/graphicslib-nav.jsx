export const graphicslibNav = [
  {
    label: "Index",
    slug: "",
    namespaces: []
  },
  {
    label: "Window",
    slug: "window",
    namespaces: [
      {
        label: "UgWindow",
        slug: "ugwindow",
        methods: [
          { label: "It", slug: "It" },
          { label: "update", slug: "update" },
          { label: "destroy", slug: "destroy" },
          { label: "isMinimized", slug: "isMinimized" },
          { label: "isOpen", slug: "isOpen" },
          { label: "create", slug: "create" },
        ],
      },
    ],
  },
  {
    label: "Core",
    slug: "core",
    namespaces: [
      {
        label: "UgContext",
        slug: "context",
        methods: [
          { label: "It", slug: "It" },
          { label: "create", slug: "create" },
          { label: "destroy", slug: "destroy" },
        ],
      },
      {
        label: "UgInstance",
        slug: "instance",
        methods: [
          { label: "create", slug: "create" },
          { label: "destroy", slug: "destroy" },
        ],
      },
      {
        label: "UgPhysicalDevice",
        slug: "ugphysicaldevice",
        methods: [
          { label: "getProperties", slug: "getProperties" },
          { label: "typeName", slug: "typeName" },
          { label: "hasExtensions", slug: "hasExtensions" },
          { label: "count", slug: "count" },
          { label: "list", slug: "list" },
          { label: "get", slug: "get" },
          { label: "create", slug: "create" },
        ],
      },
      {
        label: "UgQueueFamilies",
        slug: "ugqueuefamilies",
        methods: [
          { label: "count", slug: "count" },
          { label: "hasType", slug: "hasType" },
          { label: "getType", slug: "getType" },
        ],
      },
      {
        label: "UgDevice",
        slug: "ugdevice",
        methods: [
          { label: "It", slug: "It" },
          { label: "getQueue", slug: "getQueue" },
          { label: "getPresentationQueue", slug: "getPresentationQueue" },
          { label: "getSurfaceSupport", slug: "getSurfaceSupport" },
          { label: "destroy", slug: "destroy" },
          { label: "make", slug: "make" },
          { label: "create", slug: "create" },
        ],
      },
      {
        label: "UgBuffer",
        slug: "ugbuffer",
        methods: [
          { label: "It", slug: "It" },
          { label: "create", slug: "create" },
          { label: "upload", slug: "upload" },
          { label: "destroy", slug: "destroy" },
        ],
      },
      {
        label: "UgFrameBuffer",
        slug: "ugframebuffer",
        methods: [
          { label: "It", slug: "It" },
          { label: "destroy", slug: "destroy" },
          { label: "create", slug: "create" },
        ],
      },
      {
        label: "UgUniformBuffer",
        slug: "uguniformbuffer",
        methods: [
          { label: "It", slug: "It" },
          { label: "create", slug: "create" },
          { label: "bind", slug: "bind" },
          { label: "destroy", slug: "destroy" },
          { label: "reset", slug: "reset" },
          { label: "setFloat", slug: "setFloat" },
          { label: "setVec2f", slug: "setVec2f" },
          { label: "setVec3f", slug: "setVec3f" },
          { label: "setVec4f", slug: "setVec4f" },
          { label: "setMat", slug: "setMat" },
        ],
      },
      {
        label: "UgCommandBuffer",
        slug: "ugcommandbuffer",
        methods: [
          { label: "It", slug: "It" },
          { label: "begin", slug: "begin" },
          { label: "end", slug: "end" },
          { label: "destroy", slug: "destroy" },
          { label: "create", slug: "create" },
        ],
      },
      {
        label: "UgCommandPool",
        slug: "commandpool",
        methods: [
          { label: "destroy", slug: "destroy" },
          { label: "create", slug: "create" },
        ],
      },
      {
        label: "UgDescriptorPool",
        slug: "descriptorpool",
        methods: [
          { label: "create", slug: "create" },
          { label: "destroy", slug: "destroy" },
        ],
      },
      {
        label: "UgFence",
        slug: "fence",
        methods: [
          { label: "It", slug: "It" },
          { label: "create", slug: "create" },
          { label: "destroy", slug: "destroy" },
          { label: "wait", slug: "wait" },
          { label: "reset", slug: "reset" },
        ],
      },
      {
        label: "UgSemaphore",
        slug: "semaphore",
        methods: [
          { label: "It", slug: "It" },
          { label: "create", slug: "create" },
          { label: "destroy", slug: "destroy" },
        ],
      },
      {
        label: "UgImageView",
        slug: "ugimageview",
        methods: [
          { label: "It", slug: "It" },
          { label: "create", slug: "create" },
          { label: "destroy", slug: "destroy" },
          { label: "makeView", slug: "makeView" },
        ],
      },
      {
        label: "UgImageLayout",
        slug: "ugimagelayout",
        methods: [
          { label: "transition", slug: "transition" },
        ],
      },
      {
        label: "UgWindowSurface",
        slug: "surface",
        methods: [
          { label: "destroy", slug: "destroy" },
          { label: "create", slug: "create" },
        ],
      },
      {
        label: "UgSwapchain",
        slug: "swapchain",
        methods: [
          { label: "It", slug: "It" },
          { label: "extend", slug: "extend" },
          { label: "update", slug: "update" },
          { label: "destroy", slug: "destroy" },
          { label: "create", slug: "create" },
        ],
      },
      {
        label: "UgShader",
        slug: "ugshader",
        methods: [
          { label: "destroy", slug: "destroy" },
          { label: "create", slug: "create" },
        ],
      },
      {
        label: "UgShaderProgram",
        slug: "ugshaderprogram",
        methods: [
          { label: "It", slug: "It" },
          { label: "createShaderInfo", slug: "createShaderInfo" },
          { label: "create", slug: "create" },
          { label: "destroy", slug: "destroy" },
        ],
      },
      {
        label: "UgRenderPass",
        slug: "renderpass",
        methods: [
          { label: "end", slug: "end" },
          { label: "begin", slug: "begin" },
          { label: "destroy", slug: "destroy" },
          { label: "create", slug: "create" },
        ],
      },
      {
        label: "UgRenderTarget",
        slug: "rendertarget",
        methods: [
          { label: "It", slug: "It" },
          { label: "create", slug: "create" },
          { label: "begin", slug: "begin" },
          { label: "end", slug: "end" },
          { label: "setViewport", slug: "setViewport" },
          { label: "destroy", slug: "destroy" },
        ],
      },
      {
        label: "UgRenderer",
        slug: "renderer",
        methods: [
          { label: "It", slug: "It" },
          { label: "create", slug: "create" },
          { label: "destroy", slug: "destroy" },
          { label: "update", slug: "update" },
          { label: "begin", slug: "begin" },
          { label: "end", slug: "end" },
          { label: "setViewport", slug: "setViewport" },
          { label: "submit", slug: "submit" },
          { label: "present", slug: "present" },
          { label: "aquire", slug: "aquire" },
        ],
      },
      {
        label: "UgPipeline",
        slug: "ugpipeline",
        methods: [
          { label: "createDynamicState", slug: "createDynamicState" },
          { label: "createInputAssembly", slug: "createInputAssembly" },
          { label: "createViewport", slug: "createViewport" },
          { label: "createScissor", slug: "createScissor" },
          { label: "createViewportState", slug: "createViewportState" },
          { label: "createRasterizerState", slug: "createRasterizerState" },
          { label: "createMultisamplingState", slug: "createMultisamplingState" },
          { label: "createColorBlendAttachmentState", slug: "createColorBlendAttachmentState" },
          { label: "createColorBlendState", slug: "createColorBlendState" },
          { label: "destroy", slug: "destroy" },
          { label: "create", slug: "create" },
          { label: "createDepthStencil", slug: "createDepthStencil" },
        ],
      },
      {
        label: "UgPipelineLayout",
        slug: "ugpipelinelayout",
        methods: [
          { label: "remove", slug: "remove" },
          { label: "destroy", slug: "destroy" },
          { label: "create", slug: "create" },
        ],
      },
      {
        label: "UgMaterialPipelineEntry",
        slug: "ugmaterialpipelineentry",
        methods: [
          { label: "It", slug: "It" },
        ],
      },
      {
        label: "UgMaterial",
        slug: "ugmaterial",
        methods: [
          { label: "It", slug: "It" },
          { label: "destroy", slug: "destroy" },
        ],
      },
      {
        label: "UgTexture",
        slug: "ugtexture",
        methods: [
          { label: "It", slug: "It" },
          { label: "create", slug: "create" },
          { label: "createSetLayout", slug: "createSetLayout" },
          { label: "bind", slug: "bind" },
          { label: "destroy", slug: "destroy" },
        ],
      },
      {
        label: "UgSampler",
        slug: "ugsampler",
        methods: [
          { label: "create", slug: "create" },
          { label: "destroy", slug: "destroy" },
        ],
      },
      {
        label: "UgTextureArray",
        slug: "ugtexturearray",
        methods: [
          { label: "It", slug: "It" },
          { label: "create", slug: "create" },
          { label: "bind", slug: "bind" },
          { label: "destroy", slug: "destroy" },
        ],
      },
      {
        label: "UgVertexAttrib",
        slug: "ugvertexattrib",
        methods: [
          { label: "It", slug: "It" },
        ],
      },
      {
        label: "UgVertexDesc",
        slug: "ugvertexdesc",
        methods: [
          { label: "It", slug: "It" },
        ],
      },
      {
        label: "UgVertexSettings",
        slug: "ugvertexsettings",
        methods: [
          { label: "It", slug: "It" },
        ],
      },
    ],
  },
  {
    label: "Debug",
    slug: "debug",
    namespaces: [
      {
        label: "UgLogCallback",
        slug: "logcallback",
        methods: [
          { label: "destroy", slug: "destroy" },
          { label: "getCreateInfo", slug: "getCreateInfo" },
          { label: "create", slug: "create" },
          { label: "logCallback", slug: "logCallback" },
        ],
      },
      {
        label: "UgValidationLayer",
        slug: "validationlayers",
        methods: [
          { label: "count", slug: "count" },
          { label: "get", slug: "get" },
        ],
      },
    ],
  },
  {
    label: "Utils",
    slug: "utils",
    namespaces: [
      {
        label: "UgUtils",
        slug: "ugutils",
        methods: [
          { label: "setClearColor", slug: "setClearColor" },
          { label: "getClearColor", slug: "getClearColor" },
          { label: "findMemoryType", slug: "findMemoryType" },
        ],
      },
    ],
  }
]
