import baseURL from '../../baseURL';
import { GET_OTP_URL } from '../config';

const getOTP = ({ country_code, number }) => {

	const url = baseURL + GET_OTP_URL(country_code, number);

	return fetch(url)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				else {
					throw Error(response.statusText);
				}
			});
};

export default getOTP;
