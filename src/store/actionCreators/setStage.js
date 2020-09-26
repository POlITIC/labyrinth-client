import {actions} from "../enums";

export default (stageName) => {
	return {
		type: actions.SET_STAGE,
		value: stageName
	};
}
