import baseURL from '../../baseURL';
import { MEMBERSHIP_DATA_URL } from '../config';

const getMembershipData = (admin_token) => {

	const url = baseURL + MEMBERSHIP_DATA_URL;

	return fetch(url, {
		headers: {
			'x-access-token': admin_token
		}
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

export default getMembershipData;
