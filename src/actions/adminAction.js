import axios from "axios";

export const adminSignup = (data) => {
  console.log(data.selectedFile.name);
  console.log(data);
  const textData = {
    name: data.name,
    email: data.email,
    password: data.password,
  };
  const imageData = new FormData();
  imageData.append("email", data.email);
  imageData.append("fileData", data.selectedFile, data.selectedFile.name);
  return (dispatch, getState) => {
    //dispatch loading
    dispatch({ type: "SIGN_UP_LOADING" });
    // axios all.

    axios
      .post("http://localhost:5000/api/admin/createagency", textData)

      .then((text) => {
        console.log("then axios");
        console.log(text);
        if (text.status === 200) {
          console.log("agency text signup  success.", text.data.message);
          dispatch({
            type: "ADMIN_SIGNUP_SUCCESS",
            payload: text.data.message,
          });
          axios
            .post(
              "http://localhost:5000/api/admin/agencyimage",
              imageData
              // {
              //     headers:
              //     {
              //         Accept: 'application/json',
              //         'Content-Type': 'multipart/form-data',
              //     }
              // }
            )
            .then((image) => {
              if (image.status === 200)
                console.log("Agency image upaload to aws s3 bucket success.");
              if (image.status !== 200)
                console.log("Agency image uploat to aws Failed.*");
            })
            .catch((err) => console.log("agency image error ", err));
        }
        if (text.status === 400) {
          console.log("agnecy text singup failed.*", text);
          dispatch({ type: "ADMIN_SIGNUP_FAIL" });
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response && err.response.status === 400) {
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

export const adminLogin = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: "SIGN_IN_LOADING" });
    axios
      .post("http://localhost:5000/api/admin/login", data)
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
  const server = "http://localhost:5000/";
  return (dispatch, getState) => {
    // Api post call
    axios
      .post(server.concat(apiPath), email)
      .then((res) => {
        console.log(`forgto password action then... ${res}`);
      })
      .catch((err) => {
        console.log(`forgto password action catch... ${err}`);
      });
  };
};
