import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "mountain-city",
    link: "/",
  },
  {
    text: "博客",
    icon: "dumpster-fire",
    link: "/HOME.md",
  },
  {
    text: "笔记",
    icon: "newspaper",
    prefix: "/notes/",
    children: [
      {
        text: "设计模式",
        icon: "bezier-curve",
        prefix: "/design-mode/",
        link: "/notes/design-mode/1.前言.md"
      }
    ]
  },
  {
    text: "技术文档",
    icon: "book-bookmark",
    link: "/documents/",
  },
  {
    text: "示例",
    icon: "display",
    link: "/demo/",
  },
  {
    text: "更多",
    icon: "soap",
    prefix: "/more/",
    link: "https://theme-hope.vuejs.press/zh/",
    children: ["README.md"]
  },
  {
    text: "介绍页",
    icon: "user-secret",
    prefix: "/intro/",
    link: "/intro.md",
  }
]);
