
const verifyNumber = (data) => {

	const url = 'http://127.0.0.1:3000/v1/membership/auth';

	return fetch(url, {
		body: JSON.stringify(data),
		headers: {
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

export default verifyNumber;
