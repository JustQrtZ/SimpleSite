import { actions } from "./const";

const initialstate = {
	id: undefined,
	username: undefined,
	isLogIn: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
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
