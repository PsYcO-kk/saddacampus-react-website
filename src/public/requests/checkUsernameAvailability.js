import baseURL from '../../baseURL';
import { CHECK_USERNAME_AVAILABILITY_URL } from '../config';

const checkUsernameAvailability = (username) => {

	const url = baseURL + CHECK_USERNAME_AVAILABILITY_URL(username);

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

export default checkUsernameAvailability;
