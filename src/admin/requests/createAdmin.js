import baseURL from '../../baseURL';
import { CREATE_ADMIN_URL } from '../config';

const createAdmin = ({ username, password, email, role, admin_token }) => {

	const url = baseURL + CREATE_ADMIN_URL;

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
