
const getOTP = ({ country_code, number }) => {

	const url = 'http://127.0.0.1:3000/v1/membership/otp/'+country_code+'/'+number;

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
