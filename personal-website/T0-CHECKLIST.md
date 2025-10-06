# T0 阶段检查清单

## 项目初始化状态

### ✅ 已完成项目

#### 1. Next.js 项目创建
- [x] 项目名称：`personal-website`
- [x] 框架版本：Next.js 15.5.4
- [x] React 版本：19.1.0
- [x] TypeScript 配置完成
- [x] App Router 结构（使用 `src/app` 目录）

#### 2. Tailwind CSS 配置
- [x] 已安装 `tailwindcss` v4
- [x] 已安装 `@tailwindcss/postcss` v4
- [x] PostCSS 配置文件存在：`postcss.config.mjs`
- [x] 全局样式文件：`src/app/globals.css`
- [x] 使用新版 Tailwind CSS v4 语法（`@import "tailwindcss"`）

#### 3. 全局样式设置
- [x] 背景色设置为米白色：`#FAF8F4`
- [x] 前景色设置为深灰色：`#333333`
- [x] 字体配置：Geist Sans（通过 CSS 变量）
- [x] 响应式字体加载完成

#### 4. 项目结构
```
personal-website/
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css      ✅ 已配置米白背景
│       ├── layout.tsx       ✅ 已加载 Geist 字体
│       └── page.tsx         ✅ 测试页面已创建
├── public/                  ✅ 静态资源目录
├── package.json             ✅ 依赖配置完成
├── postcss.config.mjs       ✅ PostCSS 配置
├── tsconfig.json            ✅ TypeScript 配置
└── next.config.ts           ✅ Next.js 配置
```

## 验收标准检查

根据 `Task.md` 的 T0 验收标准：

### ✅ 网站可本地运行
- 开发服务器命令：`npm run dev`
- 访问地址：http://localhost:3000
- 状态：配置完成，可以启动

### ✅ 背景为米白色
- 颜色代码：`#FAF8F4`
- 配置位置：`src/app/globals.css` 第 4 行
- CSS 变量：`--background`

### ✅ 字体样式加载成功
- 主字体：Geist Sans
- 等宽字体：Geist Mono
- 加载方式：通过 `next/font/google`
- 配置位置：`src/app/layout.tsx`

## 如何验证

1. **启动开发服务器**：
```bash
cd /Users/wayfarer/Documents/garden/personal-website
npm run dev
```

2. **访问网站**：
打开浏览器访问 http://localhost:3000

3. **检查效果**：
- 背景应该是温暖的米白色（#FAF8F4）
- 页面中央显示测试内容
- 字体应该清晰可读

## 下一步

T0 阶段已完成，可以开始 **T1 阶段：首页搭建**

T1 任务包括：
- 新建首页组件
- 添加左侧导航栏
- 创建两个卡片（简介 + 照片）
- 实现小花飘落动效
- 添加右下角固定花旋转效果

