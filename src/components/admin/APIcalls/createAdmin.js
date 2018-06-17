
const createAdmin = ({ username, password, email, role, admin_token }) => {

	const url = 'http://127.0.0.1:3000/v1/membership/admin/create';

	return fetch(url, {
		body: JSON.stringify({ username, password, email, role }),
		headers: {
			'x-access-token': admin_token,
			'Content-Type': 'application/json'
		},
		method: 'POST',
	})
	.then(response => {
		if (response.ok) {
			return response.json();
		}
		else {
			throw Error(response.statusText);
		}
	});
};

export default createAdmin;
