import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import { BASENAME } from './src/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  base: "/lamess/", // Set your base URL here

})
