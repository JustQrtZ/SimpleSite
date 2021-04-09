import { actions } from "./const";

const initialstate = {
	id: undefined,
	username: undefined,
	isLogIn: false,
};

export default (state = initialstate, action) => {
	switch (action.type) {
		case actions.signup:
		case actions.login:
			return {
				id: action.payload.id,
				username: action.payload.username,
				isLogIn: true,
			};

		case actions.logout:
			return initialstate;

		default:
			return state;
	}
};
