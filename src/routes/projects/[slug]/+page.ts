import MY_PROJECTS from '$lib/projects.params';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const project = MY_PROJECTS.find((item) => {
			return item.slug === params.slug;
		});

		return { project };
	}
}
