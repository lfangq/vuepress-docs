import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e as t}from"./app-DbdGz4CT.js";const e={},p=t(`<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><p>抽象工厂模式(Abstract Factory)就是通过类的抽象使得业务适用于一个产品类簇的创建，而不负责某一类产品的实例。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><ol><li>es5实现抽象</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 使用es5实现抽象工厂模式
 *
 * 什么是抽象工厂模式，就是一个对象可以被其他对象继承，但自身不能被实例化
 */</span>
<span class="token keyword">function</span> <span class="token function">AbstractClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;AbstractClass&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> AbstractClass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;不能实例化抽象类&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 静态方法，抽象类里没必要定义静态方法</span>
AbstractClass<span class="token punctuation">.</span><span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">AbstractClass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">commonMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;抽象类不能调用抽象方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ConcreteClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 首先通过AbstractClass.call(this)来改变this的指向，使得ConcreteClass实例可以继承AbstractClass的属性和方法</span>
  <span class="token function">AbstractClass</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;ConcreteClass&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 继承抽象类原型指向抽象类原型， new Object(), <span class="token punctuation">{</span><span class="token punctuation">}</span>，Object.create区别
 * <span class="token punctuation">{</span><span class="token punctuation">}</span>, Object.create(null)不会继承创建对象的属性，减少对象的遍历
 *
 * 通过Object.create(AbstractClass.prototype)来继承AbstractClass的原型属性和方法，并将ConcreteClass的原型指向AbstractClass的原型
 */</span>

<span class="token class-name">ConcreteClass</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">AbstractClass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ConcreteClass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> ConcreteClass<span class="token punctuation">;</span>

<span class="token class-name">ConcreteClass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">commonMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;commonMethod&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> concreteClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 报错：TypeError: ConcreteClass.test is not a function的错误
 * ConcreteClass并没有继承AbstractClass的test静态方法。静态方法是属于类本身（构造函数）的，而不是原型链的一部分，因此不能通过子类实例访问。要解决这个问题，你可以直接在ConcreteClass中定义一个同名的静态方法，或者在需要调用AbstractClass.test的地方使用AbstractClass.test()
 */</span>
ConcreteClass<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>es6 class 实现抽象</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 定义抽象工厂接口</span>
<span class="token keyword">class</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
  <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Method must be implemented.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">createTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Method must be implemented.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂1：针对Chrome浏览器</span>
<span class="token keyword">class</span> <span class="token class-name">ChromeFactory</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
  <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ChromeButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">createTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ChromeTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂2：针对Firefox浏览器</span>
<span class="token keyword">class</span> <span class="token class-name">FirefoxFactory</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
  <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FirefoxButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">createTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FirefoxTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象产品：按钮</span>
<span class="token keyword">class</span> <span class="token class-name">AbstractButton</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;abstract button&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品：Chrome按钮</span>
<span class="token keyword">class</span> <span class="token class-name">ChromeButton</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractButton</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;Chrome button&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品：Firefox按钮</span>
<span class="token keyword">class</span> <span class="token class-name">FirefoxButton</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractButton</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;Firefox button&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象产品：文本框</span>
<span class="token keyword">class</span> <span class="token class-name">AbstractTextBox</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;abstract text box&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品：Chrome文本框</span>
<span class="token keyword">class</span> <span class="token class-name">ChromeTextBox</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTextBox</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;Chrome text box&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品：Firefox文本框</span>
<span class="token keyword">class</span> <span class="token class-name">FirefoxTextBox</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTextBox</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;Firefox text box&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用抽象工厂模式</span>
<span class="token keyword">function</span> <span class="token function">createUIElements</span><span class="token punctuation">(</span><span class="token parameter">browser</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>browser <span class="token operator">===</span> <span class="token string">&quot;Chrome&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChromeFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">button</span><span class="token operator">:</span> factory<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">textBox</span><span class="token operator">:</span> factory<span class="token punctuation">.</span><span class="token function">createTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>browser <span class="token operator">===</span> <span class="token string">&quot;Firefox&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FirefoxFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">button</span><span class="token operator">:</span> factory<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">textBox</span><span class="token operator">:</span> factory<span class="token punctuation">.</span><span class="token function">createTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Unsupported browser.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例使用</span>
<span class="token keyword">const</span> chromeElements <span class="token operator">=</span> <span class="token function">createUIElements</span><span class="token punctuation">(</span><span class="token string">&quot;Chrome&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chromeElements<span class="token punctuation">.</span>button<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：&quot;Chrome button&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chromeElements<span class="token punctuation">.</span>textBox<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：&quot;Chrome text box&quot;</span>

<span class="token keyword">const</span> firefoxElements <span class="token operator">=</span> <span class="token function">createUIElements</span><span class="token punctuation">(</span><span class="token string">&quot;Firefox&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firefoxElements<span class="token punctuation">.</span>button<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：&quot;Firefox button&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firefoxElements<span class="token punctuation">.</span>textBox<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：&quot;Firefox text box&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(l,i){return a(),s("div",null,o)}const k=n(e,[["render",c],["__file","3.抽象工厂模式.html.vue"]]),d=JSON.parse('{"path":"/notes/design-mode/3.%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html","title":"抽象工厂模式","lang":"zh-CN","frontmatter":{"title":"抽象工厂模式","date":"2024-05-13T17:20:13.000Z","index":true,"icon":"layer-group","order":3,"category":["笔记"],"tags":["设计模式"],"description":"定义 抽象工厂模式(Abstract Factory)就是通过类的抽象使得业务适用于一个产品类簇的创建，而不负责某一类产品的实例。 示例 es5实现抽象 es6 class 实现抽象","head":[["meta",{"property":"og:url","content":"https://www.lfangq.top/notes/design-mode/3.%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"Lfangq"}],["meta",{"property":"og:title","content":"抽象工厂模式"}],["meta",{"property":"og:description","content":"定义 抽象工厂模式(Abstract Factory)就是通过类的抽象使得业务适用于一个产品类簇的创建，而不负责某一类产品的实例。 示例 es5实现抽象 es6 class 实现抽象"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-28T07:54:51.000Z"}],["meta",{"property":"article:author","content":"Lfangq"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2024-05-13T17:20:13.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-28T07:54:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"抽象工厂模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-13T17:20:13.000Z\\",\\"dateModified\\":\\"2024-05-28T07:54:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lfangq\\",\\"url\\":\\"https://www.lfangq.top/\\"}]}"]]},"headers":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1716882891000,"updatedTime":1716882891000,"contributors":[{"name":"lfangq","email":"2251234678@qq.com","commits":1}]},"readingTime":{"minutes":2.27,"words":681},"filePathRelative":"notes/design-mode/3.抽象工厂模式.md","localizedDate":"2024年5月13日","excerpt":"","autoDesc":true}');export{k as comp,d as data};
