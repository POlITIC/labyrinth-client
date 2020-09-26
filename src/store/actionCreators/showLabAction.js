import {actions} from "../enums";

export default function (config) {
	return {
		type: actions.SHOW_LAB_ACTION,
		value: {config}
	};
}
