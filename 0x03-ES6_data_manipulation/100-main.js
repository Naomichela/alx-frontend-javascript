import { queryAPI, weakMap } from './100-weak.js';

const endpoint = { protocol: 'http', name: 'getUsers' };

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // Should log 1

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // Should log 2

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

console.log(weakMap.get(endpoint)); // This will log 5 before the error is thrown

try {
  queryAPI(endpoint); // This will throw the error
} catch (error) {
  console.error(error.message); // Logs "Endpoint load is high"
}

