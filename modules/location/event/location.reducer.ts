import { Action } from "redux";

const LocationState = {
  currentLocation: null,
  watchLocation: null,
  locationError : null
};

export default function(state = LocationState, action: any) {
  let result = state;
  console.log("changing location type", action.type);
  switch (action.type) {
    case "ON_LOCATION":
      result = { ...result, currentLocation: action.model };
      break;
    case "ON_LOCATION_ERROR":
        result = {...result, locationError : action.model};
        break;
    case "ON_WATCH_LOCATION":
        result = {...result, watchLocation : action.model};
        break;
  }
  return result;
}
