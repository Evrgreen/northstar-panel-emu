import { useState } from 'react';
import { Modal } from '@src/components/lyric';
import UserActionButtons from './UserActionButtons';
import ZoneProgrammingActionButtons from './ZoneProgrammingActionButtons';
import { findRouteEnd } from '@src/utils/useRouterHelpers';
import ZoneActionButtons from './ZoneActionButtons';

const ActionButtonContainer = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState('Please Select an Item');

	const openModal = (message: string = '') => {
		if (message) {
			setModalContent(message);
		}
		setShowModal(true);
	};
	const toggleModal = () => {
		setShowModal((prevState) => !prevState);
	};

	const path = findRouteEnd();
	console.log(path);

	return (
		<>
			<div className='row-start-2 col-span-1  grid grid-cols-3 gap-3 py-2	 px-3 '>
				{path === 'users' && (
					<UserActionButtons
						toggleModal={toggleModal}
						openModal={openModal}
					/>
				)}
				{path === 'zoneprogramming' && (
					<ZoneProgrammingActionButtons
						toggleModal={toggleModal}
						openModal={openModal}
					/>
				)}
				{path === 'zones' && <ZoneActionButtons />}
			</div>

			{showModal && (
				<Modal content={modalContent} closeHandler={toggleModal} />
			)}
		</>
	);
};

export default ActionButtonContainer;

// <section className=''>
// 	{renderItems.map((item: any) => {
// 		return (
// 			<SquareButton
// 				clickHandler={() => clickHandler(item)}
// 				{...rest}
// 				center>
// 				<StandardButtonItem item={item} />
// 			</SquareButton>
// 		);
// 	})}
// </section>
