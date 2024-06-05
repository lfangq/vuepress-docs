import { defineUserConfig } from "vuepress";
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
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
