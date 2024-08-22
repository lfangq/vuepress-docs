---
title: CSS-水滴融合
date: 2024-04-13 17:20:13
index: true
category:
  - 示例
---

::: vue-demo CSS-水滴融合
```vue
<template>
  <div class="container">
    <div class="small"></div>
    <div class="big"></div>
  </div>
</template>
<script>
// 该效果是靠高斯模糊实现
export default {};
</script>
<style scoped>
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 !important;
    padding: 30px 0;
    border: 1px solid #666;
        margin: 100px auto;
        /* 父容器必须有背景颜色 */
        background-color: #fff;
    /* 父容器必须有对比度 */
    filter: contrast(12);
  }
  .container div {
    border-radius: 50%;
    background-color: red;
    /* 子盒子必须有高斯模糊 */
    filter: blur(10px);
  }
  .small {
    width: 100px;
    height: 100px;
    transform: translateX(500px);
    animation: smallRun 8s linear infinite;
  }
  @keyframes smallRun {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(500px);
    }

    100% {
      transform: translateX(0);
    }
  }
  .big {
    width: 200px;
    height: 200px;
    transform: translateX(-500px);
    animation: bigRun 8s linear infinite;
  }
  @keyframes bigRun {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(-500px);
    }

    100% {
      transform: translateX(0);
    }
  }
</style>
```
:::