---
title: 饺子主题快速上手指南
published: 2024-01-15
updated: 2024-01-20
description: 一份快速上手指南，帮助你搭建和自定义饺子博客主题。
tags: [教程, 指南]
category: 博客指南
lang: zh_CN
pinned: true
---

欢迎使用 **饺子主题**！这是一个基于 Astro、Svelte 和 Tailwind CSS 构建的博客主题。

## 快速开始

1. 克隆仓库
2. 运行 `pnpm install`
3. 运行 `pnpm dev` 启动开发服务器
4. 编辑 `src/config/siteConfig.ts` 自定义你的站点

## 配置说明

所有站点配置都在 `src/config/` 目录下。主要文件：

- `siteConfig.ts` — 站点标题、URL、主题色、功能开关
- `profileConfig.ts` — 个人信息和社交链接
- `navBarConfig.ts` — 导航菜单结构

## 主题特色

- 🎨 **精美首页** — 滚动驱动动画、英雄对话、作品集展示
- 🌓 **暗色模式** — 亮色、暗色和跟随系统三种主题
- 📝 **博客文章** — 支持 Markdown 和 MDX，完整的 frontmatter
- 💬 **评论系统** — 支持 Waline、Twikoo、Giscus、Disqus、Artalk
- 🎵 **音乐播放器** — 3D 可视化效果，支持 Meting API
- 📚 **媒体追踪** — 书籍、动漫、影视、游戏、音乐
- 🌏 **国际化** — 支持 5 种语言（中文、英文、日文、俄文等）

开始你的博客之旅吧！
