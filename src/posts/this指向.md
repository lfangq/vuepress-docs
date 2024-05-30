---
title:  this指向
date: 2024-04-01 16:58:06
categories:
  - JavaScript
tags:
  - JavaScript
---

### 1. 定义

`this` 就是一个对象，`this` 是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

### 2. this 绑定规则

`this`绑定主要分为四种：

* 默认绑定
* 隐式绑定
* 显式绑定
* new绑定

只要搞清楚这四种绑定规则，我们在一般的项目中以及能够判断出 `this` 指向哪儿了！

#### 2.1 默认绑定

我们比较常见的一种函数调用类型就是独立函数的调用，形如`foo()`等。这个时候的 `this` 绑定就是采用的`默认绑定规则`。

代码如下：
```js
var name = '小猪课堂';
function foo(){
  console.log(this) // Window{}
  console.log(this.name) // 小猪课堂
}
foo(); // 小猪课堂
```

上段代码非常简单，我们在全局作用域中定义了一个变量`name`，然后我们在函数 `foo` 中使用`this.name`，输出的结果就是全局变量`name`，这说明我们 `this` 指向了全局作用域，也就是说 `this` 绑定到了 `window` 对象上。


函数的这种调用方式就被称为默认绑定，默认绑定规则下的 `this` 指向全局对象。

我们可以给默认绑定给个定义：

> 当函数不带用任何修饰进行调用时，此时 this 的绑定就是默认绑定规则，this 指向全局对象。

:::warning

`let`变量声明不会绑定在`window`上面，只有`var`声明的才会，这是需要注意的。除此之外，严格模式下上段代码的 `this` 是 `undefined`，比如下面这段代码：

```js
var name = '小猪课堂';
function foo(){
  'use strict'
  console.log(this.name)
}
foo(); // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
```

从上段代码可以看出，默认绑定规则下，`this` 绑定到了全局对象，当然这与函数调用位置有关。但是`严格模式`下，`this` 的绑定与函数调用位置无关。
:::

#### 2.2 隐式绑定

前面的默认绑定规则很好理解，因为我们的函数执行上下文就是全局作用域，this 自然而然绑定到了全局对象上。

独立函数的调用我们可以直接看出执行上下文在哪里，但如果不是独立函数调用，比如下面代码。

代码如下：

```js
function foo() {
  console.log(this.name) // 小猪课堂
}
let obj = {
  name: '小猪课堂',
  foo: foo
}
obj.foo();
```

上段代码我们在 obj 对象中引用了函数 foo，然后我们使用 obj.foo（函数别名）的方式调用了该函数，此时不是独立函数调用，我们不能使用默认绑定规则。

此时 this 的绑定规则称为隐式绑定规则，因为我们不能直接看出函数的调用位置，它的实际调用位置在 obj 对象里面，调用 foo 时，它的执行上下文对象为 obj 对象，所以 this 将会被绑定到 obj 对象上，所以我们函数中的 this.name 其实就是obj.name。这就是我们的隐式绑定规则。

注意：

如果我们调用函数时有多个引用调用，比如obj1.obj2.foo()。这个时候函数 foo 中的 this 指向哪儿呢？其实不管引用链多长，this 的绑定都由最顶层调用位置确定，即obj1.obj2.foo()的 this 还是绑定带 obj2。

隐式绑定中 this 丢失

在隐式绑定规则中，我们认为谁调用了函数，this 就绑定谁，比如 obj.foo 中 this 就绑定到 obj，但是有一些情况比较特殊，即使采用的隐式绑定规则，但是 this 并没有按照我们的想法去绑定，这就是所谓的隐式绑定 this 丢失，常见于回调函数中。

代码如下：
```js
function foo() {
  console.log(this.name) // 小猪课堂
}


function doFoo(fn) {
  fn(); // 函数调用位置
}


let obj = {
  name: '张三',
  foo: foo
}
let name = '小猪课堂';
doFoo(obj.foo); // 小猪课堂
```

上段代码中我们很容易会以为 foo 绑定的 this 是 obj 对象，因为我们使用了 obj.foo 的方式，这种方式就是遵循隐式绑定规则。但是事实上 this 却绑定到了全局对象上去，这是因为我们在 doFoo 函数中调用 fn 时，这里才是函数的实际调用位置，此时是独立函数调用，所以 this 指向了全局对象。

实际项目中我们容易遇到这种问题的场景可能就是定时器了，比如下面的代码：

```js
setTimeout(obj.foo, 100);
```

这种写法就很容易造成 this 丢失。

#### 2.3 显式绑定

前面我们已经说了默认绑定和隐式绑定，其中隐式绑定我们通常是以 obj.foo 这种形式来调用函数的，目的就是为了让 foo 的 this 绑定到 obj 对象上。

这个时候，如果我们不想通过 obj.foo 的形式调用函数，我们想要很明确的将函数的 this 绑定在某个对象上。那么可以使用 call、apply 等方法，这就是所谓的显式绑定规则。

代码如下：
```js

function foo() {
  console.log(this.name) // 小猪课堂
}


let obj = {
  name: '小猪课堂',
}


foo.call(obj);
```

上段代码我们利用 call 方法直接将 foo 函数内部的 this 指向了 obj 对象，这就是显式绑定。

虽然显式绑定让我们很清楚的知道了函数中的 this 绑定到了哪个对象上，但是它还是无法结局我们 this 绑定丢失的问题，就比如下面这种写法：

```js
function foo() {
  console.log(this.name) // 小猪课堂
}


function doFoo(fn) {
  fn(); // 函数调用位置
}


let obj = {
  name: '张三',
  foo: foo
}
let name = '小猪课堂';
doFoo.call(obj, obj.foo); // 小猪课堂
```

上段代码我们虽然使用 call 来更改 this 绑定，但是最终结果却是没有用的。

虽然显式绑定本身不能解决 this 绑定丢失的问题，但是我们可以通过变通的方式来解决这个问题，也被称作硬绑定。

硬绑定：
```js
function foo() {
  console.log(this.name) // 小猪课堂
}


function doFoo(fn) {
  fn(); // 函数调用位置
}


let obj = {
  name: '张三',
}
let bar = function () {
  foo.call(obj)
}
let name = '小猪课堂';
doFoo(bar); // 张三
setTimeout(bar, 100); // 张三
```

其实思路也比较简单，出现 this 绑定丢失原因无非就是我们传入的回调函数在被执行时，this 绑定规则变为了默认绑定，那么为了解决这个问题，我们不妨在封装一个函数，将 foo 函数的 this 显式绑定到 obj 对象上去即可。

这里提一点，下面写法是错误的：

```js
doFoo(foo.call(obj));
```

因为回调函数是在 doFoo 里面执行的，上面的写法相当于 foo 函数立即执行了。

补充：

其实我们的 bind 函数就是一个硬绑定，大家想一想，bind 函数是不是创建一个新的函数，然后将 this 指定，是不是就和我们下面这段代码的效果一样。

```js
let bar = function () {
  foo.call(obj)
}


// bind 形式
let bar = foo.bind(obj)
```
#### 2.4 new绑定

new 关键词相信大家都知道或者使用过吧，这就是我们将要将的第 4 种 this 绑定，叫做 new 绑定。

想要知道 new 绑定规则，我们就很有必要知道一个当我们 new 一个对象的时候做了什么，或者说 new 关键词会做哪些操作。我们这里简单总结一下，具体的 new 的过程还需要大家自行下来好好学学。

使用 new 来调用函数时，会执行下面操作：

1. 创建一个全新的对象
2. 这个新对象会被执行原型连接
3. 这个新对象会绑定到函数调用的 this
4. 如果函数没有返回其它对象，那么 new 表达式种的函数调用会自动返回这个新对象

我们可以看到 new 的操作中就有 this 的绑定，我们在来看看代码。

代码如下：
```js
function foo(name) {
  this.name = name;
}
let bar = new foo('小猪课堂');
console.log(bar.name); // 小猪课堂
```

上段代码我们使用 new 关键词调用了 foo 函数，大家注意这不是默认调用规则，这是 new 绑定规则。

### 3. 优先级