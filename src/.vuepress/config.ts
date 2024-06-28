import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite';
import { viteImagemin } from "vuepress-plugin-imagemin";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Lfangq",
  description: "Lfangq的博客",
  markdown: {
    headers: {
      // 用到哪一级就提取哪一级
      level: [2, 3, 4, 5, 6],
    },
    code: {
      lineNumbers: true,
      highlightLines: true,
    }
  },
  theme,
  bundler: viteBundler({
    viteOptions: {
      build: {
        target: 'esnext',
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        },
      }
    },
    vuePluginOptions: {},
  }),
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),

  ]
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
