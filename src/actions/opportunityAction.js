import axios from "axios";

import { ADD_OPPORTUNITY } from "./types";
import { MANAGE_OPPORTUNITY } from "./types";
export const opportunityData = (formData) => {
  console.log("this is the data that we are sendig to api", formData);
  return (dispatch, getState) => {
    axios
      .post(
        "https://ivol-server.herokuapp.com/api/opportunity/create",
        formData,
        {}
        // headers: {
        //     'accept': 'application/json',
        //     'Accept-Language': 'en-US,en;q=0.8',
        //     'Content-Type': `multipart/form-data`,
        // }
      )
      .then((res) => {
        console.log("inside then case", res);
        dispatch({
          type: ADD_OPPORTUNITY,
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const ActiveOpportunity = (id) => {
  return (dispatch, getState) => {
    axios
      .get("http://localhost:5000/api/opportunity/all/active")
      .then((res) => {
        console.log("Active opps", res);
        dispatch({
          type: "ACTIVE_OPPORTUNITY",
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const CurrentOpportunity = (id) => {
  return (dispatch, getState) => {
    axios
      .get("http://localhost:5000/api/opportunity/all/current")
      .then((res) => {
        console.log("current opps", res);
        dispatch({
          type: "CURRENT_OPPORTUNITY",
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const manageOpportunity = () => {
  return (dispatch) => {
    axios
      .get("https://ivol-server.herokuapp.com/api/opportunity")
      .then((res) => {
        dispatch({
          type: MANAGE_OPPORTUNITY,
          payload: res.data,
        });
      })
      .catch({});
  };
};

export const deleteOpportunity = (id) => {
  console.log(id);
  return (dispatch, getState) => {
    axios
      .delete("https://ivol-server.herokuapp.com/api/opportunity/delete/" + id)
      .then((res) => {
        axios
          .get("https://ivol-server.herokuapp.com/api/opportunity")
          .then((res) => {
            dispatch({ type: "UPDATE_OPP", payload: res.data });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const updateOpportunity = (id, title) => {
  console.log(id);
  return (dispatch, getState) => {
    axios
      .put("http://localhost:5000/api/opportunity/update/" + id, {
        title: title,
      })
      .then((res) => {
        axios
          .get("https://ivol-server.herokuapp.com/api/opportunity")
          .then((res) => {
            dispatch({ type: "UPDATE_OPP", payload: res.data });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
