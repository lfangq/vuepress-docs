<template>
  <div class="web-navbar" @click="toPath">
    <div class="warper">
      <div class="title">{{ title }}</div>
      <div class="content">{{ content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WebNavbar",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    content: {
      type: String,
      default: "内容",
    },
    url: {
      type: String,
      default: "跳转",
    }
  },
  data(){
    return {};
  },
  methods: {
    toPath () {
      if (!this.url) {
        return this.url;
      }
      window.open(this.url);
    }
  }
};
</script>
<style lang="scss" scoped>
.web-navbar {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 70px;
  padding: 10px;
  background-color: var(--web-navbar-bg);
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  color: var(--web-navbar-color);
  .warper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    padding: 10px;
  }
  .title, .content {
    overflow:hidden;
    text-overflow: ellipsis;
  }
  .title {
    border-bottom: 1px solid var(--web-navbar-color);
    padding-bottom: 5px;
    text-wrap: nowrap;
  }
  .content {
    display: -webkit-box;
    text-align: left;
    margin-top: 5px;
    -webkit-line-clamp: 2;
    overflow-wrap: break-word;
    -webkit-box-orient: vertical;
  }
}
.web-navbar:hover {
   .title, .content {
    overflow: visible;
    text-overflow: unset;
    text-wrap: wrap;
    -webkit-line-clamp: unset;
  }
  .title {
    border-bottom: 1px solid #ffffff;
  }
  .warper {
    width: 100%;
    min-height: 100%;
    position: absolute;
    top: -5px;
    left: -5px;
    z-index: 10;
    background-color: var(--web-navbar-bg-active);
    padding: 5px;
    border-radius: 10px;
    overflow: hidden;
    border: 2px dashed var(--web-navbar-border-active);
    transition: all .2s;
    color: #ffffff;
  }
}
</style>