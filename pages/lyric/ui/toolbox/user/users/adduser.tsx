import { getLayout } from '@src/components/layout/lyric';
import UserForm from '@src/components/lyric/UserForm';

const AddUserPage = () => {
	return <UserForm />;
};
AddUserPage.getLayout = getLayout;
export default AddUserPage;
