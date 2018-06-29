import baseURL from '../../baseURL';
import { ADMIN_AUTH_URL } from '../config';

const adminLogin = (data) => {

	const url = baseURL + ADMIN_AUTH_URL;

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
			throw Error(response.statusText);
		}
	});
};

export default adminLogin;
