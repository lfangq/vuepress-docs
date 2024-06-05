---
title: AES/DES加密解密示例
date: 2024-05-13 17:20:13
icon: code
index: true
category:
  - 示例
---

::: vue-playground AES/DES加密解密示例

@file App.vue

```vue
<template>
  <div class="container">
    <div>
      <label>密钥: </label>
      <input v-model="aseKey" />
    </div>
    <div>
      <label>内容: </label>
      <input v-model="content" />
    </div>
    <div>{{ msg }}</div>
    <div class="btn-container">
      <button  @click="handleEncrypt">加密</button>
      <button @click="handleDecrypt">解密</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

// 引入外部js文件
function loadJs(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);

    script.onload = () => {
      resolve();
    }
    script.onerror = () => {
      reject();
    }
  })
}
loadJs("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js");

const msg = ref("加密/解密内容");
const aseKey = ref("");
const content = ref("");

const handleEncrypt = () => {
  msg.value = CryptoJS.AES.encrypt(
    content.value,
    CryptoJS.enc.Utf8.parse(aseKey.value),
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
  ).toString();
};
const handleDecrypt = () => {
  msg.value = CryptoJS.AES.decrypt(
    content.value,
    CryptoJS.enc.Utf8.parse(aseKey.value),
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
  ).toString(CryptoJS.enc.Utf8);
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
}
.btn-container {
  button {
    margin: 20px 10px;
  }
}
</style>
```

:::