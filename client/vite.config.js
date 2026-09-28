import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    proxy: { '/api': 'http://127.0.0.1:5050' }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('departmentsData.js')) {
            return 'data-departments';
          }
          if (id.includes('curriculumData.js')) {
            return 'data-curriculum';
          }
          if (id.includes('accreditationData.js') || id.includes('coeData.js')) {
            return 'data-compliance';
          }
          if (id.includes('placementPortal.js') || id.includes('entrepreneurship')) {
            return 'data-placements';
          }
        }
      }
    }
  }
});
