import { Icons } from "$lib/utils";

export const viewBox = (icon: Icons) => {
  return [Icons.GitHub].includes(icon) ? '0 0 16 16' : '0 0 24 24';
};
