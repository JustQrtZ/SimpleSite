import { actions } from "./const";

const initialstate = {
	data: [],
	isLogIn: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialstate, action) => {
	switch (action.type) {
		case actions.getAllUsersRequest:
			return {
				...state,
				isLogIn: true,
			};
    case actions.getAllUsersSuccess:
      return {
        ...state,
        data: action.payload,
        isLogIn: false,
      }
    case actions.getAllUsersFail:
      return {
        isLogIn: false
      }
		case actions.blockUsers:
			return{
				isLogIn: false
			}
		default:

			return state;
	}
};
