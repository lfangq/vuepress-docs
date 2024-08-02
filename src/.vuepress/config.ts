import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Lfangq",
  description: "Lfangq的博客",
  head: [
     ["script", { rel: "CryptoJS", src: "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js" }],
  ],
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
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
