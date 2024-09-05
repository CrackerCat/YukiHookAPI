import{_ as e,o as s,c as o,a}from"./app-Nj8ggHko.js";const p={},t=a(`<h1 id="moduleappcompatactivity-class" tabindex="-1"><a class="header-anchor" href="#moduleappcompatactivity-class" aria-hidden="true">#</a> ModuleAppCompatActivity <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">open</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ModuleAppCompatActivity</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">AppCompatActivity</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>代理 <code>AppCompatActivity</code>。</p></blockquote><p>继承于此类的 <code>Activity</code> 可以同时在宿主与模块中启动。</p><p>在 (Xposed) 宿主环境需要在宿主启动时调用 <code>Context.registerModuleAppActivities</code> 进行注册。</p><p>在 (Xposed) 宿主环境需要重写 <code>moduleTheme</code> 设置 AppCompat 主题，否则会无法启动。</p><h2 id="moduletheme-field" tabindex="-1"><a class="header-anchor" href="#moduletheme-field" aria-hidden="true">#</a> moduleTheme <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">open</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> moduleTheme: </span><span style="color:#F69D50;">Int</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>设置当前代理的 <code>Activity</code> 主题。</p></blockquote><h2 id="proxyclassname-field" tabindex="-1"><a class="header-anchor" href="#proxyclassname-field" aria-hidden="true">#</a> proxyClassName <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">open</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> proxyClassName: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.10</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>设置当前代理的 <code>Activity</code> 类名。</p></blockquote><p>留空则使用 <code>Context.registerModuleAppActivities</code> 时设置的类名</p><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>代理的 <strong>Activity</strong> 类名必须存在于宿主的 AndroidMainifest 清单中。</p></div>`,23),c=[t];function n(l,d){return s(),o("div",null,c)}const r=e(p,[["render",n],["__file","ModuleAppCompatActivity.html.vue"]]);export{r as default};
