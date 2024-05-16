import axios from 'axios';
import { Cookie } from '@/utils/cookie.js';
import isTokenExpired from './tokenUtils';
// import { useRouter } from 'vue-router';

const baseURL = 'http://localhost/laravel-garments-api/public/api/'; // Laravel Api
// const router = useRouter();

const instance = axios.create({
  baseURL,
});

const refreshThreshold = 1800;

instance.interceptors.request.use(
  async (config) => {
      const token = Cookie.getCookie('token');

      if (token) {

          // Check if token is expired or nearing expiration
          const isExpired = isTokenExpired(token, refreshThreshold); // Use refresh threshold

          if (isExpired) {
              try {
                  const response = await axios.post(baseURL + 'auth/refresh', {}, {
                      headers: {
                          Authorization: `Bearer ${token}`
                      }
                  });
                  const newToken = response.data.access_token;
                  Cookie.setCookie('token', newToken);
                  config.headers.Authorization = `Bearer ${newToken}`;
              } catch (error) {
                  console.error('Error refreshing token:', error);

                  // Handle refresh failure:
                  // - Redirect to login (if applicable)
                  // - Display an error message
                  // router.push('/login'); // Assuming a login route
                  Cookie.deleteCookie("token","/","localhost")
                  window.location.href = "/login";

                  return Promise.reject(error); // Reject the promise to stop the request
              }
          } else {
              config.headers.Authorization = `Bearer ${token}`;
          }
      }

      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

export default instance;


// instance.interceptors.request.use(
//   async (config) => {
//     const token = Cookie.getCookie('token');
//     if (token && isTokenExpired(token)) {
//       try {
//         const response = await axios.post(baseURL + 'auth/refresh', {}, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         const newToken = response.data.access_token;
//         console.log(newToken)
//         Cookie.setCookie('token', newToken);
//         config.headers.Authorization = `Bearer ${newToken}`;
//       } catch (error) {
//         console.error('Error refreshing token:', error);
//         // Redirect to login page
//         // Cookie.deleteCookie("token","/","localhost")
//         window.location.href = "/login";
//         // router.push({ path: 'dashboard' });
//         return Promise.reject(error); // Reject the promise to stop the request
//       }
//     } else {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default instance;