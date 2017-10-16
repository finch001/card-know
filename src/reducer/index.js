const initialState = {
	card: [
		'drakeet',
		'lzyzsd',
		'LyndonChin'
	],
	loading: false,
	current: []
};

export function storiesReducer(state = initialState, action) {
	switch (action.type) {
		default: {
			return state;
		}
	}
}

export default storiesReducer;
