import{_ as s,o as n,c as a,a as e}from"./app-Nj8ggHko.js";const l={},o=e(`<h1 id="xposed-module-and-host-channel" tabindex="-1"><a class="header-anchor" href="#xposed-module-and-host-channel" aria-hidden="true">#</a> Xposed Module and Host Channel</h1><blockquote><p>This is a solution that uses system out-of-order broadcasting to send and receive data between the Module App and the Host App.</p></blockquote><div class="custom-container danger"><p class="custom-container-title">Condition that needs to be met</p><p>The Module App and the Host App need to remain alive, otherwise communication cannot be established.</p></div><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h2><blockquote><p>The basic usage of the <code>wait</code> and <code>put</code> methods is described here.</p></blockquote><p>By using <code>dataChannel</code> to realize the communication bridge between the Module App and the Host App, the principle is to send and receive system out-of-order broadcasts.</p><blockquote><p>The Module App example is as follows</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// Get from the Host App of the specified package name</span></span>
<span class="line"><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">&gt;(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;key_from_host&quot;</span><span style="color:#ADBAC7;">) { </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#768390;">// Send to the Host App with the specified package name</span></span>
<span class="line"><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">put</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;key_from_module&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;I am module&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>The Host App example is as follows</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// Get from the Module App</span></span>
<span class="line"><span style="color:#ADBAC7;">dataChannel.</span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">&gt;(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;key_from_module&quot;</span><span style="color:#ADBAC7;">) { </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#768390;">// Send to the Module App</span></span>
<span class="line"><span style="color:#ADBAC7;">dataChannel.</span><span style="color:#DCBDFB;">put</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;key_from_host&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;I am host&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can leave the <code>value</code> of <code>dataChannel</code> unset to only notify the Module App or Host App to call back the <code>wait</code> method.</p><blockquote><p>The Module App example is as follows</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// Get from the Host App of the specified package name</span></span>
<span class="line"><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;listener_from_host&quot;</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#768390;">// Send to the Host App with the specified package name</span></span>
<span class="line"><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">put</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;listener_from_module&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>The Host App example is as follows</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// Get from the Module App</span></span>
<span class="line"><span style="color:#ADBAC7;">dataChannel.</span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;listener_from_module&quot;</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#768390;">// Send to the Module App</span></span>
<span class="line"><span style="color:#ADBAC7;">dataChannel.</span><span style="color:#DCBDFB;">put</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;listener_from_host&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>The receiver needs to stay alive to receive the communication data.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>For more functions, please refer to <a href="../public/com/highcapable/yukihookapi/hook/xposed/channel/YukiHookDataChannel">YukiHookDataChannel</a>.</p></div><h2 id="determine-module-app-and-host-app-version-match" tabindex="-1"><a class="header-anchor" href="#determine-module-app-and-host-app-version-match" aria-hidden="true">#</a> Determine Module App and Host App Version Match</h2><blockquote><p>Through the communication bridge function, <code>YukiHookAPI</code> also provides a solution for you to determine whether the Module App matches the Host App version after the user updates the Module App.</p></blockquote><p>We only need to call the <code>checkingVersionEquals</code> method to achieve this function.</p><p>Bidirectional judgment can be performed between the Module App and the Host App.</p><p>You can check in the Module App whether the Host App of the specified package name matches the version of the current Module App.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// Get from the Host App of the specified package name</span></span>
<span class="line"><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">checkingVersionEquals</span><span style="color:#ADBAC7;"> { isEquals </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also determine in the Host App whether it matches the current Module App version.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// Get from the Module App</span></span>
<span class="line"><span style="color:#ADBAC7;">dataChannel.</span><span style="color:#DCBDFB;">checkingVersionEquals</span><span style="color:#ADBAC7;"> { isEquals </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Condition of method callback</p><p>The Host App and Module App must be stay alive, and after activating the Module App restart the Hook target Host App object in scope.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>For more functions, please refer to <a href="../public/com/highcapable/yukihookapi/hook/xposed/channel/YukiHookDataChannel">YukiHookDataChannel</a>.</p></div><h2 id="rules-for-callback-event-response" tabindex="-1"><a class="header-anchor" href="#rules-for-callback-event-response" aria-hidden="true">#</a> Rules for Callback Event Response</h2><p>Only the examples used in Module App are listed here.</p><p>The same <code>key</code> in <strong>same Host App</strong> is always not allowed to be created repeatedly, but the same <code>key</code> is allowed in <strong>different Host Apps</strong>.</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>In the Module App and Host App, each <strong>key</strong> callback event corresponding to <strong>dataChannel</strong> is not allowed to be repeatedly created, if repeated, the previous callback event will be replaced by the newly added callback event.</p><p>When used in the Module App, it cannot be repeated in the same <strong>Activity</strong>, and the same <strong>key</strong> in different <strong>Activity</strong> is allowed to be repeated.</p></div><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">MainActivity</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">AppCompatActivity</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onCreate</span><span style="color:#ADBAC7;">(savedInstanceState: </span><span style="color:#F69D50;">Bundle</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">onCreate</span><span style="color:#ADBAC7;">(savedInstanceState)</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Callback event A</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo1&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test_key&quot;</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Callback event B</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo1&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test_key&quot;</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Callback event C</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo1&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;other_test_key&quot;</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Callback event D</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo2&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;other_test_key&quot;</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">OtherActivity</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">AppCompatActivity</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onCreate</span><span style="color:#ADBAC7;">(savedInstanceState: </span><span style="color:#F69D50;">Bundle</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">onCreate</span><span style="color:#ADBAC7;">(savedInstanceState)</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Callback event E</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo1&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test_key&quot;</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Callback event F</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo2&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test_key&quot;</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above example, although callback events A and B are callback events in the same Host App, their <code>key</code> is the same, so callback event A will be replaced by callback event B.</p><p>The <code>key</code> of callback event C is not duplicated with others.</p><p>Although the <code>key</code> of callback event D is the same as that of callback event C, their Host Apps are different, so they can exist at the same time.</p><p>Callback event E is in another <strong>Activity</strong>, although the <code>key</code> of callback event F and callback event E is the same, but they are not the same Host App, so they can exist at the same time.</p><p>In summary, the final callback events B, C, D, E, and F can all be created successfully.</p><div class="custom-container tip"><p class="custom-container-title">Compatibility Notes</p><p>Setting the same <strong>key</strong> on different Host Apps in previous historical versions of the API would result in only the last event callback, but the latest version has corrected this problem, please make sure you are using the latest API version.</p></div><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>A callback event with the same <strong>key</strong> will only call back the callback event registered in the <strong>Activity</strong> that the current Module App is displaying, such as <strong>test_key</strong> in the above, if <strong>OtherActivity</strong> is being displayed, then <strong>test_key</strong> in <strong>MainActivity</strong> will not be called back.</p><p>The same <strong>key</strong> registers <strong>dataChannel</strong> in the same <strong>Activity</strong> but different <strong>Fragment</strong>, they will still be called back in the current <strong>Activity</strong> at the same time.</p><p>In a Module App, you can use <strong>dataChannel</strong> in <strong>Activity</strong>, <strong>Application</strong> and <strong>Service</strong>, when used in places other than <strong>Activity</strong>, each callback event will instant callback, at which point you can use <strong>ChannelPriority</strong> to manage.</p><p>If you want to use <strong>dataChannel</strong> in <strong>Fragment</strong>, use <strong>activity?.dataChannel(...)</strong>.</p></div><p>If you want to manually set the response priority (condition) of each callback event in the same <strong>Activity</strong>, you can use <code>ChannelPriority</code>.</p><p>For example, if you are using one <strong>Activity</strong> binding multiple <strong>Fragment</strong> cases, this will be able to solve this problem.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">open</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">BaseFragment</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">Fragment</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">/** Identify that the current Fragment is in the onResume lifecycle */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> isResume </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onResume</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">. </span><span style="color:#DCBDFB;">onResume</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">        isResume </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onPause</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">. </span><span style="color:#DCBDFB;">onPause</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">        isResume </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onStop</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">. </span><span style="color:#DCBDFB;">onStop</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">        isResume </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">FragmentA</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">BaseFragment</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Omit part of initialization code</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">//...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onViewCreated</span><span style="color:#ADBAC7;">(view: </span><span style="color:#F69D50;">View</span><span style="color:#ADBAC7;">, savedInstanceState: </span><span style="color:#F69D50;">Bundle</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Use the custom isResume combined with the isVisible condition</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// To judge that the current Fragment is in the displayed state</span></span>
<span class="line"><span style="color:#ADBAC7;">        activity?.</span><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo1&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">            ?.</span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test_key&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#DCBDFB;">ChannelPriority</span><span style="color:#ADBAC7;"> { isResume </span><span style="color:#F47067;">&amp;&amp;</span><span style="color:#ADBAC7;"> isVisible }) {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">FragmentB</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">BaseFragment</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Omit part of initialization code</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">//...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onViewCreated</span><span style="color:#ADBAC7;">(view: </span><span style="color:#F69D50;">View</span><span style="color:#ADBAC7;">, savedInstanceState: </span><span style="color:#F69D50;">Bundle</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Use the custom isResume combined with the isVisible condition</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// To judge that the current Fragment is in the displayed state</span></span>
<span class="line"><span style="color:#ADBAC7;">        activity?.</span><span style="color:#DCBDFB;">dataChannel</span><span style="color:#ADBAC7;">(packageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo2&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">            ?.</span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(key </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test_key&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#DCBDFB;">ChannelPriority</span><span style="color:#ADBAC7;"> { isResume </span><span style="color:#F47067;">&amp;&amp;</span><span style="color:#ADBAC7;"> isVisible }) {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="security-instructions" tabindex="-1"><a class="header-anchor" href="#security-instructions" aria-hidden="true">#</a> Security Instructions</h2><p>In the module environment, you can only receive the communication data sent by <u><strong>the Host App of the specified package name</strong></u> and can only send to <u><strong>the Host App of the specified package name</strong></u>, except for System Framework.</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>In order to further prevent broadcast abuse, the API in the communication data will automatically specify the package name of the Host App and Module App to prevent other apps from monitoring and using broadcast to make overrun behaviors.</p></div>`,49),p=[o];function t(c,i){return n(),a("div",null,p)}const d=s(l,[["render",t],["__file","xposed-channel.html.vue"]]);export{d as default};
