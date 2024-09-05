import{_ as s,o as a,c as n,a as e}from"./app-Nj8ggHko.js";const o={},l=e(`<h1 id="xposed-模块数据存储" tabindex="-1"><a class="header-anchor" href="#xposed-模块数据存储" aria-hidden="true">#</a> Xposed 模块数据存储</h1><blockquote><p>这是一个自动对接 <code>SharedPreferences</code> 和 <code>XSharedPreferences</code> 的高效模块数据存储解决方案。</p></blockquote><p>我们需要存储模块的数据，以供宿主调用，这个时候会遇到原生 <code>Sp</code> 存储的数据互通阻碍。</p><p>原生的 <code>Xposed</code> 给我们提供了一个 <code>XSharedPreferences</code> 用于读取模块的 <code>Sp</code> 数据。</p><h2 id="在-activity-中使用" tabindex="-1"><a class="header-anchor" href="#在-activity-中使用" aria-hidden="true">#</a> 在 Activity 中使用</h2><blockquote><p>这里描述了在 <code>Activity</code> 中装载 <code>YukiHookPrefsBridge</code> 的场景。</p></blockquote><p>通常情况下我们可以这样在 Hook APP (宿主) 内对其进行初始化。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">XSharedPreferences</span><span style="color:#ADBAC7;">(BuildConfig.APPLICATION_ID)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有没有方便快捷的解决方案呢，此时你就可以使用 <code>YukiHookAPI</code> 的扩展能力快速实现这个功能。</p><p>当你在模块中存储数据的时候，若当前处于 <code>Activity</code> 内，可以使用如下方法。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">edit</span><span style="color:#ADBAC7;"> { </span><span style="color:#DCBDFB;">putString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_name&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;saved_value&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当你在 Hook APP (宿主) 中读取数据时，可以使用如下方法。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> testName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> prefs.</span><span style="color:#DCBDFB;">getString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_name&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;default_value&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你不需要考虑传入模块的包名以及一系列复杂的权限配置，一切都交给 <code>YukiHookPrefsBridge</code> 来处理。</p><p>若要实现存储的区域划分，你可以指定每个 <code>prefs</code> 文件的名称。</p><p>在模块的 <code>Activity</code> 中这样使用。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// 推荐用法</span></span>
<span class="line"><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;specify_file_name&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">edit</span><span style="color:#ADBAC7;"> { </span><span style="color:#DCBDFB;">putString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_name&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;saved_value&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#768390;">// 也可以这样用</span></span>
<span class="line"><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">name</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;specify_file_name&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">edit</span><span style="color:#ADBAC7;"> { </span><span style="color:#DCBDFB;">putString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_name&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;saved_value&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Hook APP (宿主) 中这样读取。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// 推荐用法</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> testName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;specify_file_name&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">getString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_name&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;default_value&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#768390;">// 也可以这样用</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> testName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> prefs.</span><span style="color:#DCBDFB;">name</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;specify_file_name&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">getString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_name&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;default_value&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若你的项目中有大量的固定数据需要存储和读取，推荐使用 <code>PrefsData</code> 来创建模板。</p><p>通过上面的示例，你可以调用 <code>edit</code> 方法使用以下两种方式来批量存储数据。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// &lt;方案 1&gt;</span></span>
<span class="line"><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">edit</span><span style="color:#ADBAC7;"> { </span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">putString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_name_1&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;saved_value_1&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">putString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_name_2&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;saved_value_2&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">putString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_name_3&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;saved_value_3&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#768390;">// &lt;方案 2&gt;</span></span>
<span class="line"><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">edit</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    .</span><span style="color:#DCBDFB;">putString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_name_1&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;saved_value_1&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    .</span><span style="color:#DCBDFB;">putString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_name_2&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;saved_value_2&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    .</span><span style="color:#DCBDFB;">putString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_name_3&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;saved_value_3&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    .</span><span style="color:#DCBDFB;">apply</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">小提示</p><p>更多功能请参考 <a href="../public/com/highcapable/yukihookapi/hook/xposed/prefs/YukiHookPrefsBridge">YukiHookPrefsBridge</a>、<a href="../public/com/highcapable/yukihookapi/hook/xposed/prefs/data/PrefsData">PrefsData</a>。</p></div><h2 id="在-preferencefragment-中使用" tabindex="-1"><a class="header-anchor" href="#在-preferencefragment-中使用" aria-hidden="true">#</a> 在 PreferenceFragment 中使用</h2><blockquote><p>这里描述了在 <code>PreferenceFragment</code> 中装载 <code>YukiHookPrefsBridge</code> 的场景。</p></blockquote><p>若你的模块使用了 <code>PreferenceFragmentCompat</code>，你现在可以将其继承类开始迁移到 <code>ModulePreferenceFragment</code>。</p><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>你必须继承 <strong>ModulePreferenceFragment</strong> 才能实现 <strong>YukiHookPrefsBridge</strong> 的模块存储功能。</p></div><div class="custom-container tip"><p class="custom-container-title">小提示</p><p>更多功能请参考 <a href="../public/com/highcapable/yukihookapi/hook/xposed/prefs/ui/ModulePreferenceFragment">ModulePreferenceFragment</a>。</p></div><h2 id="使用原生方式存储" tabindex="-1"><a class="header-anchor" href="#使用原生方式存储" aria-hidden="true">#</a> 使用原生方式存储</h2><p>在模块环境中 <code>YukiHookPrefsBridge</code> 默认会将数据存储到模块自己的私有目录 (或 Hook Framework 提供的共享目录) 中。</p><p>在宿主环境中使用 <code>YukiHookPrefsBridge</code> 默认会读取模块自己的私有目录 (或 Hook Framework 提供的共享目录) 中的数据。</p><p>如果你想直接将数据存储到模块或宿主当前环境自身的私有目录，你可以使用 <code>native</code> 方法。</p><p>例如模块的目录是 <code>.../com.demo.test.module/shared_prefs</code>，宿主的目录是 <code>.../com.demo.test.host/shared_prefs</code>。</p><p>以下是在 <code>Activity</code> 中的用法。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// 存储私有数据</span></span>
<span class="line"><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">native</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">edit</span><span style="color:#ADBAC7;"> { </span><span style="color:#DCBDFB;">putBoolean</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;isolation_data&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">true</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#768390;">// 读取私有数据</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> privateData </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">native</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">getBoolean</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;isolation_data&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#768390;">// 存储共享数据</span></span>
<span class="line"><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">edit</span><span style="color:#ADBAC7;"> { </span><span style="color:#DCBDFB;">putBoolean</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;public_data&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">true</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#768390;">// 读取共享数据</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> publicData </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">getBoolean</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;public_data&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是在 <code>PackageParam</code> 中的用法。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// 存储私有数据</span></span>
<span class="line"><span style="color:#ADBAC7;">prefs.</span><span style="color:#DCBDFB;">native</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">edit</span><span style="color:#ADBAC7;"> { </span><span style="color:#DCBDFB;">putBoolean</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;isolation_data&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">true</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#768390;">// 读取私有数据</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> privateData </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> prefs.</span><span style="color:#DCBDFB;">native</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">getBoolean</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;isolation_data&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#768390;">// 读取共享数据</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> publicData </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> prefs.</span><span style="color:#DCBDFB;">getBoolean</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;public_data&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>native</code> 方法后，无论在 <code>Activity</code> 还是 <code>PackageParam</code> 中都会将数据<u><strong>在对应环境的私有目录中</strong></u>存储、读取，数据相互隔离。</p><div class="custom-container tip"><p class="custom-container-title">小提示</p><p>更多功能请参考 <a href="../public/com/highcapable/yukihookapi/hook/xposed/prefs/YukiHookPrefsBridge">YukiHookPrefsBridge</a>。</p></div>`,47),p=[l];function t(c,r){return a(),n("div",null,p)}const d=s(o,[["render",t],["__file","xposed-storage.html.vue"]]);export{d as default};
