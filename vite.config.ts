import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    /*
     * Até agora este plugin não fazia nada: exige `sharp` e `svgo`, que não
     * estavam instalados, e `vite >= 5`, que o repositório não tinha. Com as
     * duas coisas resolvidas, passa a comprimir mesmo — as fotografias saíam
     * daqui com 2,6 MB.
     */
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      png: { quality: 72 },
      jpeg: { quality: 72, mozjpeg: true },
      jpg: { quality: 72, mozjpeg: true },
      webp: { quality: 72 },
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                // Mexer no viewBox parte o dimensionamento dos ícones.
                removeViewBox: false
              }
            }
          }
        ]
      }
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['it_logo.svg', 'it_logo_name.svg'],
      manifest: {
        name: 'Kandengue Atrevido',
        short_name: 'Kandengue',
        description: 'Serviço de Moto-Táxi e Entregas',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/it_logo.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: '/it_logo.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'query-vendor': ['@tanstack/react-query'],
          'ui-vendor': ['swiper'],
          // O firebase 12 nao exporta ".", so subpaths: listar 'firebase'
          // aqui partia a build com "Missing export". Estas sao as entradas
          // que o site usa de facto.
          'firebase-vendor': [
            'firebase/app',
            'firebase/auth',
            'firebase/firestore',
            'firebase/storage'
          ],
          icons: ['react-icons']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
