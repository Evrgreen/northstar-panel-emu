import { useRouter } from 'next/router';

export const useDynamicSlug = () => {
	const router = useRouter();

	const slug = router.query.slug;

	return slug;
};

export const findRouteEnd = () => {
	const router = useRouter();

	const [routeEnd] = router.route.split('/').slice(-1);
	return routeEnd;
};

export const findKeyInPath = (key: string) => {
	const router = useRouter();
	return router.pathname.split('/').includes(key);
};

export const findKeysInPath = (keys: string[]) => {
	const tempList: string[] = [];
	for (let key of keys) {
		findKeyInPath(key) && tempList.push(key);
	}
	return tempList;
};
