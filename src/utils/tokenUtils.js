import { jwtDecode } from "jwt-decode";

// Function to check if token is expired
// export default function isTokenExpired(token) {
//     try {
//         const decoded = jwtDecode(token);
//         // Check if token is expired
//         return decoded.exp < Date.now() / 1000;
//     } catch (error) {
//         // Token is invalid or could not be decoded
//         return true;
//     }
// };

export default function isTokenExpired(token, refreshThreshold = 1800) { // Default refresh threshold (in seconds)
  try {
    const decoded = jwtDecode(token);
    const expirationTime = decoded.exp;
    const currentTime = Math.floor(Date.now() / 1000);

    // Check if token is expired or nearing expiration (using refresh threshold)
    return expirationTime - currentTime < refreshThreshold;
  } catch (error) {
    // Token is invalid or could not be decoded
    return true; // Assume expired for safety
  }
}

// const isTokenExpired = (token) => {
//     try {
//         const decoded = jwt_decode(token);
//         // Check if token is expired
//         return decoded.exp < Date.now() / 1000;
//     } catch (error) {
//         // Token is invalid or could not be decoded
//         return true;
//     }
// };


// // Function to check if the token has expired
// export function isTokenExpired(token) {
//     if (!token) return true; // Token is considered expired if it's not provided
//     const expiryDate = new Date(token.expires_at); // Assuming your token has an expiry date property
//     return expiryDate < new Date(); // Return true if the token has expired
// }

// Function to refresh the token
// export async function refreshToken(refreshToken) {
//     try {
//         // Call your API endpoint to refresh the token
//         const response = await axios.post('/refresh-token', { refresh_token: refreshToken });
//         return response.data.access_token; // Return the new access token
//     } catch (error) {
//         console.error('Error refreshing token:', error);
//         throw error; // Rethrow the error for handling in the calling code
//     }
// }