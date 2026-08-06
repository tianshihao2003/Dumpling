import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
	// 评论系统类型: none, twikoo, waline, giscus, disqus, artalk
	// 默认为 none，不启用评论系统。选择你喜欢的评论系统并填写对应配置。
	type: "none",

	//twikoo评论系统配置
	twikoo: {
		envId: "https://twikoo.example.com",
		lang: "zh-CN",
		visitorCount: true,
	},

	//waline评论系统配置
	waline: {
		// waline 后端服务地址，通过环境变量 PUBLIC_WALINE_SERVER 设置
		serverURL: import.meta.env.PUBLIC_WALINE_SERVER || "",
		lang: "zh-CN",
		emoji: [
			"https://cdn.jsdelivr.net/npm/@waline/emojis@1.4.0/weibo",
			"https://cdn.jsdelivr.net/npm/@waline/emojis@1.4.0/bilibili",
			"https://cdn.jsdelivr.net/npm/@waline/emojis@1.4.0/bmoji",
		],
		login: "enable",
		visitorCount: true,
	},

	// artalk评论系统配置
	artalk: {
		server: "https://artalk.example.com/",
		locale: "zh-CN",
		visitorCount: true,
	},

	//giscus评论系统配置
	giscus: {
		repo: "",
		repoId: "",
		category: "General",
		categoryId: "",
		mapping: "title",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "1",
		inputPosition: "top",
		lang: "zh-CN",
		loading: "lazy",
	},

	//disqus评论系统配置
	disqus: {
		shortname: "",
	},
};
