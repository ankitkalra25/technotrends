
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite';
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
// https://vitejs.dev/config/
return defineConfig({
  plugins: [react()],
})
}
