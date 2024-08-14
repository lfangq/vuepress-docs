---
title: CSS-镜面效果
date: 2024-04-13 17:20:13
icon: code
index: true
category:
  - 示例
---

::: vue-demo CSS-镜面效果
```vue
<template>
  <div class="warpper">
    <div class="warpper-item" v-for="(item, index) in list" :key="index">
      <div class="warpper-item_title">{{ item.name }}</div>
      <div class="warpper-item_content">{{ item.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        { name: "标题", content: "内容" },
        { name: "标题", content: "内容" },
        { name: "标题", content: "内容" },
        { name: "标题", content: "内容" },
        { name: "标题", content: "内容" },
        { name: "标题", content: "内容" },
        { name: "标题", content: "内容" },
        { name: "标题", content: "内容" },
        { name: "标题", content: "内容" },
      ]
    };
  },
};
</script>
<style>
.warpper {
  display: flex;
  flex-wrap: wrap;
  place-content: stretch center;
  align-items: stretch;
  margin: 1rem 0;
  text-align: start;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #575353;
  color: #fff;
  z-index: 1;
}
.warpper-item {
  position: relative;
  display: block;
  flex-basis: calc(33% - 3rem);
  margin: .5rem;
  padding: 1rem;
  border-radius: .5rem;
  color: inherit;
  overflow: hidden;
  background: #000;
  cursor: pointer;
}
/* 镜像效果 */
.warpper-item:before {
  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -145%, 0);
  background: #ffffff28;
  content: " ";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 300%;
  height: 300%;
  transition: transform .6s;
}
.warpper-item:hover {
  background-color: #ffffff28;
}
.warpper-item:hover:before {
  background-color: #ffffff26;
  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 145%, 0);
}
</style>
```
:::