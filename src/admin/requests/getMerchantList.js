import baseURL from '../../baseURL';
import { GET_MERCHANT_LIST_URL } from '../config';

const getMerchantList = (admin_token) => {

	const url = baseURL + GET_MERCHANT_LIST_URL;

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

export default getMerchantList;
