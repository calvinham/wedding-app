// https://vitejs.dev/config/
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import strip from '@rollup/plugin-strip';
import { createHtmlPlugin } from 'vite-plugin-html';

type CSPData = {
  'default-src': string[];
  'connect-src': string[];
  'style-src': string[];
  'script-src': string[];
  'img-src': string[];
};

function buildCSP(data: CSPData) {
  return Object.keys(data)
    .map((key) => `${key} ${data[key].join(' ')}`)
    .join(';');
}

const CSP = buildCSP({
  'default-src': ["'self'"],
  'connect-src': ["'self'", 'https://api.airtable.com'],
  'style-src': [
    "'self'",
    "'unsafe-inline'", // Required for Emotion
  ],
  'script-src': ["'self'"],
  'img-src': ["'self'"],
});

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          csp:
            process.env.NODE_ENV === 'production'
              ? `<meta http-equiv="Content-Security-Policy" content="${CSP}" />`
              : '',
        },
      },
    }),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  build: {
    sourcemap: command === 'serve',
    reportCompressedSize: true,
    rollupOptions: {
      plugins: [
        strip({
          functions: ['console.debug'],
          include: '**/*.(ts|tsx)',
        }),
      ],
    },
  },
}));
