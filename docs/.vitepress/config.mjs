import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/blog/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "referrer", content: "no-referrer" }],
  ],
  title: "老赵",
  outDir: "../dist",
  description: "",
  themeConfig: {
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    lastUpdated: {
      text: "最后更新时间",
      // formatOptions: {
      //   dateStyle: "full",
      //   timeStyle: "medium",
      // },
    },
    logo: "/螃蟹.svg",
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: "本页目录",
    },
    search: {
      provider: "local",
    },
    nav: [
      { text: "搭建文档系统", link: "/搭建博客系统/1.安装vite-press" },
      {
        text: "我的日常",
        items: [
          {
            text: "windows系统配置别名",
            link: "/我的日常/windows配置命令别名",
          },
          {
            text: "软件卸载错误",
            link: "/我的日常/安装或者卸载软件时遇到trying to use is on a network resource that is unavailable",
          },
          {
            text: "美化windows终端",
            link: "/我的日常/美化windows终端",
          },
          {
            text: "优化vscode文件列表",
            link: "/我的日常/优化VSCODE文件列表",
          },
        ],
      },
      {
        text: "前端",
        items: [
          {
            text: "网格布局",
            link: "/前端/网格布局/1.容器声明",
          },
          {
            text: "Electron",
            link: "/前端/electron/1.Electron由来",
          },
          {
            text: "Flex布局",
            link: "/前端/flex布局/容器属性/1.弹性盒",
          },
        ],
      },
      {
        text: "杂七杂八",
        items: [
          {
            text: "考勤",
            link: "/杂七杂八/考勤",
          },
        ],
      },
    ],
    sidebar: {
      "/我的日常": [
        {
          text: "windows系统配置别名",
          link: "/我的日常/windows配置命令别名",
        },
        {
          text: "软件卸载错误",
          link: "/我的日常/安装或者卸载软件时遇到trying to use is on a network resource that is unavailable",
        },
        {
          text: "美化windows终端",
          link: "/我的日常/美化windows终端",
        },
        {
          text: "优化vscode文件列表",
          link: "/我的日常/优化VSCODE文件列表",
        },
      ],
      "/搭建博客系统": [
        {
          text: "开始",
          items: [
            {
              text: "起步",
              link: "/搭建博客系统/1.安装vite-press",
            },
            {
              text: "配置",
              link: "/搭建博客系统/2.配置vite-press",
            },
            {
              text: "PicGo",
              link: "/搭建博客系统/3.图片上传策略",
            },
            ,
            {
              text: "github 工作流",
              link: "/搭建博客系统/4.github自动部署",
            },
          ],
        },
      ],
      "/前端/网格布局": [
        {
          text: "开始",
          items: [
            {
              text: "容器声明",
              link: "/前端/网格布局/1.容器声明",
            },
            {
              text: "划分行列",
              link: "/前端/网格布局/2.划分行列",
            },
            {
              text: "设置间距",
              link: "/前端/网格布局/3.设置间距",
            },
            {
              text: "栅格线部署",
              link: "/前端/网格布局/4.栅格线部署",
            },
            {
              text: "区域部署",
              link: "/前端/网格布局/5.区域部署",
            },
            {
              text: "栅格控制",
              link: "/前端/网格布局/6.栅格控制",
            },
            {
              text: "栅格简写",
              link: "/前端/网格布局/7.栅格简写",
            },
          ],
        },
      ],
      "/前端/electron": [
        {
          text: "开始",
          items: [
            {
              text: "Electron由来",
              link: "/前端/electron/1.Electron由来",
            },
            {
              text: "Electron架构",
              link: "/前端/electron/2.Electron架构",
            },
          ],
        },
      ],
      "/前端/flex布局": [
        {
          text: "容器属性",
          items: [
            {
              text: "弹性盒子",
              link: "/前端/flex布局/容器属性/1.弹性盒",
            },
            {
              text: "主轴方向",
              link: "/前端/flex布局/容器属性/2.主轴方向",
            },
            {
              text: "换行",
              link: "/前端/flex布局/容器属性/3.换行",
            },
            {
              text: "主轴对齐方式",
              link: "/前端/flex布局/容器属性/4.主轴对齐方式",
            },
            {
              text: "交叉轴对齐方式",
              link: "/前端/flex布局/容器属性/5.交叉轴对齐方式",
            },
            {
              text: "多交叉轴对齐方式",
              link: "/前端/flex布局/容器属性/6.多交叉轴对齐方式",
            },
          ],
        },
        {
          text: "项目属性",
          items: [
            {
              text: "排序",
              link: "/前端/flex布局/项目属性/1.排序",
            },
            {
              text: "flex-basis",
              link: "/前端/flex布局/项目属性/2.flex-basis.md",
            },
            {
              text: "放大比例",
              link: "/前端/flex布局/项目属性/3.放大比例.md",
            },
            {
              text: "缩小比例",
              link: "/前端/flex布局/项目属性/4.缩小比例.md",
            },
            {
              text: "独立对齐方式",
              link: "/前端/flex布局/项目属性/5.独立对齐方式",
            },
          ],
        },
      ],
    },

    socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
