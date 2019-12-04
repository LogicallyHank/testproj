const initState = {

	projects: [
		{id: '1', title:'First Meeting', content:'Introductions'},
		{id: '2', title:'Second Meeting', content:'Slang'},
		{id: '3', title:'Third Meeting', content:'Food'}
	]
}

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('created project', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('create project error', action.err);
			return state;
		default:
			return state;
	}
}

export default projectReducer;