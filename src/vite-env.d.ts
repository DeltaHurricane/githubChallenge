/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_GIT_API_BASE_URL: string
  readonly VITE_GIT_TOKEN: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}