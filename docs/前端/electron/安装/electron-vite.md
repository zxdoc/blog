# electron-vite

**在上面的文章大概介绍了`electron`的原理,本次我们选用一个成熟的`electron脚手架`来做入门的demo项目**

## 项目地址

[electron-vite](https://cn.electron-vite.org/)

![image-20240614142258670](https://gitee.com/zhaox010/pic-go-save/raw/master/image/202406141423832.png)

## 简介

**electron-vite** 是一个新型构建工具，旨在为 [Electron](https://www.electronjs.org/) 提供更快、更精简的开发体验。它主要由五部分组成：

- 一套构建指令，它使用 [Vite](https://cn.vitejs.dev/) 打包你的代码，并且它能够处理 Electron 的独特环境，包括 [Node.js](https://nodejs.org/) 和浏览器环境。
- 集中配置主进程、渲染器和预加载脚本的 Vite 配置，并针对 Electron 的独特环境进行预配置。
- 为渲染器提供快速模块热替换（HMR）支持，为主进程和预加载脚本提供热重载支持，极大地提高了开发效率。
- 优化 Electron 主进程资源处理。
- 使用 V8 字节码保护源代码。

electron-vite 快速、简单且功能强大，旨在开箱即用。

## 安装

```pow
npm create @quick-start/electron@latest
```

- 选择项目的名称
- 选择`react`还是`vue`
- 是否启用typescript
- electron自动更新插件
- 开启electron下载代理

```powershell
✔ Project name: … <electron-app>
✔ Select a framework: › vue
✔ Add TypeScript? … No / Yes
✔ Add Electron updater plugin? … No / Yes
✔ Enable Electron download mirror proxy? … No / Yes

Scaffolding project in ./<electron-app>...
Done.
```

## 下载失败

在其中有一些小伙伴可能会遇到一些安装失败的问题

- 如果可以挂代理 请挂上代理再安装依赖
- 如果还是不可以 可以单独配置electron的代理

### 打开npm的配置文件

```powershell
npm config edit
```

### 设置electron的代理

```ini
registry=https://registry.npmmirror.com
electron_mirror=https://cdn.npmmirror.com/binaries/electron/
electron_builder_binaries_mirror=https://npmmirror.com/mirrors/electron-builder-binaries/
```

### 清除缓存

```powershell
npm cache clean --force
```

## 目录结构

![image-20240614150319366](https://gitee.com/zhaox010/pic-go-save/raw/master/image/202406141503388.png)

![image-20240614151045659](https://gitee.com/zhaox010/pic-go-save/raw/master/image/202406141510683.png)

### main

electron主进程

### preload

渲染进程和主进程通信使用

### renderer

渲染进程 存放我们的vue页面或者react页面
