---
title: post请求方式通过params传递参数
date: 2018-07-03 14:14:35
tags:
  - JavaScript
---

在HTTP请求中，`POST` 方法通常用于向指定的资源提交要被处理的数据。

然而，`params` 这个术语通常与URL的查询参数（query parameters）相关联，这些参数是附加在URL后面的，并通过`?`分隔，各参数之间通过`&`连接。对于`POST`请求，虽然技术上可以在URL中附加查询参数（即使用`params`），但通常的做法是将数据放在请求体中（body）发送。

如果你在使用某种HTTP客户端库（如Axios、Fetch API等）发送`POST`请求，并希望以类似于`params`的方式发送数据，你实际上可能是在寻找如何发送请求体（body）中的数据。这里有两种常见的方式：

1. **application/x-www-form-urlencoded**：这是表单提交时常用的内容类型，数据被编码为键值对，类似于URL的查询字符串。

2. **application/json**：这是现代Web开发中常用的内容类型，数据以JSON格式发送。

### 使用Fetch API发送`POST`请求
#### application/x-www-form-urlencoded

```javascript
fetch('https://example.com/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'key1=value1&key2=value2', // 类似于params，但放在body中
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
```

#### application/json

```javascript
fetch('https://example.com/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    key1: 'value1',
    key2: 'value2',
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
```

### 使用Axios发送`POST`请求

Axios是一个基于Promise的HTTP客户端，用于浏览器和node.js。它提供了一种更直观的方式来发送请求。

#### application/x-www-form-urlencoded

```javascript
axios.post('https://example.com/api/data', {
  key1: 'value1',
  key2: 'value2',
}, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [(data) => qs.stringify(data)], // 需要引入qs库来处理序列化
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
```

注意：对于`application/x-www-form-urlencoded`，你可能需要使用像`qs`这样的库来序列化你的数据。

#### application/json

```javascript
axios.post('https://example.com/api/data', {
  key1: 'value1',
  key2: 'value2',
}, {
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
```

在这个例子中，对于`application/json`，你不需要进行额外的序列化，因为Axios会自动将JavaScript对象转换为JSON字符串。