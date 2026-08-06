export interface CircleConfig {
	dataUrl: string;
	pageSize: number;
	showStats: boolean;
	showFloor: boolean;
	cacheTime: number;
}

export const circleConfig: CircleConfig = {
	dataUrl: "https://example.com/data.json",
	pageSize: 20,
	showStats: true,
	showFloor: false,
	cacheTime: 5 * 60 * 1000,
};
