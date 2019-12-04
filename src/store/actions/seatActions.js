export const reserveSeat = (seat) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {

		const firestore = getFirestore();
		firestore.collection('seats').add({
			...seat,
			location: 1,
			reserved: false,
			claimed: false,
			createdAt: new Date()
		}).then(() => {
			dispatch({ type:'RESERVE_SEAT', seat });
		}).catch((err) => {
			dispatch({ type:'RESERVE_SEAT_ERROR', err });
		})
	}
};

export const claimSeat = (seat) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {

		const firestore = getFirestore();
		firestore.collection('seats').add({
			...seat,
			location: 1,
			reserved: false,
			claimed: false,
			createdAt: new Date()
		}).then(() => {
			dispatch({ type:'CLAIM_SEAT', seat });
		}).catch((err) => {
			dispatch({ type:'CLAIM_SEAT_ERROR', err });
		})
	}
};