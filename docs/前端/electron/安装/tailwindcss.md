# tailwindcss

在安装完`electron-vite`之后 我们选择安装一个`css原子类`框架 简化我们书写`css`的方式

所以 什么是`tailwindcss`?

**只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。**

## 项目地址

[tailwindcss](https://www.tailwindcss.cn/)

![image-20240614145036301](https://gitee.com/zhaox010/pic-go-save/raw/master/image/202406141450346.png)

## 安装

> 因为我们用的是vite 所以需要使用vite的方式

![image-20240614145340317](https://gitee.com/zhaox010/pic-go-save/raw/master/image/202406141453362.png)

### 安装tailwindcss

```powershell
npm install -D tailwindcss postcss autoprefixer
```

### 生成 配置文件

```powershell
npx tailwindcss init -p
```

> npx是一个执行某个脚本的方法

### 编写配置文件

编写 生成完以后的 `tailwindcss.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`**` 代表的无限递归目录

`*` 任意文件名

### 创建index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 导入index.css

在`main.ts`中导入这个`css`

```js
import '@renderer/assets/index.css'
```

## 测试

```vue
<template>
  <div class="text-3xl font-bold underline bg-red-500">hello word</div>
</template>
```

![image-20240614150227248](https://gitee.com/zhaox010/pic-go-save/raw/master/image/202406141502279.png)