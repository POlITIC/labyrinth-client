import loginReducer from "./loginReducer";
import actions from "../actions";

export default function reducer(state, action) {
	switch(action.type) {
		case actions.LOGIN_ACTION: state.loginData = loginReducer(action.value); break;
	}

	return Object.assign({}, state);
}
