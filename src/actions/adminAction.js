import axios from "axios";
const Heroku = "https://ivol-server.herokuapp.com/";
const Local = "http://localhost:5000/";

export const resetAdminMessage = () => (dispatch) => {
  dispatch({ type: "ADMIN_RESET" });
};
export const resetAgencyMessage = () => (dispatch) => {
  console.log("agnecy reset action");
  dispatch({ type: "AGENCY_RESET" });
};

export const adminUpdatePassReset = () => (dispatch) => {
  console.log("admin password reset action");
  dispatch({ type: "ADMIN_RESET" });
};

export const updateAdminCredentials = (id, password) => {
  console.log({ id, password });
  return (dispatch, getState) => {
    axios
      .put(Heroku.concat("api/admin/updatecredentials"), {
        id,
        password,
      })
      .then((admins) => {
        console.log(admins);
        dispatch({
          type: "ADMINS_CREDENTIALS_UPDATE",
        });
      })
      .catch((err) => {
        // dispatch({ type: "ADMINS_LOADED", payload: err.message });
        console.log(err.message);
      });
  };
};

export const getAllAdmin = () => {
  return (dispatch, getState) => {
    axios
      .get(Heroku.concat("api/admin/alladmins"))
      .then((admins) => {
        console.log(admins.data.message);
        dispatch({ type: "ADMINS_LOADED", payload: admins.data.message });
      })
      .catch((err) => {
        // dispatch({ type: "ADMINS_LOADED", payload: err.message });
        console.log(err.message);
      });
  };
};

export const creatAdmin = (data) => {
  const imageData = new FormData();
  imageData.append("file", data.selectedFile);
  imageData.append("name", data.name);
  imageData.append("userName", data.userName);
  imageData.append("email", data.email);
  imageData.append("password1", data.password1);
  imageData.append("password2", data.password2);
  console.log(data);
  return (dispatch, getState) => {
    dispatch({ type: "SIGN_UP_LOADING" });
    axios
      .post(Heroku.concat("api/admin/register"), imageData, {})
      .then((text) => {
        console.log("then axios");
        console.log(text);
        if (text.status === 400) {
          console.log("agnecy text singup failed.*", text);
          dispatch({ type: "ADMIN_SIGNUP_FAIL" });
        }
        dispatch({ type: "ADMIN_SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        console.log(err.response);
        if (
          (err.response && err.response.status === 400) ||
          err.response.status === 422
        ) {
          console.log(err.response.data.message);
          dispatch({
            type: "ADMIN_SIGNUP_FAIL",
            payload: err.response.data.message,
          });
        }
        if (!err.response) {
          console.log(err);
          dispatch({ type: "ADMIN_SIGNUP_FAIL", payload: "Network Error" });
        }
      });
  };
};
export const createAgency = (data) => {
  const imageData = new FormData();
  imageData.append("file", data.selectedFile);
  imageData.append("name", data.name);
  imageData.append("userName", data.userName);
  imageData.append("email", data.email);
  imageData.append("password1", data.password1);
  imageData.append("password2", data.password2);
  // imageData.append("file", data.selectedFile);

  return (dispatch, getState) => {
    //dispatch loading
    dispatch({ type: "CREATING_AGENCY_LOADING" });
    // axios all.

    axios
      .post(Heroku.concat("api/admin/createagency"), imageData, {})
      .then((text) => {
        console.log("then axios");
        console.log(text);
        if (text.status === 200) {
          console.log("agency text signup  success.", text.data.message);
          dispatch({
            type: "AGENCY_SIGNUP_SUCCESS",
            payload: text.data.message,
          });
          // axios
          //   .post(
          //     "https://ivol-server.herokuapp.com/api/admin/agencyimage",
          //     imageData
          //     // {
          //     //     headers:
          //     //     {
          //     //         Accept: 'application/json',
          //     //         'Content-Type': 'multipart/form-data',
          //     //     }
          //     // }
          //   )
          //   .then((image) => {
          //     if (image.status === 200)
          //       console.log("Agency image upaload to aws s3 bucket success.");
          //     if (image.status !== 200)
          //       console.log("Agency image uploat to aws Failed.*");
          //   })
          //   .catch((err) => console.log("agency image error ", err));
        }
        if (text.status === 400) {
          console.log("agnecy text singup failed.*", text);
          dispatch({ type: "AGENCY_SIGNUP_FAIL" });
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response && err.response.status === 400) {
          dispatch({
            type: "AGENCY_SIGNUP_FAIL",
            payload: err.response.data.message,
          });
        }
        if (!err.response) {
          console.log(err);
          dispatch({ type: "AGENCY_SIGNUP_FAIL", payload: "Network Error" });
        }
      });
  };
};

export const adminLogin = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: "SIGN_IN_LOADING" });
    axios
      .post(Heroku.concat("api/admin/login"), data)
      .then((res) => {
        // console.log("login success");
        if (res.status === 200) {
          console.log("login success");
          dispatch({ type: "ADMIN_LOGIN_SUCCESS", payload: res.data.message });
        } else {
          console.log("login failed");

          return dispatch({
            type: "ADMIN_LOGIN_FAIL",
            payload: res.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "ADMIN_LOGIN_FAIL",
          payload: err.response.data.message,
        });
      });
  };
};

// Forgot password integration.
export const ResetPasswordLink = (email) => {
  console.log(`Reset password link sending Action ... ${email}`);
  const apiPath = "api/admin/forgotpassword";
  const server = "https://ivol-server.herokuapp.com/";
  return (dispatch, getState) => {
    // Api post call
    axios
      .post(server.concat(apiPath), { email })
      .then((res) => {
        console.log(`forgto password action then... ${res.data.message}`);
      })
      .catch((err) => {
        console.log(
          `forgto password action catch... ${err.response.data.message}`
        );
      });
  };
};
export const ResetState = () => {
  return (dispatch, getState) => {
    dispatch({ type: "RESET_LOGINMESSAGE" });
  };
};
export const ResetPassword = (data) => {
  console.log(`Reset Password Action...${data}`);
  const apiPath = "api/admin/resetpassword";
  const server = "https://ivol-server.herokuapp.com/";
  return (dispatch, getState) => {
    axios
      .post(server.concat(apiPath), data)
      .then((res) => {
        console.log(`${res.data.message}`);
      })
      .catch((err) => console.log(`Failed! . Password Reset Failed..`));
  };
};

export const AgencyList = () => {
  return (dispatch, getState) => {
    axios
      .get(Heroku.concat("api/admin/agency"))
      .then((user) => {
        console.log("agency all tehen",user.data);
        dispatch({ type: "AGENCY_MEMBERS", payload: user.data });
      })
      .catch((err) => {
        console.log("agnecy all err",err);
      });
  };
};
