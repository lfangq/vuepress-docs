import { defineClientConfig } from "vuepress/client";
import WebNavbar from "./components/WebNavbar.vue";

export default defineClientConfig({
  // 添加全局组件
  enhance: ({ app, router, siteData }) => {
    app.component("WebNavbar", WebNavbar);
  },
  // 添加或覆盖布局
  layouts: {
    WebNavbar
  }
});