import baseURL from '../../baseURL';
import { CREATE_MERCHANT_URL } from '../config';

const createMerchant = ({ name, email, password, country_code, number, alternate_country_code, alternate_number, admin_token }) => {

	const url = baseURL + CREATE_MERCHANT_URL;

	return fetch(url, {
		body: JSON.stringify({  name, email, password, country_code, number, alternate_country_code, alternate_number }),
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

export default createMerchant;
