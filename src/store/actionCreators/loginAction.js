import actions from "../actions";

export default function (name, token) {
	return {
		type: actions.LOGIN_ACTION,
		value: {name, token}
	};
}
