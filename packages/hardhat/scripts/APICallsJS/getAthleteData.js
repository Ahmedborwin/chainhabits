// build HTTP request object
const athleteId = args[0];
const beforeDate = args[1];
const afterDate = args[2];

const stravaGetAtheleteRequest = Functions.makeHttpRequest({
  url: `https://www.strava.com/api/v3/athlete/activities?before=${beforeDate}&after=${afterDate}&page=1&per_page=30`,
  headers: {
    "Content-Type": `application/json`,
    Authorization: `Bearer 9b319fc542e8cd2e3284d76453612b9c5e5b9a45`,
  },
});

// Make the HTTP request

const stravaGetAtheleteResponse = await stravaGetAtheleteRequest;

if (stravaGetAtheleteResponse.error) {
  console.log(JSON.stringify(stravaGetAtheleteResponse));
  throw new Error("STRAVA Error", stravaGetAtheleteResponse.error);
}

const data = stravaGetAtheleteResponse["data"];

if (data.Response === "Error") {
  console.error(data.Message);
  throw Error(`Functional error. Read message: ${data.Message}`);
}

let arrayOfRuns = data.filter(event => {
  return event.workout_type == 0;
});

console.log(arrayOfRuns);
const initialValue = 0;
let distanceLogged = arrayOfRuns.reduce((acc, event) => {
  return acc + parseInt(event.distance);
}, 0);

distanceLogged / 100;

console.log("meters logged:", distanceLogged);

return Functions.encodeUint256(distanceLogged);
