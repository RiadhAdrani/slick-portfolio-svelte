import { MySkillsParams } from '$lib/params';
import slugify from 'slugify';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const skill = MySkillsParams.skills.find((item) => {
			const slugified = slugify(item.technology.name.toLocaleLowerCase());

			return slugified === params.slug;
		});

		return { skill };
	}
}
