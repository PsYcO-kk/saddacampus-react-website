
const checkUsernameAvailability = (username) => {

	const url = 'http://127.0.0.1:3000/v1/membership/available/'+username;

	return fetch(url)
			.then(response => response.json());
};

export default checkUsernameAvailability;
