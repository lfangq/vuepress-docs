import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e}from"./app-DbdGz4CT.js";const t={},p=e(`<h3 id="types" tabindex="-1"><a class="header-anchor" href="#types"><span>Types</span></a></h3><h4 id="_1-1-基本类型-你可以直接获取到基本类型的值" tabindex="-1"><a class="header-anchor" href="#_1-1-基本类型-你可以直接获取到基本类型的值"><span>1.1 基本类型: 你可以直接获取到基本类型的值</span></a></h4><ul><li><code>string</code></li><li><code>number</code></li><li><code>boolean</code></li><li><code>null</code></li><li><code>undefined</code></li><li><code>symbol</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> foo

bar <span class="token operator">=</span> <span class="token number">9</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">)</span> <span class="token comment">// =&gt; 1,9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-复杂类型-复杂类型赋值是获取到他的引用的值。-相当于传引用" tabindex="-1"><a class="header-anchor" href="#_1-2-复杂类型-复杂类型赋值是获取到他的引用的值。-相当于传引用"><span>1.2 复杂类型: 复杂类型赋值是获取到他的引用的值。 相当于传引用</span></a></h4><ul><li><code>object</code></li><li><code>array</code></li><li><code>function</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> foo

bar<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> bar<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; 9, 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-javascript-判断数据类型方法" tabindex="-1"><a class="header-anchor" href="#_1-3-javascript-判断数据类型方法"><span>1.3 javascript 判断数据类型方法</span></a></h4><ul><li>typeof</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// =&gt; string</span>
<span class="token keyword">typeof</span> <span class="token number">1</span> <span class="token comment">// =&gt; number</span>
<span class="token keyword">typeof</span> <span class="token boolean">true</span> <span class="token comment">// =&gt; boolean</span>
<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; symbol</span>
<span class="token keyword">typeof</span> <span class="token keyword">undefined</span> <span class="token comment">// =&gt; undefined</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span> <span class="token comment">// =&gt; object</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; function</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; object</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// =&gt; object</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; object</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; object</span>
<span class="token keyword">typeof</span> document <span class="token comment">// =&gt; object</span>
<span class="token keyword">typeof</span> window <span class="token comment">// =&gt; object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用类型，除了 function 返回 function 类型外，其他都返回 object。但引用类型中的数组、日期、正则都有属于自己的具体类型，而 typeof 对于这些类型的处理，只返回了处于其原型链最顶端的 Object 类型。</p><ul><li>toString</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt;[object String]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [object Number]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [object Boolean]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// =&gt;[object Symbol]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [object Undefined]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [object Null]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [object Function]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [object Date]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [object Array]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [object RegExp]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [object Error]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment">// =&gt; [object HTMLDocument]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token comment">// =&gt;[object global] window 是全局对象 global 的引用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。</p><p>对于 Object 对象，直接调用 toString() 就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。</p><ul><li>constructor</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>constructor <span class="token operator">==</span> String <span class="token comment">// =&gt; true</span>
<span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">==</span> Number <span class="token comment">// =&gt; true</span>
<span class="token boolean">true</span><span class="token punctuation">.</span>constructor <span class="token operator">==</span> Boolean <span class="token comment">// =&gt; true</span>
<span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">==</span> Function <span class="token comment">// =&gt; true</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">==</span> Date <span class="token comment">// =&gt; true</span>
<span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">==</span> Error <span class="token comment">// =&gt; true</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span>constructor <span class="token operator">==</span> Array <span class="token comment">// =&gt; true</span>
document<span class="token punctuation">.</span>constructor <span class="token operator">==</span> HTMLDocument <span class="token comment">// =&gt; true</span>
window<span class="token punctuation">.</span>constructor <span class="token operator">==</span> Window <span class="token comment">// =&gt; true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>constructor 是原型 prototype 的一个属性，当函数被定义时候，js 引擎会为函数添加原型 prototype，并且这个 prototype 中 constructor 属性指向函数引用， 因此重写 prototype 会丢失原来的 constructor。 缺点：</p><ol><li><p>null 和 undefined 无 constructor，这种方法判断不了</p></li><li><p>还有，如果自定义对象，开发者重写 prototype 之后，原有的 constructor 会丢失，因此，为了规范开发，在重写对象原型时一般都需要重新给 constructor 赋值，以保证对象实例的类型不被篡改</p></li></ol><ul><li><p>instanceof</p><p>instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。 在这里需要特别注意的是：instanceof 检测的是原型</p></li></ul><p>由上图可以看出[]的原型指向 Array.prototype，间接指向 Object.prototype, 因此 [] instanceof Array 返回 true， [] instanceof Object 也返回 true。</p><p>instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型</p><h3 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h3><h4 id="_2-1-所有的赋值都用-const-避免使用var-eslint-prefer-const-no-const-assign" tabindex="-1"><a class="header-anchor" href="#_2-1-所有的赋值都用-const-避免使用var-eslint-prefer-const-no-const-assign"><span>2.1 所有的赋值都用 const，避免使用<code>var</code>. eslint: <code>prefer-const</code>, <code>no-const-assign</code></span></a></h4><blockquote><p>Why? 因为这个确保你不会改变你的初始值，重复引用会导致 bug 和代码难以理解</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-如果你一定要对参数重新赋值-那就用let-而不是var-eslint-no-var" tabindex="-1"><a class="header-anchor" href="#_2-2-如果你一定要对参数重新赋值-那就用let-而不是var-eslint-no-var"><span>2.2 如果你一定要对参数重新赋值，那就用<code>let</code>，而不是<code>var</code>. eslint: <code>no-var</code></span></a></h4><blockquote><p>Why? 因为 let 是块级作用域，而 var 是函数级作用域</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token comment">// good, use the let.</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-注意-let、const-都是块级作用域" tabindex="-1"><a class="header-anchor" href="#_2-3-注意-let、const-都是块级作用域"><span>2.3 注意： <code>let</code>、<code>const</code> 都是块级作用域</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// const 和 let 都只存在于它定义的那个块级作用域</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// ReferenceError</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// ReferenceError</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="objects" tabindex="-1"><a class="header-anchor" href="#objects"><span>Objects</span></a></h3><h4 id="_3-1-使用字面值创建对象-eslint-no-new-object" tabindex="-1"><a class="header-anchor" href="#_3-1-使用字面值创建对象-eslint-no-new-object"><span>3.1 使用字面值创建对象. eslint: <code>no-new-object</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-当创建一个带有动态属性名的对象时-用计算后属性名" tabindex="-1"><a class="header-anchor" href="#_3-2-当创建一个带有动态属性名的对象时-用计算后属性名"><span>3.2 当创建一个带有动态属性名的对象时，用计算后属性名</span></a></h4><blockquote><p>Why? 这可以使你将定义的所有属性放在对象的一个地方.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a key named </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">[</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token string">&#39;enabled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// good getKey(&#39;enabled&#39;)是动态属性名</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token string">&#39;enabled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-用对象方法简写-eslint-object-shorthand" tabindex="-1"><a class="header-anchor" href="#_3-3-用对象方法简写-eslint-object-shorthand"><span>3.3 用对象方法简写. eslint: <code>object-shorthand</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

  <span class="token function-variable function">addValue</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> atom<span class="token punctuation">.</span>value <span class="token operator">+</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

  <span class="token comment">// 对象的方法</span>
  <span class="token function">addValue</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> atom<span class="token punctuation">.</span>value <span class="token operator">+</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-用属性值缩写-eslint-object-shorthand" tabindex="-1"><a class="header-anchor" href="#_3-4-用属性值缩写-eslint-object-shorthand"><span>3.4 用属性值缩写. eslint: <code>object-shorthand</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> lukeSkywalker <span class="token operator">=</span> <span class="token string">&#39;Luke Skywalker&#39;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lukeSkywalker</span><span class="token operator">:</span> lukeSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  lukeSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-将你的所有缩写放在对象声明的开始" tabindex="-1"><a class="header-anchor" href="#_3-5-将你的所有缩写放在对象声明的开始"><span>3.5 将你的所有缩写放在对象声明的开始.</span></a></h4><blockquote><p>Why? 这样也是为了更方便的知道有哪些属性用了缩写.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> anakinSkywalker <span class="token operator">=</span> <span class="token string">&#39;Anakin Skywalker&#39;</span>
<span class="token keyword">const</span> lukeSkywalker <span class="token operator">=</span> <span class="token string">&#39;Luke Skywalker&#39;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">episodeOne</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">twoJediWalkIntoACantina</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  lukeSkywalker<span class="token punctuation">,</span>
  <span class="token literal-property property">episodeThree</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mayTheFourth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  anakinSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  lukeSkywalker<span class="token punctuation">,</span>
  anakinSkywalker<span class="token punctuation">,</span>
  <span class="token literal-property property">episodeOne</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">twoJediWalkIntoACantina</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">episodeThree</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mayTheFourth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-6-只对那些无效的标示使用引号-eslint-quote-props" tabindex="-1"><a class="header-anchor" href="#_3-6-只对那些无效的标示使用引号-eslint-quote-props"><span>3.6 只对那些无效的标示使用引号 &#39;&#39;. eslint: <code>quote-props</code></span></a></h4><blockquote><p>Why? 通常我们认为这种方式主观上易读。他优化了代码高亮，并且页更容易被许多 JS 引擎压缩。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> bad <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;foo&#39;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;bar&#39;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;data-blah&#39;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> good <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;data-blah&#39;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-7-不要直接调用object-prototype上的方法-如hasownproperty-propertyisenumerable-isprototypeof。" tabindex="-1"><a class="header-anchor" href="#_3-7-不要直接调用object-prototype上的方法-如hasownproperty-propertyisenumerable-isprototypeof。"><span>3.7 不要直接调用<code>Object.prototype</code>上的方法，如<code>hasOwnProperty</code>, <code>propertyIsEnumerable</code>, <code>isPrototypeOf</code>。</span></a></h4><blockquote><p>Why? 在一些有问题的对象上， 这些方法可能会被屏蔽掉 - 如：{ hasOwnProperty: false } - 或这是一个空对象Object.create(null)</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> has <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>hasOwnProperty<span class="token punctuation">;</span> <span class="token comment">// 在模块作用内做一次缓存</span>
<span class="token comment">/* or */</span>
<span class="token keyword">import</span> has <span class="token keyword">from</span> <span class="token string">&#39;has&#39;</span><span class="token punctuation">;</span> <span class="token comment">// https://www.npmjs.com/package/has</span>
<span class="token comment">// ...</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">has</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-8-对象浅拷贝时-更推荐使用扩展运算符-就是-运算符-而不是object-assign。获取对象指定的几个属性时-用对象的rest解构运算符-也是-运算符-更好。" tabindex="-1"><a class="header-anchor" href="#_3-8-对象浅拷贝时-更推荐使用扩展运算符-就是-运算符-而不是object-assign。获取对象指定的几个属性时-用对象的rest解构运算符-也是-运算符-更好。"><span>3.8 对象浅拷贝时，更推荐使用扩展运算符<code>[就是...运算符]</code>，而不是<code>Object.assign</code>。获取对象指定的几个属性时，用对象的rest解构运算符<code>[也是...运算符]</code>更好。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// very bad</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>original<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this mutates \`original\` ಠ_ಠ</span>
<span class="token keyword">delete</span> copy<span class="token punctuation">.</span>a<span class="token punctuation">;</span> <span class="token comment">// so does this</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> original<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// copy =&gt; { a: 1, b: 2, c: 3 }</span>

<span class="token comment">// good es6扩展运算符 ...</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 浅拷贝</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>original<span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// copy =&gt; { a: 1, b: 2, c: 3 }</span>

<span class="token comment">// rest 赋值运算符</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> <span class="token operator">...</span>noA <span class="token punctuation">}</span> <span class="token operator">=</span> copy<span class="token punctuation">;</span> <span class="token comment">// noA =&gt; { b: 2, c: 3 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arrays" tabindex="-1"><a class="header-anchor" href="#arrays"><span>Arrays</span></a></h3><h4 id="_4-1-用字面量赋值。-eslint-no-array-constructor" tabindex="-1"><a class="header-anchor" href="#_4-1-用字面量赋值。-eslint-no-array-constructor"><span>4.1 用字面量赋值。 eslint: <code>no-array-constructor</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-用array-push-代替直接向数组中添加一个值。" tabindex="-1"><a class="header-anchor" href="#_4-2-用array-push-代替直接向数组中添加一个值。"><span>4.2 用<code>Array#push</code> 代替直接向数组中添加一个值。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> someStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
someStack<span class="token punctuation">[</span>someStack<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;abracadabra&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
someStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;abracadabra&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-用扩展运算符做数组浅拷贝-类似上面的对象浅拷贝" tabindex="-1"><a class="header-anchor" href="#_4-3-用扩展运算符做数组浅拷贝-类似上面的对象浅拷贝"><span>4.3 用扩展运算符做数组浅拷贝，类似上面的对象浅拷贝</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> len <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> i<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  itemsCopy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-用-运算符而不是array-from来将一个可迭代的对象转换成数组。" tabindex="-1"><a class="header-anchor" href="#_4-4-用-运算符而不是array-from来将一个可迭代的对象转换成数组。"><span>4.4 用 <code>...</code> 运算符而不是Array.from来将一个可迭代的对象转换成数组。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> nodes <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> nodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>foo<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-用-array-from-去将一个类数组对象转成一个数组。" tabindex="-1"><a class="header-anchor" href="#_4-5-用-array-from-去将一个类数组对象转成一个数组。"><span>4.5 用 <code>Array.from</code> 去将一个类数组对象转成一个数组。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arrLike <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arrLike<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrLike<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-用-array-from-而不是-运算符去做map遍历。-因为这样可以避免创建一个临时数组。" tabindex="-1"><a class="header-anchor" href="#_4-6-用-array-from-而不是-运算符去做map遍历。-因为这样可以避免创建一个临时数组。"><span>4.6 用 <code>Array.from</code> 而不是 <code>...</code> 运算符去做map遍历。 因为这样可以避免创建一个临时数组。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>foo<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-7-在数组方法的回调函数中使用-return-语句。-如果函数体由一条返回一个表达式的语句组成-并且这个表达式没有副作用-这个时候可以忽略return-详见-8-2-eslint-array-callback-return。" tabindex="-1"><a class="header-anchor" href="#_4-7-在数组方法的回调函数中使用-return-语句。-如果函数体由一条返回一个表达式的语句组成-并且这个表达式没有副作用-这个时候可以忽略return-详见-8-2-eslint-array-callback-return。"><span>4.7 在数组方法的回调函数中使用 <code>return</code> 语句。 如果函数体由一条返回一个表达式的语句组成， 并且这个表达式没有副作用， 这个时候可以忽略<code>return</code>，详见 8.2. eslint: <code>array-callback-return</code>。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good 函数只有一个语句</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad - 没有返回值， 因为在第一次迭代后acc 就变成undefined了</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> flatten <span class="token operator">=</span> acc<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  acc<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> flatten<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token comment">// reduce没有设置初始值，则默认取数组第一个值为初始值</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> flatten <span class="token operator">=</span> acc<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  acc<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> flatten<span class="token punctuation">;</span>
  <span class="token keyword">return</span> flatten<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
inbox<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> subject<span class="token punctuation">,</span> author <span class="token punctuation">}</span> <span class="token operator">=</span> msg<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>subject <span class="token operator">===</span> <span class="token string">&#39;Mockingbird&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> author <span class="token operator">===</span> <span class="token string">&#39;Harper Lee&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
inbox<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> subject<span class="token punctuation">,</span> author <span class="token punctuation">}</span> <span class="token operator">=</span> msg<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>subject <span class="token operator">===</span> <span class="token string">&#39;Mockingbird&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> author <span class="token operator">===</span> <span class="token string">&#39;Harper Lee&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-8-如果一个数组有很多行-在数组的-后和-前断行。-请看下面示例" tabindex="-1"><a class="header-anchor" href="#_4-8-如果一个数组有很多行-在数组的-后和-前断行。-请看下面示例"><span>4.8 如果一个数组有很多行，在数组的 [ 后和 ] 前断行。 请看下面示例</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> objectInArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> numberInArray <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> objectInArray <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> numberInArray <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="destructuring" tabindex="-1"><a class="header-anchor" href="#destructuring"><span>Destructuring</span></a></h3><h4 id="_5-1-用对象的解构赋值来获取和使用对象某个或多个属性值。-eslint-prefer-destructuring" tabindex="-1"><a class="header-anchor" href="#_5-1-用对象的解构赋值来获取和使用对象某个或多个属性值。-eslint-prefer-destructuring"><span>5.1 用对象的解构赋值来获取和使用对象某个或多个属性值。 eslint: <code>prefer-destructuring</code></span></a></h4><blockquote><p>Why? 解构使您不必为这些属性创建临时引用</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> firstName <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName<span class="token punctuation">;</span>
  <span class="token keyword">const</span> lastName <span class="token operator">=</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span> <span class="token operator">=</span> user<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// best</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-用数组解构。" tabindex="-1"><a class="header-anchor" href="#_5-2-用数组解构。"><span>5.2 用数组解构。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> first <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> second <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-3-多个返回值用对象的解构-而不是数组解构。" tabindex="-1"><a class="header-anchor" href="#_5-3-多个返回值用对象的解构-而不是数组解构。"><span>5.3 多个返回值用对象的解构，而不是数组解构。</span></a></h4><blockquote><p>Why? 你可以在后期添加新的属性或者变换变量的顺序而不会打破原有的调用</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">processInput</span><span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 然后就是见证奇迹的时刻</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> top<span class="token punctuation">,</span> bottom<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用者需要想一想返回值的顺序</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> __<span class="token punctuation">,</span> top<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">processInput</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">processInput</span><span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// oops， 奇迹又发生了</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> top<span class="token punctuation">,</span> bottom <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用者只需要选择他想用的值就好了</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> left<span class="token punctuation">,</span> top <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">processInput</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="strings" tabindex="-1"><a class="header-anchor" href="#strings"><span>Strings</span></a></h3><h4 id="_6-1-对string用单引号-。-eslint-quotes" tabindex="-1"><a class="header-anchor" href="#_6-1-对string用单引号-。-eslint-quotes"><span>6.1 对<code>string</code>用单引号 &#39;&#39; 。 eslint: <code>quotes</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;Capt. Janeway&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// bad - 样例应该包含插入文字或换行</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Capt. Janeway</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Capt. Janeway&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-超过100个字符的字符串不应该用string串联成多行。" tabindex="-1"><a class="header-anchor" href="#_6-2-超过100个字符的字符串不应该用string串联成多行。"><span>6.2 超过100个字符的字符串不应该用<code>string</code>串联成多行。</span></a></h4><blockquote><p>Why? 被折断的字符串工作起来是糟糕的而且使得代码更不易被搜索。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> errorMessage <span class="token operator">=</span> <span class="token string">&#39;This is a super long error that was thrown because \\
of Batman. When you stop to think about how Batman had anything to do \\
with this, you would get nowhere \\
fast.&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> errorMessage <span class="token operator">=</span> <span class="token string">&#39;This is a super long error that was thrown because &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;of Batman. When you stop to think about how Batman had anything to do &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;with this, you would get nowhere fast.&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> errorMessage <span class="token operator">=</span> <span class="token string">&#39;This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3-用字符串模板而不是字符串拼接来组织可编程字符串。-eslint-prefer-template-template-curly-spacing" tabindex="-1"><a class="header-anchor" href="#_6-3-用字符串模板而不是字符串拼接来组织可编程字符串。-eslint-prefer-template-template-curly-spacing"><span>6.3 用字符串模板而不是字符串拼接来组织可编程字符串。 eslint: <code>prefer-template</code> <code>template-curly-spacing</code></span></a></h4><blockquote><p>Why? 模板字符串更具可读性、语法简洁、字符串插入参数。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;How are you, &#39;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;How are you, &#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">How are you, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> name <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">How are you, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-永远不要在字符串中用eval-他就是潘多拉盒子。-eslint-no-eval" tabindex="-1"><a class="header-anchor" href="#_6-4-永远不要在字符串中用eval-他就是潘多拉盒子。-eslint-no-eval"><span>6.4 永远不要在字符串中用<code>eval()</code>，他就是潘多拉盒子。 eslint: <code>no-eval</code></span></a></h4><h4 id="_6-5-不要使用不必要的转义字符。eslint-no-useless-escape" tabindex="-1"><a class="header-anchor" href="#_6-5-不要使用不必要的转义字符。eslint-no-useless-escape"><span>6.5 不要使用不必要的转义字符。eslint: <code>no-useless-escape</code></span></a></h4><blockquote><p>Why? 反斜线可读性差，所以他们只在必须使用时才出现哦</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;\\&#39;this\\&#39; \\i\\s \\&quot;quoted\\&quot;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;\\&#39;this\\&#39; is &quot;quoted&quot;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//best</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">my name is &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions"><span>Functions</span></a></h3><h4 id="_7-1-用命名函数表达式而不是函数声明。eslint-func-style" tabindex="-1"><a class="header-anchor" href="#_7-1-用命名函数表达式而不是函数声明。eslint-func-style"><span>7.1 用命名函数表达式而不是函数声明。eslint: <code>func-style</code></span></a></h4><blockquote><p>函数表达式： const func = function () {}</p></blockquote><blockquote><p>函数声明： function func() {}</p></blockquote><blockquote><p>Why? 函数声明时作用域被提前了，这意味着在一个文件里函数很容易（太容易了）在其定义之前被引用。这样伤害了代码可读性和可维护性。如果你发现一个函数又大又复杂，这个函数妨碍这个文件其他部分的理解性，这可能就是时候把这个函数单独抽成一个模块了。别忘了给表达式显示的命名，不用管这个名字是不是由一个确定的变量推断出来的，这消除了由匿名函数在错误调用栈产生的所有假设，这在现代浏览器和类似babel编译器中很常见 (Discussion)</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token comment">// lexical name distinguished from the variable-referenced invocation(s)</span>
<span class="token comment">// 函数表达式名和声明的函数名是不一样的</span>
<span class="token keyword">const</span> <span class="token function-variable function">short</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">longUniqueMoreDescriptiveLexicalFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-2-把立即执行函数包裹在圆括号里。-eslint-wrap-iife" tabindex="-1"><a class="header-anchor" href="#_7-2-把立即执行函数包裹在圆括号里。-eslint-wrap-iife"><span>7.2 把立即执行函数包裹在圆括号里。 eslint: <code>wrap-iife</code></span></a></h4><blockquote><p>Why? immediately invoked function expression = IIFE Why? 一个立即调用的函数表达式是一个单元 - 把它和他的调用者（圆括号）包裹起来，在括号中可以清晰的地表达这些。 Why? 注意：在模块化世界里，你几乎用不着 IIFE</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// immediately-invoked function expression (IIFE)</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Welcome to the Internet. Please follow me.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-2-1-iife" tabindex="-1"><a class="header-anchor" href="#_7-2-1-iife"><span>7.2.1 IIFE</span></a></h4><p>IIFE: Immediately Invoked Function Expression，意为立即调用的函数表达式，也就是说，声明函数的同时立即调用这个函数。</p><ul><li>不采用IIFE时的函数声明和函数调用：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>IIFE形式的函数调用：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数的声明和IIFE的区别在于，在函数的声明中，我们首先看到的是function关键字，而IIFE我们首先看到的是左边的（。也就是说，使用一对（）将函数的声明括起来，使得JS编译器不再认为这是一个函数声明，而是一个IIFE，即需要立刻执行声明的函数。 两者达到的目的是相同的，都是声明了一个函数foo并且随后调用函数foo。</p><h4 id="_7-3-不要在非函数块-if、while等等-内声明函数。把这个函数分配给一个变量。浏览器会允许你这样做-但浏览器解析方式不同-这是一个坏消息。【详见no-loop-func】-eslint-no-loop-func" tabindex="-1"><a class="header-anchor" href="#_7-3-不要在非函数块-if、while等等-内声明函数。把这个函数分配给一个变量。浏览器会允许你这样做-但浏览器解析方式不同-这是一个坏消息。【详见no-loop-func】-eslint-no-loop-func"><span>7.3 不要在非函数块（<code>if</code>、<code>while</code>等等）内声明函数。把这个函数分配给一个变量。浏览器会允许你这样做，但浏览器解析方式不同，这是一个坏消息。【详见no-loop-func】 eslint: <code>no-loop-func</code></span></a></h4><h4 id="_7-4-note-在ecma-262中-块-block-的定义是-一系列的语句-但是函数声明不是一个语句。-函数表达式是一个语句。" tabindex="-1"><a class="header-anchor" href="#_7-4-note-在ecma-262中-块-block-的定义是-一系列的语句-但是函数声明不是一个语句。-函数表达式是一个语句。"><span>7.4 Note: 在ECMA-262中 [块 <code>block</code>] 的定义是： 一系列的语句； 但是函数声明不是一个语句。 函数表达式是一个语句。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>currentUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Nope.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">let</span> test<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>currentUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Yup.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-5-不要用arguments命名参数。他的优先级高于每个函数作用域自带的arguments对象-这会导致函数自带的arguments值被覆盖" tabindex="-1"><a class="header-anchor" href="#_7-5-不要用arguments命名参数。他的优先级高于每个函数作用域自带的arguments对象-这会导致函数自带的arguments值被覆盖"><span>7.5 不要用<code>arguments</code>命名参数。他的优先级高于每个函数作用域自带的<code>arguments</code>对象， 这会导致函数自带的<code>arguments</code>值被覆盖</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> options<span class="token punctuation">,</span> arguments</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> options<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-6-不要使用arguments-用rest语法-代替。-eslint-prefer-rest-params" tabindex="-1"><a class="header-anchor" href="#_7-6-不要使用arguments-用rest语法-代替。-eslint-prefer-rest-params"><span>7.6 不要使用<code>arguments</code>，用rest语法<code>...</code>代替。 eslint: <code>prefer-rest-params</code></span></a></h4><blockquote><p>Why? ...明确你想用那个参数。而且rest参数是真数组，而不是类似数组的arguments</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">concatenateAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">concatenateAll</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-7-用默认参数语法而不是在函数里对参数重新赋值。" tabindex="-1"><a class="header-anchor" href="#_7-7-用默认参数语法而不是在函数里对参数重新赋值。"><span>7.7 用默认参数语法而不是在函数里对参数重新赋值。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// really bad</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 不， 我们不该改arguments</span>
  <span class="token comment">// 第二： 如果 opts 的值为 false, 它会被赋值为 {}</span>
  <span class="token comment">// 虽然你想这么写， 但是这个会带来一些细微的bug</span>
  opts <span class="token operator">=</span> opts <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// still bad</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-8-默认参数避免副作用" tabindex="-1"><a class="header-anchor" href="#_7-8-默认参数避免副作用"><span>7.8 默认参数避免副作用</span></a></h4><blockquote><p>Why? 他会令人迷惑不解， 比如下面这个， a到底等于几， 这个需要想一下。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> b<span class="token operator">++</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 2</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-9-把默认参数赋值放在最后" tabindex="-1"><a class="header-anchor" href="#_7-9-把默认参数赋值放在最后"><span>7.9 把默认参数赋值放在最后</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-10-不要用函数构造器创建函数。-eslint-no-new-func" tabindex="-1"><a class="header-anchor" href="#_7-10-不要用函数构造器创建函数。-eslint-no-new-func"><span>7.10 不要用函数构造器创建函数。 eslint: <code>no-new-func</code></span></a></h4><blockquote><p>Why? 以这种方式创建函数将类似于字符串 eval()，这会打开漏洞。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> add <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;return a + b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// still bad</span>
<span class="token keyword">var</span> subtract <span class="token operator">=</span> <span class="token function">Function</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;return a - b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-11-函数签名部分要有空格。eslint-space-before-function-paren-space-before-blocks" tabindex="-1"><a class="header-anchor" href="#_7-11-函数签名部分要有空格。eslint-space-before-function-paren-space-before-blocks"><span>7.11 函数签名部分要有空格。eslint: <code>space-before-function-paren</code> <code>space-before-blocks</code></span></a></h4><blockquote><p>Why? 统一性好，而且在你添加/删除一个名字的时候不需要添加/删除空格</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">g</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">h</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">y</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-12-不要改参数-eslint-no-param-reassign" tabindex="-1"><a class="header-anchor" href="#_7-12-不要改参数-eslint-no-param-reassign"><span>7.12 不要改参数. eslint: <code>no-param-reassign</code></span></a></h4><blockquote><p>Why? 操作参数对象对原始调用者会导致意想不到的副作用。 就是不要改参数的数据结构，保留参数原始值和数据结构。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span>key <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> obj<span class="token punctuation">.</span>key <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-13-不要对参数重新赋值。-eslint-no-param-reassign" tabindex="-1"><a class="header-anchor" href="#_7-13-不要对参数重新赋值。-eslint-no-param-reassign"><span>7.13 不要对参数重新赋值。 eslint: <code>no-param-reassign</code></span></a></h4><blockquote><p>Why? 参数重新赋值会导致意外行为，尤其是对 arguments。这也会导致优化问题，特别是在V8里</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> a <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f4</span><span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-14-用spread操作符-去调用多变的函数更好。-eslint-prefer-spread" tabindex="-1"><a class="header-anchor" href="#_7-14-用spread操作符-去调用多变的函数更好。-eslint-prefer-spread"><span>7.14 用spread操作符...去调用多变的函数更好。 eslint: <code>prefer-spread</code></span></a></h4><blockquote><p>Why? 这样更清晰，你不必提供上下文，而且你不能轻易地用apply来组成new</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>console<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>Date<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2016</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2016</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-15-调用或者书写一个包含多个参数的函数应该像这个指南里的其他多行代码写法一样-每行值包含一个参数-每行逗号结尾。" tabindex="-1"><a class="header-anchor" href="#_7-15-调用或者书写一个包含多个参数的函数应该像这个指南里的其他多行代码写法一样-每行值包含一个参数-每行逗号结尾。"><span>7.15 调用或者书写一个包含多个参数的函数应该像这个指南里的其他多行代码写法一样： 每行值包含一个参数，每行逗号结尾。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">bar<span class="token punctuation">,</span>
             baz<span class="token punctuation">,</span>
             quux</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good 缩进不要太过分</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>
  <span class="token parameter">bar<span class="token punctuation">,</span>
  baz<span class="token punctuation">,</span>
  quux<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span>
  bar<span class="token punctuation">,</span>
  baz<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
  foo<span class="token punctuation">,</span>
  bar<span class="token punctuation">,</span>
  baz<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arrow-functions" tabindex="-1"><a class="header-anchor" href="#arrow-functions"><span>Arrow Functions</span></a></h3><h4 id="_8-1-当你一定要用函数表达式-在回调函数里-的时候就用箭头表达式吧。-eslint-prefer-arrow-callback-arrow-spacing" tabindex="-1"><a class="header-anchor" href="#_8-1-当你一定要用函数表达式-在回调函数里-的时候就用箭头表达式吧。-eslint-prefer-arrow-callback-arrow-spacing"><span>8.1 当你一定要用函数表达式（在回调函数里）的时候就用箭头表达式吧。 eslint: <code>prefer-arrow-callback</code>, <code>arrow-spacing</code></span></a></h4><blockquote><p>Why? 他创建了一个this的当前执行上下文的函数的版本，这通常就是你想要的；而且箭头函数是更简洁的语法</p></blockquote><blockquote><p>Why? 什么时候不用箭头函数： 如果你有一个相当复杂的函数，你可能会把这个逻辑移出到他自己的函数声明里。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-2-如果函数体由一个没有副作用的表达式语句组成-删除大括号和return。否则-继续用大括号和-return-语句。-eslint-arrow-parens-arrow-body-style" tabindex="-1"><a class="header-anchor" href="#_8-2-如果函数体由一个没有副作用的表达式语句组成-删除大括号和return。否则-继续用大括号和-return-语句。-eslint-arrow-parens-arrow-body-style"><span>8.2 如果函数体由一个没有副作用的表达式语句组成，删除大括号和<code>return</code>。否则，继续用大括号和 <code>return</code> 语句。 eslint: <code>arrow-parens</code>, <code>arrow-body-style</code></span></a></h4><blockquote><p>Why? 语法糖，当多个函数链在一起的时候好读</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nextNumber <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A string containing the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nextNumber<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">number</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A string containing the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nextNumber <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A string containing the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nextNumber<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">:</span> number
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 表达式有副作用就不要用隐式return</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something if callback returns true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> bool <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token comment">// 这种情况会return bool = true, 不好</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> bool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  bool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-3-万一表达式涉及多行-把他包裹在圆括号里更可读。" tabindex="-1"><a class="header-anchor" href="#_8-3-万一表达式涉及多行-把他包裹在圆括号里更可读。"><span>8.3 万一表达式涉及多行，把他包裹在圆括号里更可读。</span></a></h4><blockquote><p>Why? 这样清晰的显示函数的开始和结束</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">httpMethod</span> <span class="token operator">=&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
    httpMagicObjectWithAVeryLongName<span class="token punctuation">,</span>
    httpMethod
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">httpMethod</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
    httpMagicObjectWithAVeryLongName<span class="token punctuation">,</span>
    httpMethod
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-4-如果你的函数只有一个参数并且函数体没有大括号-就删除圆括号。否则-参数总是放在圆括号里。-注意-一直用圆括号也是没问题-只需要配置-always-option-for-eslint-eslint-arrow-parens" tabindex="-1"><a class="header-anchor" href="#_8-4-如果你的函数只有一个参数并且函数体没有大括号-就删除圆括号。否则-参数总是放在圆括号里。-注意-一直用圆括号也是没问题-只需要配置-always-option-for-eslint-eslint-arrow-parens"><span>8.4 如果你的函数只有一个参数并且函数体没有大括号，就删除圆括号。否则，参数总是放在圆括号里。 注意： 一直用圆括号也是没问题，只需要配置 “always” option for eslint. eslint: <code>arrow-parens</code></span></a></h4><blockquote><p>Why? 这样少一些混乱， 其实没啥语法上的讲究，就保持一个风格。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A long string with the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. It’s so long that we don’t want it to take up space on the .map line!</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-5-避免箭头函数-和比较操作符-混淆-eslint-no-confusing-arrow" tabindex="-1"><a class="header-anchor" href="#_8-5-避免箭头函数-和比较操作符-混淆-eslint-no-confusing-arrow"><span>8.5 避免箭头函数(<code>=&gt;</code>)和比较操作符（<code>&lt;=</code>, <code>&gt;=</code>）混淆. eslint: <code>no-confusing-arrow</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">itemHeight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>height <span class="token operator">&lt;=</span> <span class="token number">256</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>largeSize <span class="token operator">:</span> item<span class="token punctuation">.</span>smallSize<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">itemHeight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>height <span class="token operator">&gt;=</span> <span class="token number">256</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>largeSize <span class="token operator">:</span> item<span class="token punctuation">.</span>smallSize<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token function-variable function">itemHeight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>height <span class="token operator">&lt;=</span> <span class="token number">256</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>largeSize <span class="token operator">:</span> item<span class="token punctuation">.</span>smallSize<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token function-variable function">itemHeight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> height<span class="token punctuation">,</span> largeSize<span class="token punctuation">,</span> smallSize <span class="token punctuation">}</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
  <span class="token keyword">return</span> height <span class="token operator">&lt;=</span> <span class="token number">256</span> <span class="token operator">?</span> largeSize <span class="token operator">:</span> smallSize<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-6-在隐式return中强制约束函数体的位置-就写在箭头后面。-eslint-implicit-arrow-linebreak" tabindex="-1"><a class="header-anchor" href="#_8-6-在隐式return中强制约束函数体的位置-就写在箭头后面。-eslint-implicit-arrow-linebreak"><span>8.6 在隐式<code>return</code>中强制约束函数体的位置， 就写在箭头后面。 eslint: <code>implicit-arrow-linebreak</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  bar<span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
   bar
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="classes-constructors" tabindex="-1"><a class="header-anchor" href="#classes-constructors"><span>Classes &amp; Constructors</span></a></h3><h4 id="_9-1-常用class-避免直接操作prototype" tabindex="-1"><a class="header-anchor" href="#_9-1-常用class-避免直接操作prototype"><span>9.1 常用class，避免直接操作prototype</span></a></h4><blockquote><p>Why? class语法更简洁更易理解</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">Queue</span><span class="token punctuation">(</span><span class="token parameter">contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>contents<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Queue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>contents<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-2-用extends实现继承" tabindex="-1"><a class="header-anchor" href="#_9-2-用extends实现继承"><span>9.2 用extends实现继承</span></a></h4><blockquote><p>Why? 它是一种内置的方法来继承原型功能而不打破instanceof</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> inherits <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;inherits&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">PeekableQueue</span><span class="token punctuation">(</span><span class="token parameter">contents</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Queue</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">inherits</span><span class="token punctuation">(</span>PeekableQueue<span class="token punctuation">,</span> Queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">PeekableQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">peek</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">PeekableQueue</span> <span class="token keyword">extends</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-3-方法可以返回this来实现方法链" tabindex="-1"><a class="header-anchor" href="#_9-3-方法可以返回this来实现方法链"><span>9.3 方法可以返回this来实现方法链</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">jump</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>jumping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setHeight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
luke<span class="token punctuation">.</span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; true</span>
luke<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>jumping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

luke<span class="token punctuation">.</span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-4-写一个定制的tostring-方法是可以的-只要保证它是可以正常工作且没有副作用的" tabindex="-1"><a class="header-anchor" href="#_9-4-写一个定制的tostring-方法是可以的-只要保证它是可以正常工作且没有副作用的"><span>9.4 写一个定制的<code>toString()</code>方法是可以的，只要保证它是可以正常工作且没有副作用的</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> options<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&#39;no name&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Jedi - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-5-如果没有具体说明-类有默认的构造方法。一个空的构造函数或只是代表父类的构造函数是不需要写的。-eslint-no-useless-constructor" tabindex="-1"><a class="header-anchor" href="#_9-5-如果没有具体说明-类有默认的构造方法。一个空的构造函数或只是代表父类的构造函数是不需要写的。-eslint-no-useless-constructor"><span>9.5 如果没有具体说明，类有默认的构造方法。一个空的构造函数或只是代表父类的构造函数是不需要写的。 eslint: <code>no-useless-constructor</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Rey</span> <span class="token keyword">extends</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这种构造函数是不需要写的</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Rey</span> <span class="token keyword">extends</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Rey&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-6-避免重复类成员。-eslint-no-dupe-class-members" tabindex="-1"><a class="header-anchor" href="#_9-6-避免重复类成员。-eslint-no-dupe-class-members"><span>9.6 避免重复类成员。 eslint: <code>no-dupe-class-members</code></span></a></h4><blockquote><p>Why? 重复类成员会默默的执行最后一个 —— 重复本身也是一个bug</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-7-除非外部库或框架需要使用特定的非静态方法-否则类方法应该使用this或被做成静态方法。-作为一个实例方法应该表明它根据接收者的属性有不同的行为。eslint-class-methods-use-this" tabindex="-1"><a class="header-anchor" href="#_9-7-除非外部库或框架需要使用特定的非静态方法-否则类方法应该使用this或被做成静态方法。-作为一个实例方法应该表明它根据接收者的属性有不同的行为。eslint-class-methods-use-this"><span>9.7 除非外部库或框架需要使用特定的非静态方法，否则类方法应该使用this或被做成静态方法。 作为一个实例方法应该表明它根据接收者的属性有不同的行为。eslint: <code>class-methods-use-this</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good - this 被使用了</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good - constructor 不一定要使用this</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good - 静态方法不需要使用 this</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="modules" tabindex="-1"><a class="header-anchor" href="#modules"><span>Modules</span></a></h3><h4 id="_10-1-用-import-export-模块而不是无标准的模块系统。你可以随时转到你喜欢的模块系统。" tabindex="-1"><a class="header-anchor" href="#_10-1-用-import-export-模块而不是无标准的模块系统。你可以随时转到你喜欢的模块系统。"><span>10.1 用(<code>import/export</code>) 模块而不是无标准的模块系统。你可以随时转到你喜欢的模块系统。</span></a></h4><blockquote><p>Why? 模块化是未来，让我们现在就开启未来吧。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> AirbnbStyleGuide <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> AirbnbStyleGuide<span class="token punctuation">.</span>es6<span class="token punctuation">;</span>

<span class="token comment">// ok</span>
<span class="token keyword">import</span> AirbnbStyleGuide <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> AirbnbStyleGuide<span class="token punctuation">.</span>es6<span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-2-不要用import通配符-就是-这种方式" tabindex="-1"><a class="header-anchor" href="#_10-2-不要用import通配符-就是-这种方式"><span>10.2 不要用import通配符， 就是 * 这种方式</span></a></h4><blockquote><p>Why? 这确保你有单个默认的导出</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> AirbnbStyleGuide <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> AirbnbStyleGuide <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-3-不要直接从import中直接export" tabindex="-1"><a class="header-anchor" href="#_10-3-不要直接从import中直接export"><span>10.3 不要直接从<code>import</code>中直接<code>export</code></span></a></h4><blockquote><p>Why? 虽然一行是简洁的，有一个明确的方式进口和一个明确的出口方式来保证一致性。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token comment">// filename es6.js</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> es6 <span class="token keyword">as</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token comment">// filename es6.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-4-一个路径只-import-一次。-eslint-no-duplicate-imports" tabindex="-1"><a class="header-anchor" href="#_10-4-一个路径只-import-一次。-eslint-no-duplicate-imports"><span>10.4 一个路径只 <code>import</code> 一次。 eslint: <code>no-duplicate-imports</code></span></a></h4><blockquote><p>Why? 从同一个路径下import多行会使代码难以维护</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// … some other imports … //</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> named1<span class="token punctuation">,</span> named2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> foo<span class="token punctuation">,</span> <span class="token punctuation">{</span> named1<span class="token punctuation">,</span> named2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> foo<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  named1<span class="token punctuation">,</span>
  named2<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-5-不要导出可变的东西-eslint-import-no-mutable-exports" tabindex="-1"><a class="header-anchor" href="#_10-5-不要导出可变的东西-eslint-import-no-mutable-exports"><span>10.5 不要导出可变的东西 eslint: <code>import/no-mutable-exports</code></span></a></h4><blockquote><p>Why? 变化通常都是需要避免，特别是当你要输出可变的绑定。虽然在某些场景下可能需要这种技术，但总的来说应该导出常量。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-6-在一个单一导出模块里-用-export-default-更好。-eslint-import-prefer-default-export" tabindex="-1"><a class="header-anchor" href="#_10-6-在一个单一导出模块里-用-export-default-更好。-eslint-import-prefer-default-export"><span>10.6 在一个单一导出模块里，用 <code>export default</code> 更好。 eslint: <code>import/prefer-default-export</code></span></a></h4><blockquote><p>Why? 鼓励使用更多文件，每个文件只做一件事情并导出，这样可读性和可维护性更好。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-7-import-放在其他所有语句之前。-eslint-import-first" tabindex="-1"><a class="header-anchor" href="#_10-7-import-放在其他所有语句之前。-eslint-import-first"><span>10.7 import 放在其他所有语句之前。 eslint: <code>import/first</code></span></a></h4><blockquote><p>Why? 让import放在最前面防止意外行为。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> bar <span class="token keyword">from</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> bar <span class="token keyword">from</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>

foo<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-8-多行import应该缩进-就像多行数组和对象字面量" tabindex="-1"><a class="header-anchor" href="#_10-8-多行import应该缩进-就像多行数组和对象字面量"><span>10.8 多行<code>import</code>应该缩进，就像多行数组和对象字面量</span></a></h4><blockquote><p>Why? 花括号与样式指南中每个其他花括号块遵循相同的缩进规则，逗号也是。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>longNameA<span class="token punctuation">,</span> longNameB<span class="token punctuation">,</span> longNameC<span class="token punctuation">,</span> longNameD<span class="token punctuation">,</span> longNameE<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  longNameA<span class="token punctuation">,</span>
  longNameB<span class="token punctuation">,</span>
  longNameC<span class="token punctuation">,</span>
  longNameD<span class="token punctuation">,</span>
  longNameE<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-9-在import语句里不允许webpack-loader语法-eslint-import-no-webpack-loader-syntax" tabindex="-1"><a class="header-anchor" href="#_10-9-在import语句里不允许webpack-loader语法-eslint-import-no-webpack-loader-syntax"><span>10.9 在import语句里不允许Webpack loader语法 eslint: <code>import/no-webpack-loader-syntax</code></span></a></h4><blockquote><p>Why? 一旦用Webpack语法在import里会把代码耦合到模块绑定器。最好是在webpack.config.js里写webpack loader语法</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> fooSass <span class="token keyword">from</span> <span class="token string">&#39;css!sass!foo.scss&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> barCss <span class="token keyword">from</span> <span class="token string">&#39;style!css!bar.css&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> fooSass <span class="token keyword">from</span> <span class="token string">&#39;foo.scss&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> barCss <span class="token keyword">from</span> <span class="token string">&#39;bar.css&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iterators-and-generators" tabindex="-1"><a class="header-anchor" href="#iterators-and-generators"><span>Iterators and Generators</span></a></h3><h4 id="_11-1-不要用遍历器。用javascript高级函数代替for-in、-for-of。-eslint-no-iterator-no-restricted-syntax" tabindex="-1"><a class="header-anchor" href="#_11-1-不要用遍历器。用javascript高级函数代替for-in、-for-of。-eslint-no-iterator-no-restricted-syntax"><span>11.1 不要用遍历器。用JavaScript高级函数代替for-in、 for-of。 eslint: <code>no-iterator no-restricted-syntax</code></span></a></h4><blockquote><p>Why? 这强调了我们不可变的规则。 处理返回值的纯函数比副作用更容易。</p></blockquote><blockquote><p>Why?用数组的这些迭代方法：</p><ul><li>map()</li><li>every()</li><li>filter()</li><li>find()</li><li>findIndex()</li><li>reduce()</li><li>some()</li><li>... ,</li></ul><p>用对象的这些方法</p><ul><li>Object.keys()</li><li>Object.values()</li><li>Object.entries()</li></ul><p>去产生一个数组， 这样你就能去遍历对象了。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
sum <span class="token operator">===</span> <span class="token number">15</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">num</span> <span class="token operator">=&gt;</span> sum <span class="token operator">+=</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
sum <span class="token operator">===</span> <span class="token number">15</span><span class="token punctuation">;</span>

<span class="token comment">// best (use the functional force)</span>
<span class="token keyword">const</span> sum <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> total <span class="token operator">+</span> num<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sum <span class="token operator">===</span> <span class="token number">15</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> increasedByOne <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  increasedByOne<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> increasedByOne <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">num</span> <span class="token operator">=&gt;</span> increasedByOne<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// best (keeping it functional)</span>
<span class="token keyword">const</span> increasedByOne <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">num</span> <span class="token operator">=&gt;</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11-2-现在不要用generator" tabindex="-1"><a class="header-anchor" href="#_11-2-现在不要用generator"><span>11.2 现在不要用generator</span></a></h4><blockquote><p>Why? 它在es5上支持的不好</p></blockquote><h4 id="_11-3-如果你一定要用-或者你忽略我们的建议-请确保它们的函数签名空格是得当的。-eslint-generator-star-spacing" tabindex="-1"><a class="header-anchor" href="#_11-3-如果你一定要用-或者你忽略我们的建议-请确保它们的函数签名空格是得当的。-eslint-generator-star-spacing"><span>11.3 如果你一定要用，或者你忽略我们的建议, 请确保它们的函数签名空格是得当的。 eslint: <code>generator-star-spacing</code></span></a></h4><blockquote><p>Why? function 和 * 是同一概念关键字 - <em>不是function的修饰符，function</em>是一个和function不一样的独特结构</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">baz</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">quux</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span><span class="token operator">*</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// very bad</span>
<span class="token keyword">function</span>
<span class="token operator">*</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// very bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">wat</span> <span class="token operator">=</span> <span class="token keyword">function</span>
<span class="token operator">*</span>
<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h3><h4 id="_12-1-访问属性时使用点符号-eslint-dot-notation" tabindex="-1"><a class="header-anchor" href="#_12-1-访问属性时使用点符号-eslint-dot-notation"><span>12.1 访问属性时使用点符号. eslint: <code>dot-notation</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">jedi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> isJedi <span class="token operator">=</span> luke<span class="token punctuation">[</span><span class="token string">&#39;jedi&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> isJedi <span class="token operator">=</span> luke<span class="token punctuation">.</span>jedi<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-2-当获取的属性是变量时用方括号-取。" tabindex="-1"><a class="header-anchor" href="#_12-2-当获取的属性是变量时用方括号-取。"><span>12.2 当获取的属性是变量时用方括号<code>[]</code>取。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">jedi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getProp</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> luke<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isJedi <span class="token operator">=</span> <span class="token function">getProp</span><span class="token punctuation">(</span><span class="token string">&#39;jedi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-3-做幂运算时用幂操作符-。-eslint-no-restricted-properties" tabindex="-1"><a class="header-anchor" href="#_12-3-做幂运算时用幂操作符-。-eslint-no-restricted-properties"><span>12.3 做幂运算时用幂操作符 <code>**</code> 。 eslint: <code>no-restricted-properties</code>.</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> binary <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> binary <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables"><span>Variables</span></a></h3><h4 id="_13-1-用const或let声明变量。不这样做会导致全局变量。-我们想要避免污染全局命名空间。首长这样警告我们。-eslint-no-undef-prefer-const" tabindex="-1"><a class="header-anchor" href="#_13-1-用const或let声明变量。不这样做会导致全局变量。-我们想要避免污染全局命名空间。首长这样警告我们。-eslint-no-undef-prefer-const"><span>13.1 用<code>const</code>或<code>let</code>声明变量。不这样做会导致全局变量。 我们想要避免污染全局命名空间。首长这样警告我们。 eslint: <code>no-undef</code> <code>prefer-const</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
superPower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> superPower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-2-每个变量都用一个-const-或-let-。-eslint-one-var" tabindex="-1"><a class="header-anchor" href="#_13-2-每个变量都用一个-const-或-let-。-eslint-one-var"><span>13.2 每个变量都用一个 const 或 let 。 eslint: <code>one-var</code></span></a></h4><blockquote><p>Why? 这种方式很容易去声明新的变量，你不用去考虑把;调换成,，或者引入一个只有标点的不同的变化。这种做法也可以是你在调试的时候单步每个声明语句，而不是一下跳过所有声明。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    dragonball <span class="token operator">=</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token comment">// (compare to above, and try to spot the mistake)</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    dragonball <span class="token operator">=</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dragonball <span class="token operator">=</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-3-const放一起-let放一起" tabindex="-1"><a class="header-anchor" href="#_13-3-const放一起-let放一起"><span>13.3 const放一起，let放一起</span></a></h4><blockquote><p>Why? 在你需要分配一个新的变量， 而这个变量依赖之前分配过的变量的时候，这种做法是有帮助的</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> i<span class="token punctuation">,</span> len<span class="token punctuation">,</span> dragonball<span class="token punctuation">,</span>
    items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">let</span> i<span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> dragonball<span class="token punctuation">;</span>
<span class="token keyword">const</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> len<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> dragonball<span class="token punctuation">;</span>
<span class="token keyword">let</span> i<span class="token punctuation">;</span>
<span class="token keyword">let</span> length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-4-在你需要的地方声明变量-但是要放在合理的位置" tabindex="-1"><a class="header-anchor" href="#_13-4-在你需要的地方声明变量-但是要放在合理的位置"><span>13.4 在你需要的地方声明变量，但是要放在合理的位置</span></a></h4><blockquote><p>Why? let 和 const 都是块级作用域而不是函数级作用域</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad - unnecessary function call</span>
<span class="token keyword">function</span> <span class="token function">checkName</span><span class="token punctuation">(</span><span class="token parameter">hasName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>hasName <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">checkName</span><span class="token punctuation">(</span><span class="token parameter">hasName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>hasName <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 在需要的时候分配</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-5-不要使用链接变量分配。-eslint-no-multi-assign" tabindex="-1"><a class="header-anchor" href="#_13-5-不要使用链接变量分配。-eslint-no-multi-assign"><span>13.5 不要使用链接变量分配。 eslint: <code>no-multi-assign</code></span></a></h4><blockquote><p>Why? 链接变量分配创建隐式全局变量。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// JavaScript 将这一段解释为</span>
  <span class="token comment">// let a = ( b = ( c = 1 ) );</span>
  <span class="token comment">// let 只对变量 a 起作用; 变量 b 和 c 都变成了全局变量</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>

<span class="token comment">// good</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
  <span class="token keyword">let</span> c <span class="token operator">=</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>

<span class="token comment">// \`const\` 也是如此</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-6-不要使用一元自增自减运算符-eslint-no-plusplus" tabindex="-1"><a class="header-anchor" href="#_13-6-不要使用一元自增自减运算符-eslint-no-plusplus"><span>13.6 不要使用一元自增自减运算符（++， --）. eslint: <code>no-plusplus</code></span></a></h4><blockquote><p>Why? 根据eslint文档，一元增量和减量语句受到自动分号插入的影响，并且可能会导致应用程序中的值递增或递减的无声错误。 使用num + = 1而不是num ++或num ++语句来表达你的值也是更有表现力的。 禁止一元增量和减量语句还会阻止您无意地预增/预减值，这也会导致程序出现意外行为。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code> <span class="token comment">// bad</span>

  <span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  num<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token operator">--</span>num<span class="token punctuation">;</span>

  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> truthyCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> value <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    sum <span class="token operator">+=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      truthyCount<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// good</span>

  <span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  num <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  num <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> sum <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> truthyCount <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-7-在赋值的时候避免在-前-后换行。-如果你的赋值语句超出-max-len-那就用小括号把这个值包起来再换行。-eslint-operator-linebreak" tabindex="-1"><a class="header-anchor" href="#_13-7-在赋值的时候避免在-前-后换行。-如果你的赋值语句超出-max-len-那就用小括号把这个值包起来再换行。-eslint-operator-linebreak"><span>13.7 在赋值的时候避免在 = 前/后换行。 如果你的赋值语句超出 max-len， 那就用小括号把这个值包起来再换行。 eslint: <code>operator-linebreak</code>.</span></a></h4><blockquote><p>Why? 在 = 附近换行容易混淆这个赋值语句。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span>
  <span class="token function">superLongLongLongLongLongLongLongLongFunctionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> foo
  <span class="token operator">=</span> <span class="token string">&#39;superLongLongLongLongLongLongLongLongString&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token function">superLongLongLongLongLongLongLongLongFunctionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;superLongLongLongLongLongLongLongLongString&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-8-不允许有未使用的变量。-eslint-no-unused-vars" tabindex="-1"><a class="header-anchor" href="#_13-8-不允许有未使用的变量。-eslint-no-unused-vars"><span>13.8 不允许有未使用的变量。 eslint: <code>no-unused-vars</code></span></a></h4><blockquote><p>Why? 一个声明了但未使用的变量更像是由于重构未完成产生的错误。这种在代码中出现的变量会使阅读者迷惑。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>

<span class="token keyword">var</span> some_unused_var <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>

<span class="token comment">// 写了没用</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">// 变量改了自己的值，也没有用这个变量</span>
<span class="token keyword">var</span> z <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
z <span class="token operator">=</span> z <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// 参数定义了但未使用</span>
<span class="token keyword">function</span> <span class="token function">getX</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getXPlusY</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token function">getXPlusY</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// &#39;type&#39; 即使没有使用也可以可以被忽略， 因为这个有一个 rest 取值的属性。</span>
<span class="token comment">// 这是从对象中抽取一个忽略特殊字段的对象的一种形式</span>
<span class="token keyword">var</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> <span class="token operator">...</span>coords <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>
<span class="token comment">// &#39;coords&#39; 现在就是一个没有 &#39;type&#39; 属性的 &#39;data&#39; 对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hoisting" tabindex="-1"><a class="header-anchor" href="#hoisting"><span>Hoisting</span></a></h3><h4 id="_14-1-var声明会被提前到他的作用域的最前面-它分配的值还没有提前。const-和-let被赋予了新的调用概念时效区-——-temporal-dead-zones-tdz-。-重要的是要知道为什么-typeof不再安全" tabindex="-1"><a class="header-anchor" href="#_14-1-var声明会被提前到他的作用域的最前面-它分配的值还没有提前。const-和-let被赋予了新的调用概念时效区-——-temporal-dead-zones-tdz-。-重要的是要知道为什么-typeof不再安全"><span>14.1 var声明会被提前到他的作用域的最前面，它分配的值还没有提前。const 和 let被赋予了新的调用概念时效区 —— Temporal Dead Zones (TDZ)。 重要的是要知道为什么 typeof不再安全.</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 我们知道这个不会工作，假设没有定义全局的notDefined</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>notDefined<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; throws a ReferenceError</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在你引用的地方之后声明一个变量，他会正常输出是因为变量作用域上升。</span>
<span class="token comment">// 注意： declaredButNotAssigned的值没有上升</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>declaredButNotAssigned<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>
  <span class="token keyword">var</span> declaredButNotAssigned <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 解释器把变量声明提升到作用域最前面，</span>
<span class="token comment">// 可以重写成如下例子， 二者意义相同</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> declaredButNotAssigned<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>declaredButNotAssigned<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>
  declaredButNotAssigned <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用 const， let就不一样了</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>declaredButNotAssigned<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; throws a ReferenceError</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> declaredButNotAssigned<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; throws a ReferenceError</span>
  <span class="token keyword">const</span> declaredButNotAssigned <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_14-2-匿名函数表达式和-var-情况相同" tabindex="-1"><a class="header-anchor" href="#_14-2-匿名函数表达式和-var-情况相同"><span>14.2 匿名函数表达式和 <code>var</code> 情况相同</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anonymous<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>

  <span class="token function">anonymous</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; TypeError anonymous is not a function</span>

  <span class="token keyword">var</span> <span class="token function-variable function">anonymous</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;anonymous function expression&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_14-3-已命名函数表达式提升他的变量名-不是函数名或函数体" tabindex="-1"><a class="header-anchor" href="#_14-3-已命名函数表达式提升他的变量名-不是函数名或函数体"><span>14.3 已命名函数表达式提升他的变量名，不是函数名或函数体</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>named<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>

  <span class="token function">named</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; TypeError named is not a function</span>

  <span class="token function">superPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; ReferenceError superPower is not defined</span>

  <span class="token keyword">var</span> <span class="token function-variable function">named</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">superPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Flying&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数名和变量名一样是也如此</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>named<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>

  <span class="token function">named</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; TypeError named is not a function</span>

  <span class="token keyword">var</span> <span class="token function-variable function">named</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">named</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;named&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_14-4-函数声明则提升了函数名和函数体" tabindex="-1"><a class="header-anchor" href="#_14-4-函数声明则提升了函数名和函数体"><span>14.4 函数声明则提升了函数名和函数体</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">superPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; Flying</span>

  <span class="token keyword">function</span> <span class="token function">superPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Flying&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="comparison-operators-equality" tabindex="-1"><a class="header-anchor" href="#comparison-operators-equality"><span>Comparison Operators &amp; Equality</span></a></h3><h4 id="_15-1-用-和-而不是-和-eslint-eqeqeq" tabindex="-1"><a class="header-anchor" href="#_15-1-用-和-而不是-和-eslint-eqeqeq"><span>15.1 用 === 和 !== 而不是 == 和 !=. eslint: <code>eqeqeq</code></span></a></h4><h4 id="_15-2-条件语句如-if-语句使用强制-toboolean-抽象方法来评估它们的表达式-并且始终遵循以下简单规则" tabindex="-1"><a class="header-anchor" href="#_15-2-条件语句如-if-语句使用强制-toboolean-抽象方法来评估它们的表达式-并且始终遵循以下简单规则"><span>15.2 条件语句如&#39;if&#39;语句使用强制\`ToBoolean&#39;抽象方法来评估它们的表达式，并且始终遵循以下简单规则：</span></a></h4><ul><li>Objects 计算成 true</li><li>Undefined 计算成 false</li><li>Null 计算成 false</li><li>Booleans 计算成 the value of the boolean</li><li>Numbers</li><li>+0, -0, or NaN 计算成 false</li><li>其他 true</li><li>Strings</li><li>&#39;&#39; 计算成 false</li><li>其他 true</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// true</span>
  <span class="token comment">// 数组（即使是空数组）是对象，对象会计算成true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_15-3-布尔值用缩写-而字符串和数字要明确比较对象" tabindex="-1"><a class="header-anchor" href="#_15-3-布尔值用缩写-而字符串和数字要明确比较对象"><span>15.3 布尔值用缩写，而字符串和数字要明确比较对象</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isValid <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_15-4-更多信息请见angus-croll的真理、平等和javascript-——-truth-equality-and-javascript" tabindex="-1"><a class="header-anchor" href="#_15-4-更多信息请见angus-croll的真理、平等和javascript-——-truth-equality-and-javascript"><span>15.4 更多信息请见Angus Croll的真理、平等和JavaScript —— Truth Equality and JavaScript</span></a></h4><h4 id="_15-5-在case和default分句里用大括号创建一块包含语法声明的区域-e-g-let-const-function-and-class-eslint-no-case-declarations" tabindex="-1"><a class="header-anchor" href="#_15-5-在case和default分句里用大括号创建一块包含语法声明的区域-e-g-let-const-function-and-class-eslint-no-case-declarations"><span>15.5 在<code>case</code>和<code>default</code>分句里用大括号创建一块包含语法声明的区域(e.g. <code>let</code>, <code>const</code>, <code>function</code>, and <code>class</code>). eslint: <code>no-case-declarations</code>.</span></a></h4><blockquote><p>Why? 语法声明在整个switch的代码块里都可见，但是只有当其被分配后才会初始化，他的初始化时当这个case被执行时才产生。 当多个case分句试图定义同一个事情时就出问题了</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
    <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_15-6-三元表达式不应该嵌套-通常是单行表达式。eslint-no-nested-ternary" tabindex="-1"><a class="header-anchor" href="#_15-6-三元表达式不应该嵌套-通常是单行表达式。eslint-no-nested-ternary"><span>15.6 三元表达式不应该嵌套，通常是单行表达式。eslint: <code>no-nested-ternary</code>.</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2
  <span class="token operator">?</span> <span class="token string">&quot;bar&quot;</span>
  <span class="token operator">:</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token string">&quot;baz&quot;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// better</span>
<span class="token keyword">const</span> maybeNull <span class="token operator">=</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token string">&#39;baz&#39;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2
  <span class="token operator">?</span> <span class="token string">&#39;bar&#39;</span>
  <span class="token operator">:</span> maybeNull<span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> maybeNull <span class="token operator">=</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token string">&#39;baz&#39;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2 <span class="token operator">?</span> <span class="token string">&#39;bar&#39;</span> <span class="token operator">:</span> maybeNull<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_15-7-避免不需要的三元表达式。-eslint-no-unneeded-ternary" tabindex="-1"><a class="header-anchor" href="#_15-7-避免不需要的三元表达式。-eslint-no-unneeded-ternary"><span>15.7 避免不需要的三元表达式。 eslint: <code>no-unneeded-ternary</code>.</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> a <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> c <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> c <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> a <span class="token operator">||</span> b<span class="token punctuation">;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>c<span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token operator">!</span>c<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_15-8-用圆括号来混合这些操作符。-只有当标准的算术运算符-并且它们的优先级显而易见时-可以不用圆括号括起来。-eslint-no-mixed-operators" tabindex="-1"><a class="header-anchor" href="#_15-8-用圆括号来混合这些操作符。-只有当标准的算术运算符-并且它们的优先级显而易见时-可以不用圆括号括起来。-eslint-no-mixed-operators"><span>15.8 用圆括号来混合这些操作符。 只有当标准的算术运算符(+, -, *, &amp; /)， 并且它们的优先级显而易见时，可以不用圆括号括起来。 eslint: <code>no-mixed-operators</code></span></a></h4><blockquote><p>Why? 这提高了可读性，并且明确了开发者的意图</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> a <span class="token operator">&amp;&amp;</span> b <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> c <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> d <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> a <span class="token operator">**</span> b <span class="token operator">-</span> <span class="token number">5</span> <span class="token operator">%</span> d<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token comment">// 别人会陷入(a || b) &amp;&amp; c 的迷惑中</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">||</span> b <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> c <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token punctuation">(</span>d <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">**</span> b<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">%</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">||</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> a <span class="token operator">+</span> b <span class="token operator">/</span> c <span class="token operator">*</span> d<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="blocks" tabindex="-1"><a class="header-anchor" href="#blocks"><span>Blocks</span></a></h3><h4 id="_16-1-用大括号包裹多行代码块。-eslint-nonblock-statement-body-position" tabindex="-1"><a class="header-anchor" href="#_16-1-用大括号包裹多行代码块。-eslint-nonblock-statement-body-position"><span>16.1 用大括号包裹多行代码块。 eslint: <code>nonblock-statement-body-position</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_16-2-if表达式的else和if的关闭大括号在一行。-eslint-brace-style" tabindex="-1"><a class="header-anchor" href="#_16-2-if表达式的else和if的关闭大括号在一行。-eslint-brace-style"><span>16.2 if表达式的else和if的关闭大括号在一行。 eslint: <code>brace-style</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">thing2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">thing3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">thing2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">thing3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_16-3-如果-if-语句中总是需要用-return-返回-那后续的-else-就不需要写了。-if-块中包含-return-它后面的-else-if-块中也包含了-return-这个时候就可以把-return-分到多个-if-语句块中。-eslint-no-else-return" tabindex="-1"><a class="header-anchor" href="#_16-3-如果-if-语句中总是需要用-return-返回-那后续的-else-就不需要写了。-if-块中包含-return-它后面的-else-if-块中也包含了-return-这个时候就可以把-return-分到多个-if-语句块中。-eslint-no-else-return"><span>16.3 如果 if 语句中总是需要用 return 返回， 那后续的 else 就不需要写了。 if 块中包含 return， 它后面的 else if 块中也包含了 return， 这个时候就可以把 return 分到多个 if 语句块中。 eslint: <code>no-else-return</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">cats</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">dogs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">cats</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">dogs</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>z<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> z<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="control-statements" tabindex="-1"><a class="header-anchor" href="#control-statements"><span>Control Statements</span></a></h3><h4 id="_17-1-当你的控制语句-if-while-等-太长或者超过最大长度限制的时候-把每一个-组-判断条件放在单独一行里。-逻辑操作符放在行首。" tabindex="-1"><a class="header-anchor" href="#_17-1-当你的控制语句-if-while-等-太长或者超过最大长度限制的时候-把每一个-组-判断条件放在单独一行里。-逻辑操作符放在行首。"><span>17.1 当你的控制语句(if, while 等)太长或者超过最大长度限制的时候， 把每一个(组)判断条件放在单独一行里。 逻辑操作符放在行首。</span></a></h4><blockquote><p>Why? 把逻辑操作符放在行首是让操作符的对齐方式和链式函数保持一致。这提高了可读性，也让复杂逻辑更容易看清楚。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">||</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">doesItLookGoodWhenItBecomesThatLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isThisReallyHappening</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">&amp;&amp;</span>
  bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span>
  <span class="token operator">&amp;&amp;</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>
  foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">&amp;&amp;</span>
  bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>
  foo <span class="token operator">===</span> <span class="token number">123</span>
  <span class="token operator">&amp;&amp;</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>
  <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">||</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">doesItLookGoodWhenItBecomesThatLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">&amp;&amp;</span> <span class="token function">isThisReallyHappening</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">&amp;&amp;</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_17-2-不要用选择操作符代替控制语句。" tabindex="-1"><a class="header-anchor" href="#_17-2-不要用选择操作符代替控制语句。"><span>17.2 不要用选择操作符代替控制语句。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">!</span>isRunning <span class="token operator">&amp;&amp;</span> <span class="token function">startRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRunning<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">startRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="comments" tabindex="-1"><a class="header-anchor" href="#comments"><span>Comments</span></a></h3><h4 id="_18-1-多行注释用" tabindex="-1"><a class="header-anchor" href="#_18-1-多行注释用"><span>18.1 多行注释用 <code>/** ... */</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token comment">// make() returns a new element</span>
<span class="token comment">// based on the passed in tag name</span>
<span class="token comment">//</span>
<span class="token comment">// @param {String} tag</span>
<span class="token comment">// @return {Element} element</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token doc-comment comment">/**
 * make() returns a new element
 * based on the passed-in tag name
 */</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-2-单行注释用-将单行注释放在被注释区域上面。如果注释不是在第一行-那么注释前面就空一行" tabindex="-1"><a class="header-anchor" href="#_18-2-单行注释用-将单行注释放在被注释区域上面。如果注释不是在第一行-那么注释前面就空一行"><span>18.2 单行注释用<code>//</code>，将单行注释放在被注释区域上面。如果注释不是在第一行，那么注释前面就空一行</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">// is current tab</span>

<span class="token comment">// good</span>
<span class="token comment">// is current tab</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fetching type...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// set the default type to &#39;no type&#39;</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_type <span class="token operator">||</span> <span class="token string">&#39;no type&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> type<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fetching type...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// set the default type to &#39;no type&#39;</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_type <span class="token operator">||</span> <span class="token string">&#39;no type&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> type<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// also good</span>
<span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// set the default type to &#39;no type&#39;</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_type <span class="token operator">||</span> <span class="token string">&#39;no type&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> type<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-3-所有注释开头空一个-方便阅读。-eslint-spaced-comment" tabindex="-1"><a class="header-anchor" href="#_18-3-所有注释开头空一个-方便阅读。-eslint-spaced-comment"><span>18.3 所有注释开头空一个，方便阅读。 eslint: <code>spaced-comment</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token comment">//is current tab</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token comment">// is current tab</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token doc-comment comment">/**
 *make() returns a new element
 *based on the passed-in tag name
 */</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token doc-comment comment">/**
 * make() returns a new element
 * based on the passed-in tag name
 */</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-4-在你的注释前使用fixme-或todo-前缀-这有助于其他开发人员快速理解你指出的需要重新访问的问题-或者您建议需要实现的问题的解决方案。-这些不同于常规注释-因为它们是可操作的。-动作是fixme-需要计算出来或todo-需要实现。" tabindex="-1"><a class="header-anchor" href="#_18-4-在你的注释前使用fixme-或todo-前缀-这有助于其他开发人员快速理解你指出的需要重新访问的问题-或者您建议需要实现的问题的解决方案。-这些不同于常规注释-因为它们是可操作的。-动作是fixme-需要计算出来或todo-需要实现。"><span>18.4 在你的注释前使用FIXME&#39;或TODO&#39;前缀， 这有助于其他开发人员快速理解你指出的需要重新访问的问题， 或者您建议需要实现的问题的解决方案。 这些不同于常规注释，因为它们是可操作的。 动作是FIXME： - 需要计算出来或TODO： - 需要实现。</span></a></h4><h4 id="_18-5-用-fixme-给问题做注释" tabindex="-1"><a class="header-anchor" href="#_18-5-用-fixme-给问题做注释"><span>18.5 用<code>// FIXME:</code>给问题做注释</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token keyword">extends</span> <span class="token class-name">Abacus</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// FIXME: shouldn&#39;t use a global here</span>
    total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-6-用-todo-去注释问题的解决方案" tabindex="-1"><a class="header-anchor" href="#_18-6-用-todo-去注释问题的解决方案"><span>18.6 用<code>// TODO:</code>去注释问题的解决方案</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token keyword">extends</span> <span class="token class-name">Abacus</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// TODO: total should be configurable by an options param</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="whitespace" tabindex="-1"><a class="header-anchor" href="#whitespace"><span>Whitespace</span></a></h3><h4 id="_19-1-tab用两个空格-eslint-indent" tabindex="-1"><a class="header-anchor" href="#_19-1-tab用两个空格-eslint-indent"><span>19.1 tab用两个空格. eslint: <code>indent</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
∙∙∙∙<span class="token keyword">const</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
∙<span class="token keyword">const</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
∙∙<span class="token keyword">const</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-2-在大括号前空一格。-eslint-space-before-blocks" tabindex="-1"><a class="header-anchor" href="#_19-2-在大括号前空一格。-eslint-space-before-blocks"><span>19.2 在大括号前空一格。 eslint: <code>space-before-blocks</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
dog<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;attr&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;1 year&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">breed</span><span class="token operator">:</span> <span class="token string">&#39;Bernese Mountain Dog&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
dog<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;attr&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;1 year&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">breed</span><span class="token operator">:</span> <span class="token string">&#39;Bernese Mountain Dog&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-3-在控制语句-if-while-等-的圆括号前空一格。在函数调用和定义时-参数列表和函数名之间不空格。-eslint-keyword-spacing" tabindex="-1"><a class="header-anchor" href="#_19-3-在控制语句-if-while-等-的圆括号前空一格。在函数调用和定义时-参数列表和函数名之间不空格。-eslint-keyword-spacing"><span>19.3 在控制语句(if, while 等)的圆括号前空一格。在函数调用和定义时，参数列表和函数名之间不空格。 eslint: <code>keyword-spacing</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>isJedi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fight</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isJedi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">fight</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span><span class="token string">&#39;Swooosh!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Swooosh!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-4-用空格来隔开运算符。-eslint-space-infix-ops" tabindex="-1"><a class="header-anchor" href="#_19-4-用空格来隔开运算符。-eslint-space-infix-ops"><span>19.4 用空格来隔开运算符。 eslint: <code>space-infix-ops</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> x<span class="token operator">=</span>y<span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> y <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-5-文件结尾空一行-eslint-eol-last" tabindex="-1"><a class="header-anchor" href="#_19-5-文件结尾空一行-eslint-eol-last"><span>19.5 文件结尾空一行. eslint: <code>eol-last</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6<span class="token punctuation">;</span>↵
↵
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6<span class="token punctuation">;</span>↵
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-6-当出现长的方法链-2个-时用缩进。用点开头强调该行是一个方法调用-而不是一个新的语句。eslint-newline-per-chained-call-no-whitespace-before-property" tabindex="-1"><a class="header-anchor" href="#_19-6-当出现长的方法链-2个-时用缩进。用点开头强调该行是一个方法调用-而不是一个新的语句。eslint-newline-per-chained-call-no-whitespace-before-property"><span>19.6 当出现长的方法链（&gt;2个）时用缩进。用点开头强调该行是一个方法调用，而不是一个新的语句。eslint: <code>newline-per-chained-call</code> <code>no-whitespace-before-property</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#items&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.selected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.open&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#items&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.selected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">highlight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.open&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#items&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.selected&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.open&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> leds <span class="token operator">=</span> stage<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">&#39;.led&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:svg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">classed</span><span class="token punctuation">(</span><span class="token string">&#39;led&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>radius <span class="token operator">+</span> margin<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:g&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;transform&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>radius <span class="token operator">+</span> margin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>radius <span class="token operator">+</span> margin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>tron<span class="token punctuation">.</span>led<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> leds <span class="token operator">=</span> stage<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">&#39;.led&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:svg&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">classed</span><span class="token punctuation">(</span><span class="token string">&#39;led&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>radius <span class="token operator">+</span> margin<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:g&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;transform&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>radius <span class="token operator">+</span> margin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>radius <span class="token operator">+</span> margin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>tron<span class="token punctuation">.</span>led<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> leds <span class="token operator">=</span> stage<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">&#39;.led&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-7-在一个代码块后下一条语句前空一行。" tabindex="-1"><a class="header-anchor" href="#_19-7-在一个代码块后下一条语句前空一行。"><span>19.7 在一个代码块后下一条语句前空一行。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> baz<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> baz<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> obj<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> obj<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> arr<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> arr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-8-不要用空白行填充块。-eslint-padded-blocks" tabindex="-1"><a class="header-anchor" href="#_19-8-不要用空白行填充块。-eslint-padded-blocks"><span>19.8 不要用空白行填充块。 eslint: <code>padded-blocks</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">// also bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>baz<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>qux<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>baz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>qux<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-9不要在代码之间使用多个空白行填充。-eslint-no-multiple-empty-lines" tabindex="-1"><a class="header-anchor" href="#_19-9不要在代码之间使用多个空白行填充。-eslint-no-multiple-empty-lines"><span>19.9不要在代码之间使用多个空白行填充。 eslint: <code>no-multiple-empty-lines</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fullName<span class="token punctuation">,</span> email<span class="token punctuation">,</span> birthday</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> fullName<span class="token punctuation">;</span>


    <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>


    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


  <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">birthday</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span>today<span class="token punctuation">,</span> birthday<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


  <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token parameter">today<span class="token punctuation">,</span> birthday</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ..</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fullName<span class="token punctuation">,</span> email<span class="token punctuation">,</span> birthday</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> fullName<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">birthday</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token function">getAge</span><span class="token punctuation">(</span>today<span class="token punctuation">,</span> birthday<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token parameter">today<span class="token punctuation">,</span> birthday</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ..</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-10-圆括号里不要加空格。-eslint-space-in-parens" tabindex="-1"><a class="header-anchor" href="#_19-10-圆括号里不要加空格。-eslint-space-in-parens"><span>19.10 圆括号里不要加空格。 eslint: <code>space-in-parens</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span> <span class="token parameter">foo</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> foo<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> foo<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span> foo <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-11-方括号里不要加空格。看示例。-eslint-array-bracket-spacing" tabindex="-1"><a class="header-anchor" href="#_19-11-方括号里不要加空格。看示例。-eslint-array-bracket-spacing"><span>19.11 方括号里不要加空格。看示例。 eslint: <code>array-bracket-spacing</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good， 逗号分隔符还是要空格的</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-12-花括号里加空格。-eslint-object-curly-spacing" tabindex="-1"><a class="header-anchor" href="#_19-12-花括号里加空格。-eslint-object-curly-spacing"><span>19.12 花括号里加空格。 eslint: <code>object-curly-spacing</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">clark</span><span class="token operator">:</span> <span class="token string">&#39;kent&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">clark</span><span class="token operator">:</span> <span class="token string">&#39;kent&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-13-避免一行代码超过100个字符-包含空格-。" tabindex="-1"><a class="header-anchor" href="#_19-13-避免一行代码超过100个字符-包含空格-。"><span>19.13 避免一行代码超过100个字符（包含空格）。</span></a></h4><blockquote><p>注意： 对于上面——strings--line-length，长字符串不受此规则限制，不应分解。 eslint: <code>max-len</code></p></blockquote><blockquote><p>Why? 这样确保可读性和可维护性</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> jsonData <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz<span class="token punctuation">.</span>quux <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz<span class="token punctuation">.</span>quux<span class="token punctuation">.</span>xyzzy<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://airbnb.com/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Congratulations!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;You have failed this city.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> jsonData
  <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo
  <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar
  <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz
  <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz<span class="token punctuation">.</span>quux
  <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz<span class="token punctuation">.</span>quux<span class="token punctuation">.</span>xyzzy<span class="token punctuation">;</span>

<span class="token comment">// good</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://airbnb.com/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Congratulations!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;You have failed this city.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-14-作为语句的花括号内也要加空格-——-后和-前都需要空格。-eslint-block-spacing" tabindex="-1"><a class="header-anchor" href="#_19-14-作为语句的花括号内也要加空格-——-后和-前都需要空格。-eslint-block-spacing"><span>19.14 作为语句的花括号内也要加空格 —— { 后和 } 前都需要空格。 eslint: <code>block-spacing</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span> bar <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span> bar <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-15-前不要空格-后需要空格。-eslint-comma-spacing" tabindex="-1"><a class="header-anchor" href="#_19-15-前不要空格-后需要空格。-eslint-comma-spacing"><span>19.15 <code>,</code> 前不要空格， <code>,</code> 后需要空格。 eslint: <code>comma-spacing</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>bar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> bar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-16-计算属性内要空格。参考上述花括号和中括号的规则。-eslint-computed-property-spacing" tabindex="-1"><a class="header-anchor" href="#_19-16-计算属性内要空格。参考上述花括号和中括号的规则。-eslint-computed-property-spacing"><span>19.16 计算属性内要空格。参考上述花括号和中括号的规则。 eslint: <code>computed-property-spacing</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
obj<span class="token punctuation">[</span>foo <span class="token punctuation">]</span>
obj<span class="token punctuation">[</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">[</span> b <span class="token punctuation">]</span><span class="token operator">:</span> a<span class="token punctuation">}</span>
obj<span class="token punctuation">[</span>foo<span class="token punctuation">[</span> bar <span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment">// good</span>
obj<span class="token punctuation">[</span>foo<span class="token punctuation">]</span>
obj<span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">:</span> a <span class="token punctuation">}</span>
obj<span class="token punctuation">[</span>foo<span class="token punctuation">[</span>bar<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-17-调用函数时-函数名和小括号之间不要空格。-eslint-func-call-spacing" tabindex="-1"><a class="header-anchor" href="#_19-17-调用函数时-函数名和小括号之间不要空格。-eslint-func-call-spacing"><span>19.17 调用函数时，函数名和小括号之间不要空格。 eslint: <code>func-call-spacing</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">func</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">func</span>
<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-18-在对象的字面量属性中-key-value-之间要有空格。-eslint-key-spacing" tabindex="-1"><a class="header-anchor" href="#_19-18-在对象的字面量属性中-key-value-之间要有空格。-eslint-key-spacing"><span>19.18 在对象的字面量属性中， <code>key</code> <code>value</code> 之间要有空格。 eslint: <code>key-spacing</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;foo&quot;</span> <span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;foo&quot;</span><span class="token operator">:</span><span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;foo&quot;</span><span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-19-行末不要空格。-eslint-no-trailing-spaces" tabindex="-1"><a class="header-anchor" href="#_19-19-行末不要空格。-eslint-no-trailing-spaces"><span>19.19 行末不要空格。 eslint: <code>no-trailing-spaces</code></span></a></h4><h4 id="_19-20-避免出现多个空行。-在文件末尾只允许空一行。-eslint-no-multiple-empty-lines" tabindex="-1"><a class="header-anchor" href="#_19-20-避免出现多个空行。-在文件末尾只允许空一行。-eslint-no-multiple-empty-lines"><span>19.20 避免出现多个空行。 在文件末尾只允许空一行。 eslint: <code>no-multiple-empty-lines</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>



<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="commas" tabindex="-1"><a class="header-anchor" href="#commas"><span>Commas</span></a></h3><h4 id="_20-1-不要前置逗号。-eslint-comma-style" tabindex="-1"><a class="header-anchor" href="#_20-1-不要前置逗号。-eslint-comma-style"><span>20.1 不要前置逗号。 eslint: <code>comma-style</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> story <span class="token operator">=</span> <span class="token punctuation">[</span>
    once
  <span class="token punctuation">,</span> upon
  <span class="token punctuation">,</span> aTime
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> story <span class="token operator">=</span> <span class="token punctuation">[</span>
  once<span class="token punctuation">,</span>
  upon<span class="token punctuation">,</span>
  aTime<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Ada&#39;</span>
  <span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Lovelace&#39;</span>
  <span class="token punctuation">,</span> <span class="token literal-property property">birthYear</span><span class="token operator">:</span> <span class="token number">1815</span>
  <span class="token punctuation">,</span> <span class="token literal-property property">superPower</span><span class="token operator">:</span> <span class="token string">&#39;computers&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Ada&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Lovelace&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birthYear</span><span class="token operator">:</span> <span class="token number">1815</span><span class="token punctuation">,</span>
  <span class="token literal-property property">superPower</span><span class="token operator">:</span> <span class="token string">&#39;computers&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_20-2-额外结尾逗号-要-eslint-comma-dangle" tabindex="-1"><a class="header-anchor" href="#_20-2-额外结尾逗号-要-eslint-comma-dangle"><span>20.2 额外结尾逗号: 要 eslint: <code>comma-dangle</code></span></a></h4><blockquote><p>Why? 这导致git diffs更清洁。 此外，像Babel这样的转换器会删除转换代码中的额外的逗号，这意味着你不必担心旧版浏览器中的结尾逗号问题。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad - 没有结尾逗号的 git diff</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Florence&#39;</span><span class="token punctuation">,</span>
<span class="token operator">-</span>    lastName<span class="token operator">:</span> <span class="token string">&#39;Nightingale&#39;</span>
<span class="token operator">+</span>    lastName<span class="token operator">:</span> <span class="token string">&#39;Nightingale&#39;</span><span class="token punctuation">,</span>
<span class="token operator">+</span>    inventorOf<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;coxcomb chart&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;modern nursing&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good - 有结尾逗号的 git diff</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Florence&#39;</span><span class="token punctuation">,</span>
     <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Nightingale&#39;</span><span class="token punctuation">,</span>
<span class="token operator">+</span>    inventorOf<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;coxcomb chart&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;modern nursing&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Dana&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Scully&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> heroes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;Batman&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Superman&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Dana&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Scully&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> heroes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;Batman&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Superman&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">createHero</span><span class="token punctuation">(</span>
  <span class="token parameter">firstName<span class="token punctuation">,</span>
  lastName<span class="token punctuation">,</span>
  inventorOf</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// does nothing</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">createHero</span><span class="token punctuation">(</span>
  <span class="token parameter">firstName<span class="token punctuation">,</span>
  lastName<span class="token punctuation">,</span>
  inventorOf<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// does nothing</span>
<span class="token punctuation">}</span>

<span class="token comment">// good (note that a comma must not appear after a &quot;rest&quot; element)</span>
<span class="token keyword">function</span> <span class="token function">createHero</span><span class="token punctuation">(</span>
  <span class="token parameter">firstName<span class="token punctuation">,</span>
  lastName<span class="token punctuation">,</span>
  inventorOf<span class="token punctuation">,</span>
  <span class="token operator">...</span>heroArgs</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// does nothing</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token function">createHero</span><span class="token punctuation">(</span>
  firstName<span class="token punctuation">,</span>
  lastName<span class="token punctuation">,</span>
  inventorOf
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token function">createHero</span><span class="token punctuation">(</span>
  firstName<span class="token punctuation">,</span>
  lastName<span class="token punctuation">,</span>
  inventorOf<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good (note that a comma must not appear after a &quot;rest&quot; element)</span>
<span class="token function">createHero</span><span class="token punctuation">(</span>
  firstName<span class="token punctuation">,</span>
  lastName<span class="token punctuation">,</span>
  inventorOf<span class="token punctuation">,</span>
  <span class="token operator">...</span>heroArgs
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="semicolons" tabindex="-1"><a class="header-anchor" href="#semicolons"><span>Semicolons</span></a></h3><h4 id="_21-1-yup-eslint-semi" tabindex="-1"><a class="header-anchor" href="#_21-1-yup-eslint-semi"><span>21.1 Yup. eslint: <code>semi</code></span></a></h4><blockquote><p>Why? 当 JavaScript 遇到没有分号结尾的一行，它会执行自动插入分号 Automatic Semicolon Insertion这一规则来决定行末是否加分号。如果JavaScript在你的断行里错误的插入了分号，就会出现一些古怪的行为。当新的功能加到JavaScript里后， 这些规则会变得更复杂难懂。显示的结束语句，并通过配置代码检查去捕获没有带分号的地方可以帮助你防止这种错误。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Skywalker&#39;</span>
  <span class="token keyword">return</span> name
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Skywalker&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good, 行首加分号，避免文件被连接到一起时立即执行函数被当做变量来执行。</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Skywalker&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type-casting-coercion" tabindex="-1"><a class="header-anchor" href="#type-casting-coercion"><span>Type Casting &amp; Coercion</span></a></h3><h4 id="_22-1-在语句开始执行强制类型转换。" tabindex="-1"><a class="header-anchor" href="#_22-1-在语句开始执行强制类型转换。"><span>22.1 在语句开始执行强制类型转换。</span></a></h4><h4 id="_22-2-strings-eslint-no-new-wrappers" tabindex="-1"><a class="header-anchor" href="#_22-2-strings-eslint-no-new-wrappers"><span>22.2 Strings: eslint: <code>no-new-wrappers</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// =&gt; this.reviewScore = 9;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> totalScore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// typeof totalScore is &quot;object&quot; not &quot;string&quot;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> totalScore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// invokes this.reviewScore.valueOf()</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> totalScore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不保证返回string</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> totalScore <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_22-3-numbers-用-number-做类型转换-parseint转换string常需要带上基数。-eslint-radix" tabindex="-1"><a class="header-anchor" href="#_22-3-numbers-用-number-做类型转换-parseint转换string常需要带上基数。-eslint-radix"><span>22.3 Numbers: 用 <code>Number</code> 做类型转换，<code>parseInt</code>转换string常需要带上基数。 eslint: <code>radix</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token operator">+</span>inputValue<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> inputValue <span class="token operator">&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_22-4-请在注释中解释为什么要用移位运算和你在做什么。无论你做什么狂野的事-比如由于-parseint-是你的性能瓶颈导致你一定要用移位运算。-请说明这个是因为性能原因" tabindex="-1"><a class="header-anchor" href="#_22-4-请在注释中解释为什么要用移位运算和你在做什么。无论你做什么狂野的事-比如由于-parseint-是你的性能瓶颈导致你一定要用移位运算。-请说明这个是因为性能原因"><span>22.4 请在注释中解释为什么要用移位运算和你在做什么。无论你做什么狂野的事，比如由于 <code>parseInt</code> 是你的性能瓶颈导致你一定要用移位运算。 请说明这个是因为性能原因,</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token doc-comment comment">/**
 * parseInt是代码运行慢的原因
 * 用Bitshifting将字符串转成数字使代码运行效率大幅增长
 */</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> inputValue <span class="token operator">&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_22-5-注意-用移位运算要小心-数字使用64-位表示的-但移位运算常常返回的是32为整形source-。移位运算对大于32位的整数会导致意外行为。discussion-最大的32位整数是-2-147-483-647" tabindex="-1"><a class="header-anchor" href="#_22-5-注意-用移位运算要小心-数字使用64-位表示的-但移位运算常常返回的是32为整形source-。移位运算对大于32位的整数会导致意外行为。discussion-最大的32位整数是-2-147-483-647"><span>22.5 注意: 用移位运算要小心. 数字使用64-位表示的，但移位运算常常返回的是32为整形source)。移位运算对大于32位的整数会导致意外行为。Discussion. 最大的32位整数是 2,147,483,647:</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">2147483647</span> <span class="token operator">&gt;&gt;</span> <span class="token number">0</span> <span class="token comment">//=&gt; 2147483647</span>
<span class="token number">2147483648</span> <span class="token operator">&gt;&gt;</span> <span class="token number">0</span> <span class="token comment">//=&gt; -2147483648</span>
<span class="token number">2147483649</span> <span class="token operator">&gt;&gt;</span> <span class="token number">0</span> <span class="token comment">//=&gt; -2147483647</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_22-6-布尔" tabindex="-1"><a class="header-anchor" href="#_22-6-布尔"><span>22.6 布尔:</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> hasAge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> hasAge <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> hasAge <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>age<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="naming-conventions" tabindex="-1"><a class="header-anchor" href="#naming-conventions"><span>Naming Conventions</span></a></h3><h4 id="_23-1-避免用一个字母命名-让你的命名可描述。-eslint-id-length" tabindex="-1"><a class="header-anchor" href="#_23-1-避免用一个字母命名-让你的命名可描述。-eslint-id-length"><span>23.1 避免用一个字母命名，让你的命名可描述。 eslint: <code>id-length</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">q</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_23-2-用小驼峰式命名你的对象、函数、实例。-eslint-camelcase" tabindex="-1"><a class="header-anchor" href="#_23-2-用小驼峰式命名你的对象、函数、实例。-eslint-camelcase"><span>23.2 用小驼峰式命名你的对象、函数、实例。 eslint: <code>camelcase</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> OBJEcttsssss <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> this_is_my_object <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> thisIsMyObject <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">thisIsMyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_23-3-用大驼峰式命名类。-eslint-new-cap" tabindex="-1"><a class="header-anchor" href="#_23-3-用大驼峰式命名类。-eslint-new-cap"><span>23.3 用大驼峰式命名类。 eslint: <code>new-cap</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> options<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bad <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">user</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;nope&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> options<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> good <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;yup&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_23-4-不要用前置或后置下划线。-eslint-no-underscore-dangle" tabindex="-1"><a class="header-anchor" href="#_23-4-不要用前置或后置下划线。-eslint-no-underscore-dangle"><span>23.4 不要用前置或后置下划线。 eslint: <code>no-underscore-dangle</code></span></a></h4><blockquote><p>Why? JavaScript 没有私有属性或私有方法的概念。尽管前置下划线通常的概念上意味着“private”，事实上，这些属性是完全公有的，因此这部分也是你的API的内容。这一概念可能会导致开发者误以为更改这个不会导致崩溃或者不需要测试。 如果你想要什么东西变成“private”，那就不要让它在这里出现。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>__firstName__ <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>firstName_ <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>_firstName <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_23-5-不要保存引用this-用箭头函数或函数绑定——function-bind" tabindex="-1"><a class="header-anchor" href="#_23-5-不要保存引用this-用箭头函数或函数绑定——function-bind"><span>23.5 不要保存引用this， 用箭头函数或函数绑定——Function#bind.</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>that<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_23-6-export-default导出模块a-则这个文件名也叫a-import-时候的参数也叫a。-大小写完全一致。" tabindex="-1"><a class="header-anchor" href="#_23-6-export-default导出模块a-则这个文件名也叫a-import-时候的参数也叫a。-大小写完全一致。"><span>23.6 export default导出模块A，则这个文件名也叫A.*， import 时候的参数也叫A。 大小写完全一致。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// file 1 contents</span>
<span class="token keyword">class</span> <span class="token class-name">CheckBox</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> CheckBox<span class="token punctuation">;</span>

<span class="token comment">// file 2 contents</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">fortyTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token comment">// file 3 contents</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">insideDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// in some other file</span>
<span class="token comment">// bad</span>
<span class="token keyword">import</span> CheckBox <span class="token keyword">from</span> <span class="token string">&#39;./checkBox&#39;</span><span class="token punctuation">;</span> <span class="token comment">// PascalCase import/export, camelCase filename</span>
<span class="token keyword">import</span> FortyTwo <span class="token keyword">from</span> <span class="token string">&#39;./FortyTwo&#39;</span><span class="token punctuation">;</span> <span class="token comment">// PascalCase import/filename, camelCase export</span>
<span class="token keyword">import</span> InsideDirectory <span class="token keyword">from</span> <span class="token string">&#39;./InsideDirectory&#39;</span><span class="token punctuation">;</span> <span class="token comment">// PascalCase import/filename, camelCase export</span>

<span class="token comment">// bad</span>
<span class="token keyword">import</span> CheckBox <span class="token keyword">from</span> <span class="token string">&#39;./check_box&#39;</span><span class="token punctuation">;</span> <span class="token comment">// PascalCase import/export, snake_case filename</span>
<span class="token keyword">import</span> forty_two <span class="token keyword">from</span> <span class="token string">&#39;./forty_two&#39;</span><span class="token punctuation">;</span> <span class="token comment">// snake_case import/filename, camelCase export</span>
<span class="token keyword">import</span> inside_directory <span class="token keyword">from</span> <span class="token string">&#39;./inside_directory&#39;</span><span class="token punctuation">;</span> <span class="token comment">// snake_case import, camelCase export</span>
<span class="token keyword">import</span> index <span class="token keyword">from</span> <span class="token string">&#39;./inside_directory/index&#39;</span><span class="token punctuation">;</span> <span class="token comment">// requiring the index file explicitly</span>
<span class="token keyword">import</span> insideDirectory <span class="token keyword">from</span> <span class="token string">&#39;./insideDirectory/index&#39;</span><span class="token punctuation">;</span> <span class="token comment">// requiring the index file explicitly</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> CheckBox <span class="token keyword">from</span> <span class="token string">&#39;./CheckBox&#39;</span><span class="token punctuation">;</span> <span class="token comment">// PascalCase export/import/filename</span>
<span class="token keyword">import</span> fortyTwo <span class="token keyword">from</span> <span class="token string">&#39;./fortyTwo&#39;</span><span class="token punctuation">;</span> <span class="token comment">// camelCase export/import/filename</span>
<span class="token keyword">import</span> insideDirectory <span class="token keyword">from</span> <span class="token string">&#39;./insideDirectory&#39;</span><span class="token punctuation">;</span> <span class="token comment">// camelCase export/import/directory name/implicit &quot;index&quot;</span>
<span class="token comment">// ^ supports both insideDirectory.js and insideDirectory/index.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_23-7-当你export-default一个函数时-函数名用小驼峰-文件名需要和函数名一致。" tabindex="-1"><a class="header-anchor" href="#_23-7-当你export-default一个函数时-函数名用小驼峰-文件名需要和函数名一致。"><span>23.7 当你export-default一个函数时，函数名用小驼峰，文件名需要和函数名一致。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeStyleGuide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> makeStyleGuide<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_23-8-当你export一个结构体-类-单例-函数库-对象-时用大驼峰。" tabindex="-1"><a class="header-anchor" href="#_23-8-当你export一个结构体-类-单例-函数库-对象-时用大驼峰。"><span>23.8 当你export一个结构体/类/单例/函数库/对象 时用大驼峰。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> AirbnbStyleGuide <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> AirbnbStyleGuide<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_23-9-简称和缩写应该全部大写或全部小写。" tabindex="-1"><a class="header-anchor" href="#_23-9-简称和缩写应该全部大写或全部小写。"><span>23.9 简称和缩写应该全部大写或全部小写。</span></a></h4><blockquote><p>Why? 名字都是给人读的，不是为了适应电脑的算法的。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> SmsContainer <span class="token keyword">from</span> <span class="token string">&#39;./containers/SmsContainer&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> HttpRequests <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> SMSContainer <span class="token keyword">from</span> <span class="token string">&#39;./containers/SMSContainer&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> HTTPRequests <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// also good</span>
<span class="token keyword">const</span> httpRequests <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token keyword">import</span> TextMessageContainer <span class="token keyword">from</span> <span class="token string">&#39;./containers/TextMessageContainer&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> requests <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_23-10-你可以用全大写字母设置静态变量-他需要满足三个条件。" tabindex="-1"><a class="header-anchor" href="#_23-10-你可以用全大写字母设置静态变量-他需要满足三个条件。"><span>23.10 你可以用全大写字母设置静态变量，他需要满足三个条件。</span></a></h4><blockquote><ol><li>导出变量</li><li>是 const 定义的， 保证不能被改变</li><li>这个变量是可信的，他的子属性都是不能被改变的</li></ol></blockquote><blockquote><p>Why? 这是一个附加工具，帮助开发者去辨识一个变量是不是不可变的。</p><ul><li>对于所有的 const 变量呢？ —— 这个是不必要的。大写变量不应该在同一个文件里定义并使用， 它只能用来作为导出变量。 赞同！</li><li>那导出的对象呢？ —— 大写变量处在export的最高级(e.g. EXPORTED_OBJECT.key) 并且他包含的所有子属性都是不可变的。</li></ul></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token constant">PRIVATE_VARIABLE</span> <span class="token operator">=</span> <span class="token string">&#39;should not be unnecessarily uppercased within a file&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">THING_TO_BE_CHANGED</span> <span class="token operator">=</span> <span class="token string">&#39;should obviously not be uppercased&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token constant">REASSIGNABLE_VARIABLE</span> <span class="token operator">=</span> <span class="token string">&#39;do not use let with uppercase variables&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// ---</span>

<span class="token comment">// 允许但不够语义化</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> apiKey <span class="token operator">=</span> <span class="token string">&#39;SOMEKEY&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 在大多数情况下更好</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">API_KEY</span> <span class="token operator">=</span> <span class="token string">&#39;SOMEKEY&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// ---</span>

<span class="token comment">// bad - 不必要的大写键，没有增加任何语义</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">MAPPING</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">KEY</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">MAPPING</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="accessors" tabindex="-1"><a class="header-anchor" href="#accessors"><span>Accessors</span></a></h3><h4 id="_24-1-不需要使用属性的访问器函数。" tabindex="-1"><a class="header-anchor" href="#_24-1-不需要使用属性的访问器函数。"><span>24.1 不需要使用属性的访问器函数。</span></a></h4><h4 id="_24-2-不要使用javascript的getters-setters-因为他们会产生副作用-并且难以测试、维护和理解。相反的-你可以用-getval-和setval-hello-去创造你自己的accessor函数" tabindex="-1"><a class="header-anchor" href="#_24-2-不要使用javascript的getters-setters-因为他们会产生副作用-并且难以测试、维护和理解。相反的-你可以用-getval-和setval-hello-去创造你自己的accessor函数"><span>24.2 不要使用JavaScript的<code>getters/setters</code>，因为他们会产生副作用，并且难以测试、维护和理解。相反的，你可以用 <code>getVal()</code>和<code>setVal(&#39;hello&#39;)</code>去创造你自己的accessor函数</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Dragon</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Dragon</span> <span class="token punctuation">{</span>
  <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_24-3-如果属性-方法是boolean-用-isval-或-hasval" tabindex="-1"><a class="header-anchor" href="#_24-3-如果属性-方法是boolean-用-isval-或-hasval"><span>24.3 如果属性/方法是<code>boolean</code>， 用 <code>isVal()</code> 或 <code>hasVal()</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dragon<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dragon<span class="token punctuation">.</span><span class="token function">hasAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_24-4-用get-和set-函数是可以的-但是要一起用" tabindex="-1"><a class="header-anchor" href="#_24-4-用get-和set-函数是可以的-但是要一起用"><span>24.4 用<code>get()</code>和<code>set()</code>函数是可以的，但是要一起用</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> lightsaber <span class="token operator">=</span> options<span class="token punctuation">.</span>lightsaber <span class="token operator">||</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;lightsaber&#39;</span><span class="token punctuation">,</span> lightsaber<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h3><h4 id="_25-1-通过哈希而不是原始值向事件装载数据时-不论是dom事件还是像backbone事件的很多属性-。-这使得后续的贡献者-程序员-向这个事件装载更多的数据时不用去找或者更新每个处理器。例如" tabindex="-1"><a class="header-anchor" href="#_25-1-通过哈希而不是原始值向事件装载数据时-不论是dom事件还是像backbone事件的很多属性-。-这使得后续的贡献者-程序员-向这个事件装载更多的数据时不用去找或者更新每个处理器。例如"><span>25.1 通过哈希而不是原始值向事件装载数据时(不论是DOM事件还是像Backbone事件的很多属性)。 这使得后续的贡献者（程序员）向这个事件装载更多的数据时不用去找或者更新每个处理器。例如：</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;listingUpdated&#39;</span><span class="token punctuation">,</span> listing<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;listingUpdated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> listingID</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something with listingID</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>prefer:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;listingUpdated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">listingID</span><span class="token operator">:</span> listing<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;listingUpdated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something with data.listingID</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jquery对象" tabindex="-1"><a class="header-anchor" href="#jquery对象"><span>jQuery对象</span></a></h3><h4 id="_26-1-jquery对象用-变量表示。" tabindex="-1"><a class="header-anchor" href="#_26-1-jquery对象用-变量表示。"><span>26.1 jQuery对象用$变量表示。</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> sidebar <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> $sidebar <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> $sidebarBtn <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar-btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_26-2-暂存jquery查找" tabindex="-1"><a class="header-anchor" href="#_26-2-暂存jquery查找"><span>26.2 暂存jQuery查找</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">setSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ...</span>

  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;background-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pink&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">setSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> $sidebar <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  $sidebar<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ...</span>

  $sidebar<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;background-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pink&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_26-3-dom查找用层叠式-sidebar-ul-或-父节点-子节点-sidebar-ul-jsperf" tabindex="-1"><a class="header-anchor" href="#_26-3-dom查找用层叠式-sidebar-ul-或-父节点-子节点-sidebar-ul-jsperf"><span>26.3 DOM查找用层叠式$(&#39;.sidebar ul&#39;) 或 父节点 &gt; 子节点 $(&#39;.sidebar &gt; ul&#39;). jsPerf</span></a></h4><h4 id="_26-4-用jquery对象查询作用域的find方法查询" tabindex="-1"><a class="header-anchor" href="#_26-4-用jquery对象查询作用域的find方法查询"><span>26.4 用jQuery对象查询作用域的find方法查询</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar &gt; ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
$sidebar<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es5-兼容性" tabindex="-1"><a class="header-anchor" href="#es5-兼容性"><span>ES5 兼容性</span></a></h3><h4 id="_27-1-参考kangax的es5兼容性列表" tabindex="-1"><a class="header-anchor" href="#_27-1-参考kangax的es5兼容性列表"><span>27.1 参考Kangax的ES5兼容性列表.</span></a></h4><h3 id="ecmascript-6-es-2015-styles" tabindex="-1"><a class="header-anchor" href="#ecmascript-6-es-2015-styles"><span>ECMAScript 6+ (ES 2015+) Styles</span></a></h3><h4 id="_28-1-这是收集到的各种es6特性的链接" tabindex="-1"><a class="header-anchor" href="#_28-1-这是收集到的各种es6特性的链接"><span>28.1 这是收集到的各种ES6特性的链接</span></a></h4><ol><li>箭头函数——Arrow Functions</li><li>类——Classes</li><li>对象缩写——Object Shorthand</li><li>对象简写——Object Concise</li><li>对象计算属性——Object Computed Properties</li><li>模板字符串——Template Strings</li><li>解构赋值——Destructuring</li><li>默认参数——Default Parameters</li><li>Rest</li><li>Array Spreads</li><li>Let and Const</li><li>幂操作符——Exponentiation Operator</li><li>迭代器和生成器——Iterators and Generators</li><li>模块——Modules</li></ol><h4 id="_28-2-不要用tc39-proposals-tc39还没有到-stage-3。" tabindex="-1"><a class="header-anchor" href="#_28-2-不要用tc39-proposals-tc39还没有到-stage-3。"><span>28.2 不要用TC39 proposals， TC39还没有到 stage 3。</span></a></h4><blockquote><p>Why? 它还不是最终版, 他可能还有很多变化，或者被撤销。 我们想要用的是 JavaScript， 提议还不是JavaScript。</p></blockquote><h3 id="standard-library" tabindex="-1"><a class="header-anchor" href="#standard-library"><span>Standard Library</span></a></h3><p>标准库中包含一些功能受损但是由于历史原因遗留的工具类</p><h4 id="_29-1-用-number-isnan-代替全局的-isnan-eslint-no-restricted-globals" tabindex="-1"><a class="header-anchor" href="#_29-1-用-number-isnan-代替全局的-isnan-eslint-no-restricted-globals"><span>29.1 用 Number.isNaN 代替全局的 isNaN. eslint: <code>no-restricted-globals</code></span></a></h4><blockquote><p>Why? 全局 isNaN 强制把非数字转成数字， 然后对于任何强转后为 NaN 的变量都返回 true 如果你想用这个功能，就显式的用它。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;1.2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;1.2.3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// good</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;1.2.3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;1.2.3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_29-2-用-number-isfinite-代替-isfinite-eslint-no-restricted-globals" tabindex="-1"><a class="header-anchor" href="#_29-2-用-number-isfinite-代替-isfinite-eslint-no-restricted-globals"><span>29.2 用 Number.isFinite 代替 isFinite. eslint: <code>no-restricted-globals</code></span></a></h4><blockquote><p>Why? 理由同上，会把一个非数字变量强转成数字，然后做判断。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&#39;2e3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// good</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&#39;2e3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;2e3&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="testing" tabindex="-1"><a class="header-anchor" href="#testing"><span>Testing</span></a></h3><h4 id="_30-1-yup" tabindex="-1"><a class="header-anchor" href="#_30-1-yup"><span>30.1 Yup.</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_30-2-no-but-seriously" tabindex="-1"><a class="header-anchor" href="#_30-2-no-but-seriously"><span>30.2 No, but seriously:</span></a></h4><ul><li>无论用那个测试框架，你都需要写测试。</li><li>尽量去写很多小而美的纯函数，减少突变的发生</li><li>小心 stub 和 mock —— 这会让你的测试变得脆弱。</li><li>在 Airbnb 首选 mocha。 tape 偶尔被用来测试一些小的，独立的模块。</li><li>100%测试覆盖率是我们努力的目标，即便实际上很少达到。</li><li>每当你修了一个bug， 都要写一个回归测试。 一个bug修复了，没有回归测试，很可能以后会再次出问题。</li></ul>`,429),o=[p];function c(i,l){return a(),s("div",null,o)}const d=n(t,[["render",c],["__file","Airbnb JavaScript 风格指南.html.vue"]]),k=JSON.parse('{"path":"/posts/Airbnb%20JavaScript%20%E9%A3%8E%E6%A0%BC%E6%8C%87%E5%8D%97.html","title":"Airbnb JavaScript 风格指南","lang":"zh-CN","frontmatter":{"title":"Airbnb JavaScript 风格指南","date":"2023-05-22T17:12:15.000Z","categories":["JavaScript"],"tags":["JavaScript"],"description":"Types 1.1 基本类型: 你可以直接获取到基本类型的值 string number boolean null undefined symbol 1.2 复杂类型: 复杂类型赋值是获取到他的引用的值。 相当于传引用 object array function 1.3 javascript 判断数据类型方法 typeof 引用类型，除了 functi...","head":[["meta",{"property":"og:url","content":"https://www.lfangq.top/posts/Airbnb%20JavaScript%20%E9%A3%8E%E6%A0%BC%E6%8C%87%E5%8D%97.html"}],["meta",{"property":"og:site_name","content":"Lfangq"}],["meta",{"property":"og:title","content":"Airbnb JavaScript 风格指南"}],["meta",{"property":"og:description","content":"Types 1.1 基本类型: 你可以直接获取到基本类型的值 string number boolean null undefined symbol 1.2 复杂类型: 复杂类型赋值是获取到他的引用的值。 相当于传引用 object array function 1.3 javascript 判断数据类型方法 typeof 引用类型，除了 functi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T10:39:44.000Z"}],["meta",{"property":"article:author","content":"Lfangq"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2023-05-22T17:12:15.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T10:39:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Airbnb JavaScript 风格指南\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-22T17:12:15.000Z\\",\\"dateModified\\":\\"2024-05-30T10:39:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lfangq\\",\\"url\\":\\"https://www.lfangq.top/\\"}]}"]]},"headers":[{"level":3,"title":"Types","slug":"types","link":"#types","children":[]},{"level":3,"title":"References","slug":"references","link":"#references","children":[]},{"level":3,"title":"Objects","slug":"objects","link":"#objects","children":[]},{"level":3,"title":"Arrays","slug":"arrays","link":"#arrays","children":[]},{"level":3,"title":"Destructuring","slug":"destructuring","link":"#destructuring","children":[]},{"level":3,"title":"Strings","slug":"strings","link":"#strings","children":[]},{"level":3,"title":"Functions","slug":"functions","link":"#functions","children":[]},{"level":3,"title":"Arrow Functions","slug":"arrow-functions","link":"#arrow-functions","children":[]},{"level":3,"title":"Classes & Constructors","slug":"classes-constructors","link":"#classes-constructors","children":[]},{"level":3,"title":"Modules","slug":"modules","link":"#modules","children":[]},{"level":3,"title":"Iterators and Generators","slug":"iterators-and-generators","link":"#iterators-and-generators","children":[]},{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":3,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":3,"title":"Hoisting","slug":"hoisting","link":"#hoisting","children":[]},{"level":3,"title":"Comparison Operators & Equality","slug":"comparison-operators-equality","link":"#comparison-operators-equality","children":[]},{"level":3,"title":"Blocks","slug":"blocks","link":"#blocks","children":[]},{"level":3,"title":"Control Statements","slug":"control-statements","link":"#control-statements","children":[]},{"level":3,"title":"Comments","slug":"comments","link":"#comments","children":[]},{"level":3,"title":"Whitespace","slug":"whitespace","link":"#whitespace","children":[]},{"level":3,"title":"Commas","slug":"commas","link":"#commas","children":[]},{"level":3,"title":"Semicolons","slug":"semicolons","link":"#semicolons","children":[]},{"level":3,"title":"Type Casting & Coercion","slug":"type-casting-coercion","link":"#type-casting-coercion","children":[]},{"level":3,"title":"Naming Conventions","slug":"naming-conventions","link":"#naming-conventions","children":[]},{"level":3,"title":"Accessors","slug":"accessors","link":"#accessors","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]},{"level":3,"title":"jQuery对象","slug":"jquery对象","link":"#jquery对象","children":[]},{"level":3,"title":"ES5 兼容性","slug":"es5-兼容性","link":"#es5-兼容性","children":[]},{"level":3,"title":"ECMAScript 6+ (ES 2015+) Styles","slug":"ecmascript-6-es-2015-styles","link":"#ecmascript-6-es-2015-styles","children":[]},{"level":3,"title":"Standard Library","slug":"standard-library","link":"#standard-library","children":[]},{"level":3,"title":"Testing","slug":"testing","link":"#testing","children":[]}],"git":{"createdTime":1717034099000,"updatedTime":1717065584000,"contributors":[{"name":"lfangq","email":"2251234678@qq.com","commits":2}]},"readingTime":{"minutes":42.73,"words":12818},"filePathRelative":"posts/Airbnb JavaScript 风格指南.md","localizedDate":"2023年5月22日","excerpt":"","autoDesc":true}');export{d as comp,k as data};
