import axios from "axios";

import { ADD_OPPORTUNITY } from "./types";
import { MANAGE_OPPORTUNITY } from "./types";
const Heroku = "https://ivol-server.herokuapp.com/";
const Local = "http://localhost:5000/";
export const opportunityUpdate = (data) => {
  console.log("this is the data of Opp Edit that we are sendig to api", data);
  return (dispatch, getState) => {
    axios
      .post(
        Heroku.concat("api/opportunity/update"),

        { data }
        // headers: {
        //     'accept': 'application/json',
        //     'Accept-Language': 'en-US,en;q=0.8',
        //     'Content-Type': `multipart/form-data`,
        // }
      )
      .then((res) => {
        console.log("inside then case of opp update", res);
        dispatch({
          type: "UPDATE_OPPORTUNITY",
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const opportunityData = (formData) => {
  console.log("this is the data that we are sendig to api", formData);
  return (dispatch, getState) => {
    axios
      .post(
        Heroku.concat("api/opportunity/create"),
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
      .get(Heroku.concat("api/opportunity/all/active"))
      .then((res) => {
        console.log("Active opps", res);
        dispatch({
          type: "ACTIVE_OPPORTUNITY",
          payload: res,
        });
      })
      .catch((err) => {
        console.log("acive opps err",err);
      });
  };
};
export const CurrentOpportunity = (id) => {
  return (dispatch, getState) => {
    axios
      .get(Heroku.concat("api/opportunity/all/current"))
      .then((res) => {
        console.log("current opps ", res);
        dispatch({
          type: "CURRENT_OPPORTUNITY",
          payload: res,
        });
      })
      .catch((err) => {
        console.log("current opps err",err);
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
      .delete(Heroku.concat("api/opportunity/delete/") + id)
      .then((res) => {
        axios.get(Heroku.concat("api/opportunity/all/current")).then(res => {
          dispatch({
            type: "CURRENT_OPPORTUNITY",
            payload: res,
          })
        }).catch(err => {
          console.log(err)
        })
        axios
          .get(Heroku.concat("api/opportunity/all/active"))
          .then((res) => {
            dispatch({ type: "ACTIVE_OPPORTUNITY", payload: res });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const updateOpportunity = (id, data) => {
  console.log(id);
  console.log("opp update action", id, data);
  return (dispatch, getState) => {
    axios
      .put(Heroku.concat("api/opportunity/update/") + id, {
        data,
      })
      .then((res) => {
        axios.get(Heroku.concat("api/opportunity/all/current")).then(res => {
          dispatch({
            type: "CURRENT_OPPORTUNITY",
            payload: res,
          })
        }).catch(err => {
          console.log(err)
        })
        axios
          .get(Heroku.concat("api/opportunity/all/active"))
          .then((res) => {
            dispatch({ type: "ACTIVE_OPPORTUNITY", payload: res });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
