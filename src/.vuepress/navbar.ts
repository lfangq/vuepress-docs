import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    // icon: "solar:home-bold-duotone",
    link: "/",
  },
  {
    text: "博客",
    // icon: "ion:newspaper",
    link: "/posts/",
  },
  {
    text: "技术文档",
    // icon: "solar:palette-bold",
    link: "/documents/",
  },
  {
    text: "示例",
    // icon: "solar:atom-bold",
    link: "/demos/",
  },
  {
    text: "笔记",
    // icon: "solar:clipboard-list-bold",
    prefix: "/notes/",
    children: [
      {
        text: "设计模式",
        prefix: "/design-mode/",
        link: "/notes/design-mode/1.前言.md"
      },
      {
        text: "React",
        prefix: "/react/",
        link: "/notes/react/00.React思维导图.md"
      },
      {
        text: "TypeScript",
        prefix: "/typescript/",
        link: "/notes/typescript/01.前言.md"
      },
      {
        text: "谷歌插件",
        prefix: "/chrome-tools/",
        link: "/notes/chrome-tools/01.谷歌插件开发入门示例.md"
      },
      {
        text: "Element-UI小技巧",
        prefix: "/element-ui/",
        link: "/notes/element-ui.md"
      }
    ]
  },
  {
    text: "更多",
    // icon: "solar:code-scan-bold",
    prefix: "/more/",
    link: "https://theme-hope.vuejs.press/zh/",
    children: [
      "站点导航.md",
      "学习路线图.md",
      "常用的前端轮子.md",
      {
        text: "面试总结",
        prefix: "/interview-summary/",
        link: "/more/interview-summary/html/01.DOCTYPE.md"
      }
    ]
  }
]);
