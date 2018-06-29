export const GET_OTP_URL = (country_code, number) => '/v1/membership/otp/'+country_code+'/'+number;

export const VERIFY_NUMBER_URL = '/v1/membership/auth';

export const CHECK_USERNAME_AVAILABILITY_URL = (username) => '/v1/membership/available/'+username;

export const CREATE_PROFILE_URL = '/v1/membership/create';
