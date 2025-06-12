import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
   css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // tuỳ biến token Ant Design
        modifyVars: {
          'primary-color': '#1677ff',
          'border-radius-base': '8px',
        },
      },
    },
  },
})
function AutoImport(arg0: { imports: string[]; dts: string; vueTemplate: boolean }): import("vite").PluginOption {
  throw new Error('Function not implemented.')
}

function Components(arg0: { dts: string; dirs: string[]; resolvers: any[] }): import("vite").PluginOption {
  throw new Error('Function not implemented.')
}

