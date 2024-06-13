import react from '@vitejs/plugin-react';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(path.join(__dirname, './src'));
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // components: path.resolve(__dirname, './src'),
      assets: '/src/assets',
      models: '/src/models',
      components: '/src/components',
      layouts: '/src/layouts',
      pages: '/src/pages',
    },
  },
  plugins: [react()],
});
