---
title: AES/DES加密解密示例
date: 2024-05-13 17:20:13
icon: code
index: true
category:
  - 示例
---

::: vue-demo AES/DES 加密解密示例

```vue
<template>
  <div class="container">
    <div>
      <label>密钥: </label>
      <input v-model="aseKey" placeholder="请输入8位的密钥" />
    </div>
    <div>
      <label>内容: </label>
      <input v-model="content" placeholder="请输入加密/解密内容"/>
    </div>
    <div class="content">{{ msg }}</div>
    <div class="btn-container">
      <button @click="handleEncrypt">加密</button>
      <button @click="handleDecrypt">解密</button>
    </div>
  </div>
</template>
<script>
const { ref } = Vue;
export default {
  setup(props) {
    const msg = ref("加密/解密内容");
    const aseKey = ref("");
    const content = ref("");
    return {
      msg,
      aseKey,
      content,
    };
  },
  methods: {
    handleEncrypt() {
      if(!this.aseKey || !this.content){
        confirm("请输入密钥和内容");
        return;
      }
      this.msg = CryptoJS.AES.encrypt(this.content, CryptoJS.enc.Utf8.parse(this.aseKey),{
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }).toString();
    },
    handleDecrypt () {
      if(!this.aseKey || !this.content){
        confirm("请输入密钥和内容");
        return;
      }
      this.msg = CryptoJS.AES.decrypt(this.content, CryptoJS.enc.Utf8.parse(this.aseKey), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(CryptoJS.enc.Utf8);
    }
  },
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
  input {
    margin: 10px 0;
  }
}
.content {
  margin-top: 10px;
}
.btn-container button {
  margin: 20px 10px;
}
</style>
```
:::
