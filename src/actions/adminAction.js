import axios from "axios";

export const resetAdminMessage = () => (dispatch) => {
  dispatch({ type: "ADMIN_RESET" });
};
export const resetAgencyMessage = () => (dispatch) => {
  console.log("agnecy reset action");
  dispatch({ type: "AGENCY_RESET" });
};

export const creatAdmin = (data) => {
  console.log(data);
  return (dispatch, getState) => {
    dispatch({ type: "SIGN_UP_LOADING" });
    axios
      .post("http://localhost:5000/api/admin/register", data)
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
        if (err.response && err.response.status === 400) {
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
  // console.log(data.selectedFile.name);

  console.log(data);

  const textData = {
    name: data.name,
    userName: data.userName,
    email: data.email,
    password1: data.password1,
    password2: data.password2,
  };
  // const imageData = new FormData();
  // imageData.append("email", data.email);
  // imageData.append("fileData", data.selectedFile, data.selectedFile.name);
  return (dispatch, getState) => {
    //dispatch loading
    dispatch({ type: "CREATING_AGENCY_LOADING" });
    // axios all.

    axios
      .post(
        // "https://ivol-server.herokuapp.com/api/admin/createagency",
        "http://localhost:5000/api/admin/createagency",
        textData
      )

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
      .post("https://ivol-server.herokuapp.com/api/admin/login", data)
      .then((res) => {
        if (res.status === 200)
          dispatch({ type: "ADMIN_LOGIN_SUCCESS", payload: res.data.message });
        else
          return dispatch({
            type: "ADMIN_LOGIN_FAIL",
            payload: res.data.message,
          });
      })
      .catch((err) => {
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
      .get("http://localhost:5000/api/admin/agencymember")
      .then((user) => {
        console.log(user.data);
        dispatch({ type: "AGENCY_MEMBERS", payload: user.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
