import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),

    /* Auto-import hàm (Vue, Pinia, Router, v.v.) ︙ */
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-imports.d.ts', // file khai báo TS sinh tự động
      vueTemplate: true, // cho phép dùng trong <template>
    }),

    /* Auto-import component (.vue) ︙ */
    Components({
      dirs: ['src/components'], // quét toàn bộ atoms/molecules/… bên trong
      extensions: ['vue'],
      deep: true, // quét tất cả cấp con
      dts: 'src/components.d.ts', // sinh file khai báo TS
      resolvers: [
        AntDesignVueResolver({ importStyle: 'less' }), // tự import AntD + style (v5 dùng 'css' hoặc bỏ)
      ],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
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
