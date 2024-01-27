import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import type { Item, Skill } from '$lib/types';

dayjs.extend(duration);

export const countMonths = (from: Date, to: Date = new Date()): number => {
	let firstYear = 0;
	let wholeYears = 0;
	let newYear = 0;

	if (to.getFullYear() !== from.getFullYear()) {
		newYear = to.getMonth();
		wholeYears = (to.getFullYear() - from.getFullYear() - 1) * 12;
		firstYear = 12 - from.getMonth();
	} else {
		firstYear = to.getMonth() - from.getMonth();
	}

	return firstYear + wholeYears + newYear + 1;
};

export const getMonthName = (index: number): string => {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	return monthNames[index];
};

export const useImage = (url: string, base: string): string => `${base}${url}`;

export const useTitle = (title: string, suffix: string) => `${title} | ${suffix}`;

export function getTimeDiff(date1: Date, date2 = new Date(Date.now() + 1000 * 60 * 60 * 24)) {
	const d1 = dayjs(date1);
	const d2 = dayjs(date2);

	const duration = dayjs.duration(d2.diff(d1));

	let n = 0;
	let u = 'day';

	if (duration.as('days') <= 7) {
		u = 'day';
		n = duration.as('days');
	} else if (duration.as('months') <= 1) {
		u = 'week';
		n = duration.as('weeks');
	} else if (duration.as('years') <= 1) {
		u = 'month';
		n = duration.as('months');
	} else {
		u = 'year';
		n = duration.as('years');
	}

	n = Math.trunc(n);

	return `${Math.trunc(n)} ${u}${n > 1 ? 's' : ''}`;
}

type ItemOrSkill = Item | Skill;

export function filterItemsByQuery<T extends ItemOrSkill>(
	items: Array<T>,
	query: string
): Array<T> {
	const ignoredProperties = ['logo', 'links', 'color', 'screenshots'];
	query = query.toLowerCase();

	return items.filter((item) => doesQueryExistInItemOrAttributes(item, query, ignoredProperties));
}

function doesQueryExistInItemOrAttributes(
	item: any,
	query: string,
	ignoredProperties: string[] = []
): boolean {
	if (Array.isArray(item)) {
		return item.some((subItem) => doesQueryExistInItemOrAttributes(subItem, query));
	} else if (typeof item === 'object' && item !== null) {
		if (item instanceof Date) {
			const dateFormats = [
				item.toString().toLowerCase(), // Full date string
				item.toLocaleDateString('default', { month: 'long', year: 'numeric' }).toLowerCase(), // "January 2023"
				item
					.toLocaleDateString('default', { day: 'numeric', month: 'long', year: 'numeric' })
					.toLowerCase(), // "15 January 2023"
				item.toLocaleDateString('en-US').toLowerCase(), // "1/15/2023"
				item
					.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
					.toLowerCase() // "Jan 15, 2023"
			];
			return dateFormats.some((dateStr) => dateStr.includes(query));
		} else {
			return Object.keys(item).some(
				(key) =>
					!ignoredProperties.includes(key) && doesQueryExistInItemOrAttributes(item[key], query)
			);
		}
	} else {
		return item.toString().toLowerCase().includes(query);
	}
}
