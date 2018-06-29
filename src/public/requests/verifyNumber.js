import baseURL from '../../baseURL';
import { VERIFY_NUMBER_URL } from '../config';

const verifyNumber = (data) => {

	const url = baseURL + VERIFY_NUMBER_URL;

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

export default verifyNumber;
