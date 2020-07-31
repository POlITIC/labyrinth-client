const SERVER_URL = "http://localhost:4040";

/**
 *
 * @param {Object} data
 * @return {Promise<Response>}
 */
const post = (data, url) => {
	return new Promise((resolve, reject) => {
		fetch(SERVER_URL + url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((response) => {
			if (response.status >= 200 && response.status < 300 && response.ok) {
				resolve(response.json());
			} else {
				console.error("POST failed", response);
				reject(resolve);
			}
		});
	});

};


export const login = (name) => {
	return post({name}, "/login");
};
