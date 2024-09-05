import{_ as s,o as e,c as a,a as o}from"./app-Nj8ggHko.js";const n={},l=o(`<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The English translation of this page has not been completed, you are welcome to contribute translations to us.</p><p>You can use the <strong>Chrome Translation Plugin</strong> to translate entire pages for reference.</p></div><h1 id="ylog-object" tabindex="-1"><a class="header-anchor" href="#ylog-object" aria-hidden="true">#</a> YLog <span class="symbol">- object</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YLog</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>全局 Log 管理类。</p></blockquote><h2 id="inmemorydata-field" tabindex="-1"><a class="header-anchor" href="#inmemorydata-field" aria-hidden="true">#</a> inMemoryData <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> inMemoryData: </span><span style="color:#F69D50;">MutableList</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">YLogData</span><span style="color:#ADBAC7;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>当前全部已记录的日志数据。</p></blockquote><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>获取到的日志数据在 Hook APP (宿主) 及模块进程中是相互隔离的。</p></div><h2 id="contents-field" tabindex="-1"><a class="header-anchor" href="#contents-field" aria-hidden="true">#</a> contents <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> contents: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获取当前日志文件内容。</p></blockquote><p>如果当前没有已记录的日志会返回空字符串。</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>获取到的日志数据在 Hook APP (宿主) 及模块进程中是相互隔离的。</p></div><h2 id="contents-method" tabindex="-1"><a class="header-anchor" href="#contents-method" aria-hidden="true">#</a> contents <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">contents</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">data</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">List</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">YLogData</span><span style="color:#ADBAC7;">&gt;): </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获取、格式化当前日志文件内容。</p></blockquote><p>如果当前没有已记录的日志 (<code>data</code> 为空) 会返回空字符串。</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>获取到的日志数据在 Hook APP (宿主) 及模块进程中是相互隔离的。</p></div><h2 id="clear-method" tabindex="-1"><a class="header-anchor" href="#clear-method" aria-hidden="true">#</a> clear <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">clear</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>清除全部已记录的日志。</p></blockquote><p>你也可以直接获取 <a href="#inmemorydata-field">inMemoryData</a> 来清除。</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>获取到的日志数据在 Hook APP (宿主) 及模块进程中是相互隔离的。</p></div><h2 id="savetofile-method" tabindex="-1"><a class="header-anchor" href="#savetofile-method" aria-hidden="true">#</a> saveToFile <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">saveToFile</span><span style="color:#ADBAC7;">(fileName: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">data</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">List</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">YLogData</span><span style="color:#ADBAC7;">&gt;)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>保存当前日志到文件。</p></blockquote><p>若当前未开启 <code>Configs.isRecord</code> 或记录为空则不会进行任何操作。</p><p>日志文件会追加到 <code>fileName</code> 的文件结尾，若文件不存在会自动创建。</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>文件读写权限取决于当前宿主、模块已获取的权限。</p></div><h2 id="configs-object" tabindex="-1"><a class="header-anchor" href="#configs-object" aria-hidden="true">#</a> Configs <span class="symbol">- object</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Configs</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>配置 <code>YLog</code>。</p></blockquote><h3 id="tag-field" tabindex="-1"><a class="header-anchor" href="#tag-field" aria-hidden="true">#</a> TAG <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> TAG: </span><span style="color:#F69D50;">Int</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>标签。</p></blockquote><h3 id="priority-field" tabindex="-1"><a class="header-anchor" href="#priority-field" aria-hidden="true">#</a> PRIORITY <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> PRIORITY: </span><span style="color:#F69D50;">Int</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>优先级。</p></blockquote><h3 id="package-name-field" tabindex="-1"><a class="header-anchor" href="#package-name-field" aria-hidden="true">#</a> PACKAGE_NAME <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> PACKAGE_NAME: </span><span style="color:#F69D50;">Int</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>当前宿主的包名。</p></blockquote><h3 id="user-id-field" tabindex="-1"><a class="header-anchor" href="#user-id-field" aria-hidden="true">#</a> USER_ID <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> USER_ID: </span><span style="color:#F69D50;">Int</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>当前宿主的用户 ID (主用户不显示)。</p></blockquote><h3 id="tag-field-1" tabindex="-1"><a class="header-anchor" href="#tag-field-1" aria-hidden="true">#</a> tag <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> tag: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>这是一个调试日志的全局标识。</p></blockquote><p>默认文案为 <code>YukiHookAPI</code>。</p><p>你可以修改为你自己的文案。</p><h3 id="isenable-field" tabindex="-1"><a class="header-anchor" href="#isenable-field" aria-hidden="true">#</a> isEnable <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> isEnable: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>是否启用调试日志的输出功能。</p></blockquote><p>关闭后将会停用 <code>YukiHookAPI</code> 对全部日志的输出。</p><p>但是不影响当你手动调用下面这些方法输出日志。</p><p><code>debug</code>、<code>info</code>、<code>warn</code>、<code>error</code>。</p><p>当 <code>isEnable</code> 关闭后 <code>YukiHookAPI.Configs.isDebug</code> 也将同时关闭。</p><h3 id="isrecord-field" tabindex="-1"><a class="header-anchor" href="#isrecord-field" aria-hidden="true">#</a> isRecord <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> isRecord: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>是否启用调试日志的记录功能。</p></blockquote><p>开启后将会在内存中记录全部可用的日志和异常堆栈。</p><p>需要同时启用 <a href="#isenable-field">isEnable</a> 才能有效。</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>过量的日志可能会导致宿主运行缓慢或造成频繁 GC。</p></div><p>开启后你可以调用 <a href="#savetofile-method">YLog.saveToFile</a> 实时保存日志到文件或使用 <a href="#contents-field">YLog.contents</a> 获取实时日志文件。</p><h3 id="elements-method" tabindex="-1"><a class="header-anchor" href="#elements-method" aria-hidden="true">#</a> elements <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">elements</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">vararg</span><span style="color:#ADBAC7;"> item: </span><span style="color:#F69D50;">Int</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>自定义调试日志对外显示的元素。</p></blockquote><p>只对日志记录和 (Xposed) 宿主环境的日志生效。</p><p>日志元素的排列将按照你在 <code>item</code> 中设置的顺序进行显示。</p><p>你还可以留空 <code>item</code> 以不显示除日志内容外的全部元素。</p><p>可用的元素有：<code>TAG</code>、<code>PRIORITY</code>、<code>PACKAGE_NAME</code>、<code>USER_ID</code>。</p><p><strong>功能示例</strong></p><p>打印的日志样式将按照你设置的排列顺序和元素内容进行。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">elements</span><span style="color:#ADBAC7;">(TAG, PRIORITY, PACKAGE_NAME, USER_ID)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上内容定义的日志将显示为如下样式。</p><blockquote><p>示例如下</p></blockquote><div class="language-text" data-ext="text"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#adbac7;">[YukiHookAPI][D][com.demo.test][999]--&gt; This is a log</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><p>如果我们调整元素顺序以及减少个数，那么结果又会不一样。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">elements</span><span style="color:#ADBAC7;">(PACKAGE_NAME, USER_ID, PRIORITY)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上内容定义的日志将显示为如下样式。</p><blockquote><p>示例如下</p></blockquote><div class="language-text" data-ext="text"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#adbac7;">[com.demo.test][999][D]--&gt; This is a log</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><h2 id="debug-method" tabindex="-1"><a class="header-anchor" href="#debug-method" aria-hidden="true">#</a> debug <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">debug</span><span style="color:#ADBAC7;">(msg: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, e: </span><span style="color:#F69D50;">Throwable</span><span style="color:#ADBAC7;">?, tag: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, env: </span><span style="color:#F69D50;">EnvType</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>打印 Debug 级别 Log。</p></blockquote><h2 id="info-method" tabindex="-1"><a class="header-anchor" href="#info-method" aria-hidden="true">#</a> info <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">info</span><span style="color:#ADBAC7;">(msg: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, e: </span><span style="color:#F69D50;">Throwable</span><span style="color:#ADBAC7;">?, tag: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, env: </span><span style="color:#F69D50;">EnvType</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>打印 Info 级别 Log。</p></blockquote><h2 id="warn-method" tabindex="-1"><a class="header-anchor" href="#warn-method" aria-hidden="true">#</a> warn <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">warn</span><span style="color:#ADBAC7;">(msg: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, e: </span><span style="color:#F69D50;">Throwable</span><span style="color:#ADBAC7;">?, tag: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, env: </span><span style="color:#F69D50;">EnvType</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>打印 Warn 级别 Log。</p></blockquote><h2 id="error-method" tabindex="-1"><a class="header-anchor" href="#error-method" aria-hidden="true">#</a> error <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">error</span><span style="color:#ADBAC7;">(msg: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, e: </span><span style="color:#F69D50;">Throwable</span><span style="color:#ADBAC7;">?, tag: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, env: </span><span style="color:#F69D50;">EnvType</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>打印 Error 级别 Log。</p></blockquote><h2 id="envtype-class" tabindex="-1"><a class="header-anchor" href="#envtype-class" aria-hidden="true">#</a> EnvType <span class="symbol">- class</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">enum</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">EnvType</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>需要打印的日志环境类型。</p></blockquote><p>决定于模块与 (Xposed) 宿主环境使用的打印方式。</p><h3 id="logd-enum" tabindex="-1"><a class="header-anchor" href="#logd-enum" aria-hidden="true">#</a> LOGD <span class="symbol">- enum</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">LOGD</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>仅使用 <code>android.util.Log</code>。</p></blockquote><h3 id="xposed-environment-enum" tabindex="-1"><a class="header-anchor" href="#xposed-environment-enum" aria-hidden="true">#</a> XPOSED_ENVIRONMENT <span class="symbol">- enum</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">XPOSED_ENVIRONMENT</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>仅在 (Xposed) 宿主环境使用。</p></blockquote><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>只能在 (Xposed) 宿主环境中使用，模块环境将不生效。</p></div><h3 id="scope-enum" tabindex="-1"><a class="header-anchor" href="#scope-enum" aria-hidden="true">#</a> SCOPE <span class="symbol">- enum</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">SCOPE</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>分区使用。</p></blockquote><p>(Xposed) 宿主环境仅使用 <code>XPOSED_ENVIRONMENT</code>。</p><p>模块环境仅使用 <code>LOGD</code>。</p><h3 id="both-enum" tabindex="-1"><a class="header-anchor" href="#both-enum" aria-hidden="true">#</a> BOTH <span class="symbol">- enum</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">BOTH</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>同时使用。</p></blockquote><p>(Xposed) 宿主环境使用 <code>LOGD</code> 与 <code>XPOSED_ENVIRONMENT</code>。</p><p>模块环境仅使用 <code>LOGD</code>。</p><h1 class="deprecated">LoggerFactory - kt</h1><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><code>v1.2.0</code> <code>deprecated</code></p><p>请迁移到 <code>YLog</code></p>`,193),t=[l];function p(c,d){return e(),a("div",null,t)}const i=s(n,[["render",p],["__file","YLog.html.vue"]]);export{i as default};
