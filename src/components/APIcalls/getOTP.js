
const getOTP = ({ country_code, number }) => {

	const url = 'http://127.0.0.1:3000/v1/membership/otp/'+country_code+'/'+number;

	return fetch(url)
			.then(response => response.json());
};

export default getOTP;
