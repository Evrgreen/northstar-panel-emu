import {useRouter} from 'next/router'


export const useDynamicSlug = () => {
	const router = useRouter();

	const slug = router.query.slug;

	return slug
}



