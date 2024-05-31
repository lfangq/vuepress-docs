import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,c,d as t,w as l,a as n,e as i,o as u,b as s}from"./app-6ixsUJ27.js";const r={},k=n("h3",{id:"定义",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#定义"},[n("span",null,"定义")])],-1),d=n("p",null,"抽象工厂模式(Abstract Factory)就是通过类的抽象使得业务适用于一个产品类簇的创建，而不负责某一类产品的实例。",-1),m=n("h3",{id:"示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#示例"},[n("span",null,"示例")])],-1),v=n("p",null,"情景：不同品牌的手机，在不同工厂中生产",-1),b=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"AbstractMobileFactory"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'抽象工厂模式不能被实例化'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
   `),n("span",{class:"token comment"},"// 提供操作系统的接口"),s(`
  `),n("span",{class:"token function"},"createOS"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"抽象工厂方法不允许直接调用，你需要将我重写！"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// 提供硬件的接口"),s(`
  `),n("span",{class:"token function"},"createHardWare"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"抽象工厂方法不允许直接调用，你需要将我重写！"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"AndroidFactory"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"AbstractMobileFactory"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"createOS"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"创建安卓系统"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"createHardWare"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"创建安卓硬件"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"IOSFactory"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"AbstractMobileFactory"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"createOS"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"创建苹果系统"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"createHardWare"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"创建苹果硬件"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" factorys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'AndroidFactory'"),n("span",{class:"token punctuation"},","),s(" AndroidFactory"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'IOSFactory'"),n("span",{class:"token punctuation"},","),s("IOSFactory"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"createMobile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"type"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("factorys"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("type"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" factory "),n("span",{class:"token operator"},"="),s(" factorys"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("type"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"factory"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'type is not exist'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" android "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createMobile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'AndroidFactory'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
android`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createOS"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
android`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createHardWare"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=i(`<ol><li>es5实现抽象</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function w(f,g){const e=a("Mermaid"),o=a("CodeDemo");return u(),c("div",null,[t(e,{id:"mermaid-0",code:"eJzT1dXlKsksyUm1UnjWtffFxoVPty992tf0bMXCp3v6uYCyCgpc6UWJBRkKPkEKXApA4Jyfl1yUWpLqlphckl9U6Rit9LR1+5O9kyEaHZViFXR17RRqnu9e/qxzf42CY1JxSRFQKVQ5NiOcUI1wIsaIgKL8lNLkEkfDaKUnu5Y/ndzoaAjT9rRj9tPdu2owHIqizwiuz4gUfU5w+5wI2eeEog9unxMh+1D0uSXmZuaAwhii+dn0fngAP90478muvhpESCioIXyHaQYwkOFmwEMYzQwnJDOcQGaAjSkuTYKkALh+qASqG7EJOkEFU/NSwCxU8yDRDRVFi2SoKHpcYBdGtQYAjHYV4g=="}),k,d,m,v,t(o,{id:"code-demo-13",type:"normal",title:"%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F",code:"eJy9k8tKw0AUhl9lyCYplLpXXLhQdCEuXLgwXcR2qpEyI5MpKiJY77daxQtoRa2iCEpRFLX28jSZJF31FZxceklbRESELIYz58z5zv+fLAjTmtAtROKKpoG+CY0SJUKH8YQahwP8hMk8WJARABGM+F3CjkgBNwQAgrOgnxAeEo3tkvWcZe+3bG/ZuM+yYlr/SFkrJev6geUu9PIO2z0RAz123aJT3NUFjPS+Xs4Yhym9dG6+FMzCpXm2auzdsvSN05JAhcKRUSngtaNTBM82NZUFX9eTvPFyzLuytaSV+zAzr/wp62nFPLqvFnf10lXlfMm6S7KndWPzoLKRYuun1WJSFpqg6kxm9lEvvHWgGVRIdEwh8L+Y+CcjzxwUJViN1lyBcxSi6Pee1QWsGWa7iOMwFMeTnJRtZljhk+W2WOrQ1d+nRuvEP3jEka0z/tDI6J+jWzt548JbnV+je490Rre3HsRcMg30OkYPKzPSuJ01Lvo9EYMtJoWDblpjdjHYOIdlFLbbySiWQBGqYuRxu3pIdH4GeuRqDEg1itAkpO6db6w6JqdsT3WmAoBAmiDImcLLkZpUa91l0S4FqgYQptw0VaPOH9ykjOKOy1v6yFt1sau81FDD2bZgwy9HFWHxC6kz/rw="},{default:l(()=>[b]),_:1}),y])}const C=p(r,[["render",w],["__file","3.抽象工厂模式.html.vue"]]),A=JSON.parse('{"path":"/notes/design-mode/3.%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html","title":"抽象工厂模式","lang":"zh-CN","frontmatter":{"title":"抽象工厂模式","date":"2024-05-13T17:20:13.000Z","index":true,"icon":"layer-group","order":3,"category":["笔记"],"tags":["设计模式"],"description":"定义 抽象工厂模式(Abstract Factory)就是通过类的抽象使得业务适用于一个产品类簇的创建，而不负责某一类产品的实例。 示例 情景：不同品牌的手机，在不同工厂中生产 es5实现抽象 es6 class 实现抽象","head":[["meta",{"property":"og:url","content":"https://www.lfangq.top/notes/design-mode/3.%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"Lfangq"}],["meta",{"property":"og:title","content":"抽象工厂模式"}],["meta",{"property":"og:description","content":"定义 抽象工厂模式(Abstract Factory)就是通过类的抽象使得业务适用于一个产品类簇的创建，而不负责某一类产品的实例。 示例 情景：不同品牌的手机，在不同工厂中生产 es5实现抽象 es6 class 实现抽象"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-31T10:02:27.000Z"}],["meta",{"property":"article:author","content":"Lfangq"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2024-05-13T17:20:13.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-31T10:02:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"抽象工厂模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-13T17:20:13.000Z\\",\\"dateModified\\":\\"2024-05-31T10:02:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lfangq\\",\\"url\\":\\"https://www.lfangq.top/\\"}]}"]]},"headers":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1716882891000,"updatedTime":1717149747000,"contributors":[{"name":"lfangq","email":"2251234678@qq.com","commits":2}]},"readingTime":{"minutes":3.17,"words":952},"filePathRelative":"notes/design-mode/3.抽象工厂模式.md","localizedDate":"2024年5月13日","excerpt":"","autoDesc":true}');export{C as comp,A as data};
