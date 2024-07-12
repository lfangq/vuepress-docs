---
title: Element-UI 小技巧
date: 2022-12-16 11:05:01
order: 1
categories: 
  - 笔记
tags: 
  - Element UI
---

## MessageBox 弹框--自定义下拉框

:::details
```vue
<template>
  <el-button @click="showCustomMessageBox">Show MessageBox with Dropdown</el-button>
</template>

<script>
import { ElMessageBox } from 'element-plus';

export default {
  methods: {
    showCustomMessageBox() {
      const h = this.$createElement;
      ElMessageBox({
        title: 'Custom MessageBox',
        message: h('div', [
          h('p', 'Please select an option:'),
          h('el-select', {
            props: {
              value: '',
              placeholder: 'Select...',
              size: 'small',
            },
            on: {
              input: () => {
                this.selected = val;
              },
            },
          }, [
            h('el-option', {
              props: {
                label: 'Option 1',
                value: '1',
              },
            }),
            h('el-option', {
              props: {
                label: 'Option 2',
                value: '2',
              },
            }),
          ]),
        ]),
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            console.log('Selected:', this.selected);
            done();
          } else {
            done();
          }
        },
      });
    },
  },
};
</script>
```
:::