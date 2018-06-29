import baseURL from '../../baseURL';
import { CREATE_PROFILE_URL } from '../config';

const createProfile = ({ country_code, number, username, profilepic, token }) => {

	const url = baseURL + CREATE_PROFILE_URL;

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
			throw Error(response.statusText);
		}
	});
};

export default createProfile;
