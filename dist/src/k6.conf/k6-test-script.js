
    import http from 'k6/http';
    import { sleep } from 'k6';
  
    export const options = {
      vus: 3,
      duration: '20s',
    };
  
    export default function () {
      const url = 'https://echo-api.srv3.mtlstaging.com/api/user/auth/verify-otp';
      const params = {
        headers: {},
        params: {},
      };
  
      const response = http.post(url, {"mobile":"9995643204","otp":"000000"}, params);
      console.log('Response status: ' + response.status);
      sleep(1);
    }
    