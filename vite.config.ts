import { defineConfig } from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: `/`,
  plugins: [
      VitePWA({
          registerType: 'prompt',
          injectRegister: null,
          srcDir: '',
          filename: 'sw.ts',
          strategies: 'injectManifest',
          includeAssets: [
              'fonts/*',
              'manifest/*',
              'translations/*'
          ],
          injectManifest: {

          },
          manifest: false
      })
  ]
})
