import { FETCH_OPPORTUNITIES } from "../actions/types.js";

const initialState = {
  opportunities: null,
  opportunityName: "",
  opportunityLevel: "",
  peopleRequired: "",
  date: new Date(),
  calendar: false,
  ActiveOpps: null,
  currentOpps: null,
};
const opportunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OPPORTUNITIES: {
      return state;
    }
    case "ACTIVE_OPPORTUNITY": {
      console.log("reducer active ", action.payload.data);
      return {
        ...state,
        ActiveOpps: [...action.payload.data],
      };
    }
    case "CURRENT_OPPORTUNITY": {
      console.log("reducer current ", action.payload.data);
      return {
        ...state,
        currentOpps: [...action.payload.data],
      };
    }
    case "MANAGE_OPPORTUNITY":
      return {
        opportunities: [...action.payload],
      };

    case "ADD_OPPORTUNITY":
      return state;

    case "UPDATE_OPP": {
      return {
        opportunities: [...action.payload],
      };
    }
    default:
      return { ...state };
  }
};
export default opportunityReducer;
