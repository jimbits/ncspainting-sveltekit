// const breakPointPrefix = ['sm', 'md', 'lg', 'xl', '2xl'];

import { Type } from 'lucide-svelte';

// const min = {
// 	sm: 640,
// 	md: 768,
// 	lg: 1024,
// 	xl: 1280,
// 	xxl: 1536
// };

// const breakpoints = Object.values(min);

// const dataPoints = new Set(breakPointPrefix);

// console.log(getRangeIndex(756));

// function getRangeIndex(val: number): number {
// 	let low = 0;
// 	let high = breakpoints.length - 1;

// 	while (low <= high) {
// 		const mid = (low + high) >> 1; // Fast integer division
// 		if (val >= breakpoints[mid] && val < breakpoints[mid + 1]) {
// 			return mid;
// 		} else if (val < breakpoints[mid]) {
// 			high = mid - 1;
// 		} else {
// 			low = mid + 1;
// 		}
// 	}
// 	return -1;
// }

const RANGES = [
	{ min: 0, max: 640, label: 'base', color: 'bg-red-500 border border-red-900' },
	{ min: 640, max: 768, label: 'sm', color: 'bg-yellow-500 border border-yellow-900' },
	{ min: 768, max: 1024, label: 'md', color: 'bg-emerald-500 border border-emerald-900' },
	{ min: 1024, max: 1280, label: 'lg', color: 'bg-cyan-500 border border-cyan-900' },
	{ min: 1280, max: 1536, label: 'xl', color: 'bg-indigo-500 border border-indigo-900' },
	{ min: 1536, max: Infinity, label: '2xl', color: 'bg-fuchsia-500 border border-fuchsia-900' }
	// ... rest of your ranges
];

export const getCurrentBreakpoint = (targetValue: number) => {
	return RANGES.find((r) => targetValue >= r.min && targetValue < r.max) ?? RANGES[0];
};
