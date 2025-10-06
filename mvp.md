# personal_website.md

## 🌿 网站概览

### 🎯 目的与受众
- **目的**：记录生活与市场思考，打造一个温暖、有呼吸感的个人网站  
- **受众**：自己 & 网络同好（对市场动态、攀岩、生活有共鸣的人）  
- **风格关键词**：极简 / 纸张质感 / 手写感 / 温暖流动

---

## 🧭 页面结构与内容

### 🏠 Home
- **左侧导航**：  
  - Home  
  - Recent Thoughts  
  - Market Review  

- **中心区域**：  
  - 两个卡片：
    - 「简单介绍」：展示一段自我介绍文字（无需跳转）  
    - 「照片」：展示一张固定图片  
  - 欢迎语：“来约饭！！！”

- **照片**：  
  使用以下图片作为主要展示照：  
  ![Home Photo](上传的自拍图像路径或链接)

- **小花动效**：
  - 顶部掉落五朵花（随机路径 + 轻微旋转）  
  - 每页右下角固定一朵花，淡入出现并缓慢旋转  

- **小花素材链接**：
  ```
  https://tsveti.dev/assets/images/flower1.svg  
  https://tsveti.dev/assets/images/flower2.svg  
  https://tsveti.dev/assets/images/flower3.svg  
  https://tsveti.dev/assets/images/flower4.svg  
  https://tsveti.dev/assets/images/flower5.svg  
  ```
  - 固定小花：使用上传的 `手绘小花.jpg`

- **自我介绍文本**：
  ```
  
  Hello, I'm Lucky🌿

  Always a trader and a student. When I'm not in front of a screen, you can usually find me on the climbing wall.
  I was involved in crypto from 2021 to 2024 — now I focus more on market dynamics and mechanisms.

  A little bit of a nomad, but not too much.
  Based in Xiamen and a new community build in Malaysia（Network School）, hoping to leave more footprints around the world in the future.

  I love bread, pizza, soft wind, sunsets, and walking by the river 🍃

  If you're also into market or climbing, let's catch up!
  Or if you just want to chat — you're very welcome :)

  If you are also interest in market or climbing, let's catch up!  
  Or you just want to have a chat, welcome too ~

  (DMs open :)))
  ```

---

### 💭 Recent Thoughts
- **结构**：分区标题 + 列表形式
- **初始示例内容**（可后续替换）：
  ```
  what am I reading  
  - "How to Tell a Story"  
  - "Gospel of Wealth"  

  what am I listening  
  - Chill LoFi playlist  
  - Acoustic cafe sessions  

  what I am interesting but didn’t do yet  
  - Writing weekly reflections  
  - Building a mini dashboard for market notes  

  others  
  - A note about climbing motivation  
  - Bread baking experiment
  ```

- **右下角花动效**：淡入 + 缓慢旋转（同首页）

---

### 📈 Market Review
- **展示形式**：纵向时间线  
  ```
  • 2025年09月30日 – 记录：中概股反弹  
  • 2025年08月15日 – 美债收益率观察  
  • 2025年07月02日 – 思考：交易与节奏
  ```
- **操作**：手动添加新复盘条目  
- **右下角花动效**：淡入 + 缓慢旋转  

---

## ✨ 视觉与动效规范

- **主题氛围**：  
  - 米白纸张质感背景  
  - 柔和阴影与圆角  
  - 字体：  
    - 英文：轻手写风字体（如 *Patrick Hand*, *Shadows Into Light*）  
    - 中文：干净无衬线（如 *Noto Sans SC*）
- **颜色方向**：  
  - 背景：#FAF8F4  
  - 字体：#333333  
  - 点缀：柔棕 / 暖灰  
- **动画效果**：  
  - 顶部小花飘落（仅首页）  
  - 右下角固定花淡入 + 微旋转  
  - 平滑滚动与轻微元素淡入  

---

## 🧰 技术栈建议

- **框架**：Next.js  
- **样式工具**：Tailwind CSS  
- **动画**：Framer Motion 或原生 CSS keyframes  
- **部署**：Vercel  
- **开发工具**：Cursor（AI 协作开发）

---
