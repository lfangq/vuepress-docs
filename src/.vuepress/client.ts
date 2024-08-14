import { defineClientConfig } from "vuepress/client";
import WebNavbar from "./components/WebNavbar.vue";
import LightPage from "./components/LightPage.vue";

export default defineClientConfig({
  // 添加全局组件
  enhance: ({ app, router, siteData }) => {
    app.component("WebNavbar", WebNavbar);
    app.component("LightPage", LightPage);
  },
  // 添加或覆盖布局
  layouts: {
    WebNavbar,
    LightPage
  }
});