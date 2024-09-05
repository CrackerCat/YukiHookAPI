import{_ as o,r as l,o as p,c,b as s,d as n,e as i,a}from"./app-Nj8ggHko.js";const t={},d=a(`<h1 id="moduleapplication-class" tabindex="-1"><a class="header-anchor" href="#moduleapplication-class" aria-hidden="true">#</a> ModuleApplication <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">open</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ModuleApplication</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">Application</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.77</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>这是对使用 <code>YukiHookAPI</code> Xposed 模块实现中的一个扩展功能。</p></blockquote><p>在你的 Xposed 模块的 <code>Application</code> 中继承此类。</p><p>或在 <code>AndroidManifest.xml</code> 的 <code>application</code> 标签中指定此类。</p><p>目前可实现功能如下</p>`,9),r=a("<li><p>全局共享模块中静态的 <code>appContext</code></p></li><li><p>在模块与宿主中装载 <code>YukiHookAPI.Config</code> 以确保 <code>YukiHookAPI.Configs.debugTag</code> 不需要重复定义</p></li><li><p>在模块与宿主中使用 <code>YukiHookDataChannel</code> 进行通讯</p></li>",3),u={href:"https://github.com/tiann/FreeReflection",target:"_blank",rel:"noopener noreferrer"},A=s("li",null,[s("p",null,[n("在模块中使用 "),s("code",null,"YukiHookAPI.Status.isTaiChiModuleActive"),n(" 判断太极、无极激活状态")])],-1),m=a(`<p><strong>功能示例</strong></p><p>将此类继承到你的自定义 <code>Application</code> 上。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">package</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">com.demo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">MyApplication</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">ModuleApplication</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onCreate</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">onCreate</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>AndroidManifest.xml</code> 的 <code>application</code> 标签中指定自定义的 <code>Application</code>。</p><blockquote><p>示例如下</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">application</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:name</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;com.demo.MyApplication&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    ...&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你不需要自定义 <code>Application</code> 可以直接将 <code>ModuleApplication</code> 设置到 <code>AndroidManifest.xml</code> 的 <code>application</code> 标签中。</p><blockquote><p>示例如下</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">application</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:name</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;com.highcapable.yukihookapi.hook.xposed.application.ModuleApplication&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    ...&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="appcontext-field" tabindex="-1"><a class="header-anchor" href="#appcontext-field" aria-hidden="true">#</a> appContext <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> appContext: </span><span style="color:#F69D50;">ModuleApplication</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.77</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取全局静态 <code>Application</code> 实例。</p></blockquote>`,16);function y(b,v){const e=l("ExternalLinkIcon");return p(),c("div",null,[d,s("ul",null,[r,s("li",null,[s("p",null,[n("在模块中使用系统隐藏 API，核心技术引用了开源项目 "),s("a",u,[n("FreeReflection"),i(e)])])]),A]),m])}const C=o(t,[["render",y],["__file","ModuleApplication.html.vue"]]);export{C as default};
