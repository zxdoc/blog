import{_ as a,c as s,o as n,a4 as e}from"./chunks/framework.4aTu-Nia.js";const _=JSON.parse('{"title":"托盘图标","description":"","frontmatter":{},"headers":[],"relativePath":"前端/electron/3.托盘图标.md","filePath":"前端/electron/3.托盘图标.md","lastUpdated":1719473147000}'),p={name:"前端/electron/3.托盘图标.md"},t=e(`<h1 id="托盘图标" tabindex="-1">托盘图标 <a class="header-anchor" href="#托盘图标" aria-label="Permalink to &quot;托盘图标&quot;">​</a></h1><blockquote><p>指的是软件右下角的软件图标</p><p><img src="https://gitee.com/zhaox010/pic-go-save/raw/master/image/202406271509649.png" alt="image-20240627150913584"></p></blockquote><h2 id="图标文件-​" tabindex="-1">图标文件 <a href="#图标文件">​</a> <a class="header-anchor" href="#图标文件-​" aria-label="Permalink to &quot;图标文件 [​](#图标文件)&quot;">​</a></h2><p>你可以使用 PS 等软件创建图标文件。如果你使用的是 <a href="https://cn-evite.netlify.app/" target="_blank" rel="noreferrer">electron-vite</a> 脚手架，需要将图标文件放在 <strong>resources</strong> 目录中。</p><h3 id="苹果系统-​" tabindex="-1">苹果系统 <a href="#苹果系统">​</a> <a class="header-anchor" href="#苹果系统-​" aria-label="Permalink to &quot;苹果系统 [​](#苹果系统)&quot;">​</a></h3><p>苹果系统图标指的是顶部菜单栏处的图标，要求如下：</p><ul><li>要求文件名以 Template 单词结尾如macTrayTemplate@2x.png</li><li>分辨率和尺寸可以是16x16 (72dpi) 或 32x32@2x (144dpi)</li><li>图标文件后缀是 <strong>Template@2x.png</strong> 时要求是白色图片</li></ul><p><img src="https://doc.houdunren.com/assets/image-20230405020731264.BiqoJ5ly.png" alt="image-20230405020731264"></p><h3 id="windows-​" tabindex="-1">windows <a href="#windows">​</a> <a class="header-anchor" href="#windows-​" aria-label="Permalink to &quot;windows [​](#windows)&quot;">​</a></h3><p>window 图标指的是底部右侧的图标，要求如上：</p><ul><li>可以使用彩色的 png 图标</li><li>尺寸和分辨率是32x32（144dpi）文件</li></ul><h2 id="示例代码-​" tabindex="-1">示例代码 <a href="#示例代码">​</a> <a class="header-anchor" href="#示例代码-​" aria-label="Permalink to &quot;示例代码 [​](#示例代码)&quot;">​</a></h2><p>下面是托盘图示的定义，并且 window 与 mac 使用不同的图标</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { Menu, Tray } from &#39;electron&#39;</span></span>
<span class="line"><span>import path from &#39;path&#39;</span></span>
<span class="line"><span>const createTray = () =&gt; {</span></span>
<span class="line"><span>  const tray = new Tray(</span></span>
<span class="line"><span>    path.resolve(</span></span>
<span class="line"><span>      __dirname,</span></span>
<span class="line"><span>      process.platform == &#39;darwin&#39;</span></span>
<span class="line"><span>        ? &#39;../../resources/macTrayTemplate@2x.png&#39; //32x32 像素的图片</span></span>
<span class="line"><span>        : &#39;../../resources/windowTray.png&#39; //可以使用彩色图片，图标的最大大小为 256x256 像素，设置为32x32像素即可</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  const contextMenu = Menu.buildFromTemplate([{ label: &#39;退出&#39;, role: &#39;quit&#39; }])</span></span>
<span class="line"><span>  tray.setToolTip(&#39;代码片段软件&#39;)</span></span>
<span class="line"><span>  tray.setContextMenu(contextMenu)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export { createTray }</span></span></code></pre></div><p>需要在 app 之后创建图标</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>app.whenReady().then(() =&gt; {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  createTray()</span></span>
<span class="line"><span>  createWindow()</span></span>
<span class="line"><span>	...</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,16),l=[t];function i(o,r,c,d,h,u){return n(),s("div",null,l)}const g=a(p,[["render",i]]);export{_ as __pageData,g as default};
