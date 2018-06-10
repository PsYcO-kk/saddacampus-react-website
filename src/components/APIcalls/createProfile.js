
const createProfile = ({ country_code, number, username, profilepic, token }) => {

	const url = 'http://127.0.0.1:3000/v1/membership/create';

	return fetch(url, {
		body: JSON.stringify({ country_code, number, username, profilepic }),
		headers: {
			'x-access-token': token,
			'Content-Type': 'application/json'
		},
		method: 'POST',
	})
	.then(response => {
		if (response.ok) {
			return response.json();
		}
		else {
			throw new Error(response.statusText);
		}
	});
};

export default createProfile;
