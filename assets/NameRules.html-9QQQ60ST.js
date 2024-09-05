import{_ as s,o as e,c as o,a as n}from"./app-Nj8ggHko.js";const a={},t=n(`<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The English translation of this page has not been completed, you are welcome to contribute translations to us.</p><p>You can use the <strong>Chrome Translation Plugin</strong> to translate entire pages for reference.</p></div><h1 id="namerules-class" tabindex="-1"><a class="header-anchor" href="#namerules-class" aria-hidden="true">#</a> NameRules <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">NameRules</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.88</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p><s><code>NameConditions</code></s> 更名为 <code>NameRules</code></p><p>作为 lambda 整体判断条件使用</p><p>移动到 base 包名</p><p>私有化构造方法</p><p><strong>Function Illustrate</strong></p><blockquote><p>这是一个模糊 <code>Class</code>、<code>Member</code> 名称条件实现类。</p></blockquote><p>可对 R8 混淆后的 <code>Class</code>、<code>Member</code> 进行更加详细的定位。</p><h2 id="string-issynthetic-i-ext-method" tabindex="-1"><a class="header-anchor" href="#string-issynthetic-i-ext-method" aria-hidden="true">#</a> String.isSynthetic <span class="symbol">- i-ext-method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">isSynthetic</span><span style="color:#ADBAC7;">(index: </span><span style="color:#F69D50;">Int</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.88</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>统一合并到扩展方法并改名</p><p><strong>Function Illustrate</strong></p><blockquote><p>是否为匿名类的主类调用对象。</p></blockquote><h2 id="string-isonlysymbols-i-ext-method" tabindex="-1"><a class="header-anchor" href="#string-isonlysymbols-i-ext-method" aria-hidden="true">#</a> String.isOnlySymbols <span class="symbol">- i-ext-method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">isOnlySymbols</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.88</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>统一合并到扩展方法并改名</p><p><strong>Function Illustrate</strong></p><blockquote><p>是否只有符号。</p></blockquote><h2 id="string-isonlyletters-i-ext-method" tabindex="-1"><a class="header-anchor" href="#string-isonlyletters-i-ext-method" aria-hidden="true">#</a> String.isOnlyLetters <span class="symbol">- i-ext-method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">isOnlyLetters</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.88</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>统一合并到扩展方法并改名</p><p><strong>Function Illustrate</strong></p><blockquote><p>是否只有字母。</p></blockquote><h2 id="string-isonlynumbers-i-ext-method" tabindex="-1"><a class="header-anchor" href="#string-isonlynumbers-i-ext-method" aria-hidden="true">#</a> String.isOnlyNumbers <span class="symbol">- i-ext-method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">isOnlyNumbers</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.88</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>统一合并到扩展方法并改名</p><p><strong>Function Illustrate</strong></p><blockquote><p>是否只有数字。</p></blockquote><h2 id="string-isonlylettersnumbers-i-ext-method" tabindex="-1"><a class="header-anchor" href="#string-isonlylettersnumbers-i-ext-method" aria-hidden="true">#</a> String.isOnlyLettersNumbers <span class="symbol">- i-ext-method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">isOnlyLettersNumbers</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.88</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>统一合并到扩展方法并改名</p><p><strong>Function Illustrate</strong></p><blockquote><p>是否只有字母或数字。</p></blockquote><h2 id="string-isonlylowercase-i-ext-method" tabindex="-1"><a class="header-anchor" href="#string-isonlylowercase-i-ext-method" aria-hidden="true">#</a> String.isOnlyLowercase <span class="symbol">- i-ext-method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">isOnlyLowercase</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.88</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>统一合并到扩展方法并改名</p><p><strong>Function Illustrate</strong></p><blockquote><p>是否只有小写字母。</p></blockquote><p>在没有其它条件的情况下设置此条件允许判断对象存在字母以外的字符。</p><h2 id="string-isonlyuppercase-i-ext-method" tabindex="-1"><a class="header-anchor" href="#string-isonlyuppercase-i-ext-method" aria-hidden="true">#</a> String.isOnlyUppercase <span class="symbol">- i-ext-method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">isOnlyUppercase</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.88</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>统一合并到扩展方法并改名</p><p><strong>Function Illustrate</strong></p><blockquote><p>是否只有大写字母。</p></blockquote><p>在没有其它条件的情况下设置此条件允许判断对象存在字母以外的字符。</p>`,71),l=[t];function p(c,d){return e(),o("div",null,l)}const i=s(a,[["render",p],["__file","NameRules.html.vue"]]);export{i as default};
