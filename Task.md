
## 🪴 开发阶段任务

### T0:Phase 0: 初始化
- 初始化 Next.js 项目  
  ```bash
  npx create-next-app personal-website
  cd personal-website
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- 在 `globals.css` 配置基本背景与字体样式  

验收：
- [ ] 网站可本地运行  
- [ ] 背景为米白色  
- [ ] 字体样式加载成功  

---

### T1:Phase 1: 首页搭建
- 新建 `pages/index.tsx`  
- 添加导航栏 + 两个卡片（介绍 + 照片）  
- 引入顶部花朵飘落动效（使用 Framer Motion 或自定义 CSS 动画）  
- 右下角固定花（淡入 + 旋转）

验收：
- [ ] 主页加载时有五朵花飘落  
- [ ] 右下角花轻旋转  
- [ ] 介绍与照片卡片显示正常  

---

### T2:Phase 2: Recent Thoughts 页面
- 新建 `pages/recent-thoughts.tsx`  
- 按标题 + 列表结构展示内容  
- 保留右下角花动效  

验收：
- [ ] 列表内容正确渲染  
- [ ] 页面切换平滑  
- [ ] 右下角花旋转正常  

---

### T3:Phase 3: Market Review 页面
- 新建 `pages/market-review.tsx`  
- 使用简单时间线布局（flex column）  
- 每个节点：日期 + 内容  
- 加入右下角花动效  

验收：
- [ ] 时间线垂直对齐  
- [ ] 新条目添加容易  
- [ ] 页面风格一致  

---

### T4:Phase 4: 动画与样式优化
- 添加全站淡入/滚动动效  
- 调整字体、间距、阴影、hover 效果  
- 确保响应式设计（手机端适配）

验收：
- [ ] 动画自然流畅  
- [ ] 在手机上正常显示  
- [ ] 所有页面一致性良好  

---

### T5:Phase 5: 部署上线
- 登录 [Vercel](https://vercel.com)  
- 一键导入 GitHub 仓库  
- 自动部署  

验收：
- [ ] 网站可通过 URL 访问  
- [ ] 所有动效正常  
- [ ] 各页面导航流畅  

---

## T6:🌻 未来可扩展功能
- 深色模式切换  
- 自动从 Substack/X 抓取内容  
- 多语言版本  
- 页面切换淡入淡出动画  

---

### ✅ 说明
放入 Cursor 的项目目录下，  
然后让 Cursor 按阶段执行开发任务，它会自动生成相应页面和组件。
