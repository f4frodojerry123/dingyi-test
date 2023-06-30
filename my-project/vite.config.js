import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
export default defineConfig({
  plugins: [
    vue(),
    Components({
      deep: true,
      dirs: ['src/components'],
      extensions: ['vue'],
      resolvers: [AntDesignVueResolver()],
    })
  ],
})
