import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins      : [react()],
    optimizeDeps : {
        include : ['@bryntum/gantt', '@bryntum/gantt-react']
    },
    server: {
      hmr: false // Disable Hot Module Reload - it causes gantt to throw errors
    }
});