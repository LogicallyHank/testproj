const initState = {

	seats: [
		{id: '1', reserved:false, claimed:false},
		{id: '2', reserved:false, claimed:false},
		{id: '3', reserved:false, claimed:false},
		{id: '4', reserved:false, claimed:false},
		{id: '5', reserved:false, claimed:false},
		{id: '6', reserved:false, claimed:false},
		{id: '7', reserved:false, claimed:false},
		{id: '8', reserved:false, claimed:false},
		{id: '9', reserved:false, claimed:false},
		{id: '10', reserved:false, claimed:false},
		{id: '11', reserved:false, claimed:false},
		{id: '12', reserved:false, claimed:false},
		{id: '13', reserved:false, claimed:false},
		{id: '14', reserved:false, claimed:false},
		{id: '15', reserved:false, claimed:false},
		{id: '16', reserved:false, claimed:false},
		{id: '17', reserved:false, claimed:false},
		{id: '18', reserved:false, claimed:false},
		{id: '19', reserved:false, claimed:false},
		{id: '20', reserved:false, claimed:false},
		]
}

const seatReducer = (state = initState, action) => {
	switch (action.type) {
		case 'RESERVE_SEAT':
			console.log('reserved seat', action.project);
			return state;
		case 'RESERVE_SEAT_ERROR':
			console.log('reserved seat error', action.err);
			return state;
		case 'CLAIM_SEAT':
			console.log('claimed seat', action.project);
			return state;
		case 'CLAIM_SEAT_ERROR':
			console.log('claimed seat error', action.err);
			return state;
		default:
			return state;
	}
}

export default seatReducer;