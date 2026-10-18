import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],base:'/thetranquil00/',build:{rollupOptions:{input:{main:'index.html',diagnostic:'diagnostic.html',final:'final.html'}}}});
