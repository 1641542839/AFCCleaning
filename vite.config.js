import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import copy from 'rollup-plugin-copy'

//https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        cleaningService: './cleaningService.html',
        contactUs: './contactUs.html',
        aboutUs: './aboutUs.html'
        // ...
        // List all files you want in your build
      }
    }
  }
})

