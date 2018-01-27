import FETCH_RECENT from "../actions/types";
import FETCH_ALLTIME from "../actions/types";

export default function leadersReducer(state = [], action) {
  switch(action.type) {
    case FETCH_RECENT:
      return [action.payload.data];
    case FETCH_ALLTIME:
      return [action.payload.data];
    default:
      return state;
  }
}
