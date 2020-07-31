/**
 *
 * @param {Object} data
 * @param {string} data.name
 * @param {string} data.token
 */
export default function ({name, token}) {

	if (name && token) {
		return {
			loggedIn: true,
			token, name
		}
	}

	return {
		loggedIn: false
	}

};
