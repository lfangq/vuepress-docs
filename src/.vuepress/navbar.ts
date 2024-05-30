import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "solar:home-bold-duotone",
    link: "/",
  },
  {
    text: "博客",
    icon: "ion:newspaper",
    link: "/posts/",
  },
  {
    text: "笔记",
    icon: "solar:clipboard-list-bold",
    prefix: "/notes/",
    children: [
      {
        text: "设计模式",
        icon: "solar:cpu-bold-duotone",
        prefix: "/design-mode/",
        link: "/notes/design-mode/1.前言.md"
      },
      {
        text: "React",
        icon: "vscode-icons:file-type-reactts",
        prefix: "/react/",
        link: "/notes/react/00.React思维导图.md"
      },
      {
        text: "TypeScript",
        icon: "vscode-icons:folder-type-typescript-opened",
        prefix: "/typescript/",
        link: "/notes/typescript/01.简介.md"
      },
      {
        text: "谷歌插件",
        icon: "ph:google-chrome-logo-bold",
        prefix: "/chrome-tools/",
        link: "/notes/chrome-tools/01.谷歌插件开发入门示例.md"
      }
    ]
  },
  {
    text: "技术文档",
    icon: "solar:palette-bold",
    link: "/documents/",
  },
  {
    text: "示例",
    icon: "solar:atom-bold",
    link: "/demos/",
  },
  {
    text: "更多",
    icon: "solar:code-scan-bold",
    prefix: "/more/",
    link: "https://theme-hope.vuejs.press/zh/",
    children: ["README.md"]
  }
]);
