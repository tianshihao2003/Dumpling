import type { Live2DModelConfig, SpineModelConfig } from "../types/config";

// Spine 看板娘配置
export const spineModelConfig: SpineModelConfig = {
	enable: false,
	model: {
		path: "/pio/models/spine/firefly/1310.json",
		scale: 1.0,
		x: 0,
		y: 0,
	},
	position: {
		corner: "bottom-left",
		offsetX: 0,
		offsetY: 0,
	},
	size: {
		width: 135,
		height: 165,
	},
	interactive: {
		enabled: true,
		clickAnimations: [
			"emoji_0", "emoji_1", "emoji_2", "emoji_3",
			"emoji_4", "emoji_5", "emoji_6",
		],
		clickMessages: [
			"你好呀！很高兴见到你！",
			"今天也要加油哦！✨",
			"要一起探索吗？🌟",
			"别忘了休息一下~",
			"有什么想跟我说的吗？💫",
			"一起去发现新世界吧！🚀",
		],
		messageDisplayTime: 3000,
		idleAnimations: ["idle", "emoji_0", "emoji_1", "emoji_3", "emoji_4"],
		idleInterval: 8000,
	},
	responsive: {
		hideOnMobile: false,
		mobileBreakpoint: 768,
	},
	zIndex: 1000,
	opacity: 1.0,
};

// Live2D 看板娘配置
export const live2dModelConfig: Live2DModelConfig = {
	enable: false,
	model: {
		path: "/pio/models/live2d/snow_miku/model.json",
	},
	position: {
		corner: "bottom-left",
		offsetX: 0,
		offsetY: 0,
	},
	size: {
		width: 135,
		height: 165,
	},
	interactive: {
		enabled: true,
		clickMessages: [
			"嗨，我是 Miku~",
			"需要帮忙吗？",
			"今天天气真好！",
			"想玩个游戏吗？",
			"记得休息哦！",
		],
		messageDisplayTime: 3000,
	},
	responsive: {
		hideOnMobile: false,
		mobileBreakpoint: 768,
	},
};
