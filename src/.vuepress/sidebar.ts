import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/notes/design-mode/": "structure",
  "/notes/react/": "structure",
  "/notes/typescript/": "structure",
  "/notes/chrome-tools/": "structure",
  "/notes/webpack-notes/": "structure",
  "/documents/": "structure",
  "/demos/": "structure",
  "/more/interview-summary/": [{
    text: "✨HTML",
    prefix: "html/",
    children: "structure",
  },{
    text: "✨CSS",
    prefix: "css/",
    children: "structure",
  }]
});
