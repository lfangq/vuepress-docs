import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import path from "node:path"

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Lfangq",
  description: "Lfangq的博客",
  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
