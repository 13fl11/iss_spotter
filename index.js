// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('142.126.202.202', (error, data) => {
//   if (error) {
//     console.log("it didn't work!", error)
//   } else {
//     console.log("it worked! Returned coordinates:", data)
//   }
// });

const coordi ={latitude: '43.7806', longitude: '-79.3503'};

//const coordi = { latitude: '49.27670', longitude: '-123.13000' };
fetchISSFlyOverTimes (coordi, (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , data);
})