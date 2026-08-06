import type { SiteConfig } from "@/types/config";
import { fontConfig } from "./fontConfig";

// 站点语言
// 语言代码，例如：'zh_CN', 'zh_TW', 'en', 'ja', 'ru'。
const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	// 站点标题
	title: "饺子主题",

	// 站点副标题
	subtitle: "一个简洁美观的 Astro 博客主题",

	// 站点 URL - 修改为你的域名
	site_url: "https://example.com",

	// 站点描述
	description:
		"一个基于 Astro、Svelte 和 Tailwind CSS 构建的博客主题。分享技术见解、记录生活点滴、追踪影视书籍。",

	// 站点关键词
	keywords: [
		"博客",
		"astro",
		"主题",
		"饺子",
		"个人博客",
	],

	// 主题色
	themeColor: {
		// 主题色的默认色相，范围从 0 到 360。例如：红色：0，青色：200，蓝紫色：250，粉色：345
		hue: 230,
		// 是否对访问者隐藏主题色选择器
		fixed: false,
		// 默认模式："light" 亮色，"dark" 暗色，"system" 跟随系统
		defaultMode: "system",
	},

	// 页面整体宽度（单位：rem）
	pageWidth: 100,

	// 网站Card样式配置
	card: {
		// 是否开启卡片边框和阴影，开启后让网站更有立体感
		border: true,
	},

	// Favicon 配置 - 替换为你的图标
	favicon: [
		{
			src: "/favicon/favicon.ico",
		},
	],

	// 导航栏配置
	navbar: {
		// 导航栏Logo，支持三种类型：
		// 1. Astro图标库: { type: "icon", value: "material-symbols:home-pin-outline" }
		// 2. 本地图片: { type: "image", value: "assets/images/logo.webp", alt: "Logo" }
		// 3. 网络图片: { type: "url", value: "https://example.com/logo.png", alt: "Logo" }
		logo: {
			type: "icon",
			value: "material-symbols:home-pin-outline",
			alt: "首页",
		},
		// 导航栏标题
		title: "饺子主题",
		// 悬停时显示的互动文字
		hoverTitle: "w(ﾟДﾟ)w 不要走！再看看嘛！",
		// 导航栏是否占满屏幕宽度
		widthFull: false,
		// 导航栏图标和标题是否跟随主题色
		followTheme: false,
	},

	// 站点开始日期，用于统计运行天数
	siteStartDate: "2024-1-1",

	// 门户区配置
	portal: {
		announcement: {
			enable: true,
			text: "欢迎来到我的博客！这里有技术分享、生活记录和更多有趣内容。",
		},
		dailyQuote: {
			enable: true,
			quotes: [
				{ text: "人生到处知何似，应似飞鸿踏雪泥。", source: "苏轼" },
				{ text: "世界上只有一种真正的英雄主义，那就是在认识生活的真相后依然热爱生活。", source: "罗曼·罗兰" },
				{ text: "愿你一生努力，一生被爱。想要的都拥有，得不到的都释怀。", source: "八月长安" },
				{ text: "凡是过去，皆为序章。", source: "莎士比亚" },
				{ text: "温柔半两，从容一生。", source: "三毛" },
			],
		},
		recentPostsCount: 3,
		recentMomentsCount: 3,
	},

	// 上下班时间配置（24小时制），用于首页头像涟漪动效
	workHours: {
		start: 9,
		end: 18,
		// 工作日范围，0=周日 1=周一 ... 6=周六
		workDays: [1, 2, 3, 4, 5],
	},

	// 站点时区
	timezone: "Asia/Shanghai",

	// 提醒框（Admonitions）配置
	rehypeCallouts: {
		theme: "github",
	},

	// 文章页底部的"上次编辑时间"卡片开关
	showLastModified: true,

	// 文章过期阈值（天数）
	outdatedThreshold: 30,

	// 是否开启分享海报生成功能
	sharePoster: true,

	// OpenGraph图片功能
	generateOgImages: false,

	// bangumi配置 - 可选，填入你的Bangumi用户ID
	bangumi: {
		userId: "",
	},

	// 豆瓣配置
	douban: {
		userId: "",
	},

	// 页面开关配置
	pages: {
		sponsor: true,
		guestbook: true,
		bangumi: false,
		books: true,
		moviesGames: true,
		musicPage: true,
		changelog: true,
	},

	// 说说页面封面配置
	momentsCover: {
		enable: true,
		image: "/assets/images/dongtaifengmian.jpg",
	},

	// 分类导航栏开关
	categoryBar: true,

	// 文章列表布局配置
	postListLayout: {
		defaultMode: "grid",
		allowSwitch: true,
		grid: {
			masonry: false,
			columns: 3,
		},
	},

	// 分页配置
	pagination: {
		postsPerPage: 10,
	},

	// 统计分析
	analytics: {
		googleAnalyticsId: "",
		microsoftClarityId: "",
		umamiAnalytics: {
			websiteId: import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || "",
			scriptUrl: import.meta.env.PUBLIC_UMAMI_BASE
				? `${import.meta.env.PUBLIC_UMAMI_BASE}/script.js`
				: "",
		},
	},

	// 图像优化配置
	imageOptimization: {
		formats: "webp",
		quality: 85,
	},

	// 地图配置
	mapConfig: {
		amapKey: import.meta.env.PUBLIC_AMAP_KEY || "",
		center: [104.195, 35.861],
		zoom: 4,
		showMarkers: true,
	},

	// 字体配置
	font: fontConfig,

	// 站点语言
	lang: SITE_LANG,
};
