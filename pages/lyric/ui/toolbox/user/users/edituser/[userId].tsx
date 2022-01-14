import { getLayout } from '@src/components/layout/lyric';
import UserForm from '@src/components/lyric/UserForm';
import { useRouter } from 'next/router';
import useUserContext from '@src/store/user-context';

const EditUserPage = () => {
	const router = useRouter();
	const userId = router.query.userId;
	const { users } = useUserContext();
	let [user] = users.filter((user) => user.id === userId);

	return <UserForm user={user} />;
};
EditUserPage.getLayout = getLayout;
export default EditUserPage;
