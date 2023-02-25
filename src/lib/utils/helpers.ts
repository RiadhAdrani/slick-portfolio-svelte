import Icons from "./Icons";
import type { SocialMedia } from "./types";

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

export const useSocialMedia = (media: SocialMedia) => {
  switch (media) {
    case "github": return { title: 'GitHub', icon: Icons.GitHub };
    case "linkedin": return { title: 'LinkedIn', icon: Icons.LinkedIn };
    case "stackoverflow": return { title: 'StackOverflow', icon: Icons.StackOverflow };
    case "twitter": return { title: 'Twitter', icon: Icons.Twitter };
  }
}
