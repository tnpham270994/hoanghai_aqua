import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async () => {
  const { viteStaticCopy } = await import('vite-plugin-static-copy');
  
  return {
    build: {
      outDir: 'dist',
      minify: true,
      rollupOptions: {
        input: {
          main: 'index.html',
          about: 'about.html',
          contact: 'contact.html',
          product: 'product.html',
          service: 'service.html',
          product_may_loc_nuoc: 'product-may-loc-nuoc.html',
        }
      }
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'img/*',
            dest: 'assets/img'
          },
          {
            src: 'css/*',
            dest: 'assets/css'
          },
          {
            src: 'js/*',
            dest: 'assets/js'
          },
          {
            src: 'lib/**/*',  // Copy all files and subdirectories in lib
            dest: 'assets/lib'
          },
          {
            src: 'scss/*',
            dest: 'assets/scss'
          }
        ]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      }
    },
    base: './'  // This ensures relative paths work correctly
  };
};