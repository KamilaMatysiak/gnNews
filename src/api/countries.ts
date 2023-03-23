export const API_URL = 'http://www.geognos.com/api/en/countries/info/all.json';

fetch(API_URL).then(data => console.log(data));