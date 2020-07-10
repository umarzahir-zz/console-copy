const initialState = {
  adminSignupStaus: false,
  adminSignupMessage: null,
  message: false,
  adminLoginStatus: false,
  adminLoginMessage: null,
  messagel: false,
  agencyMembers: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "AGENCY_MEMBERS":
      return {
        ...state,
        agencyMembers: action.payload,
      };

    case "SIGN_UP_LOADING":
      return {
        ...state,
        adminSignupStaus: true,
      };
    case "ADMIN_SIGNUP_SUCCESS":
      console.log("admin signup success");
      return {
        ...state,
        message: true,
        adminSignupStaus: false,
        adminSignupMessage: "Signup Success",
      };
    case "ADMIN_SIGNUP_FAIL":
      return {
        ...state,

        adminSignupStaus: false,
        adminSignupMessage: action.payload,
        message: true,
      };
    case "ADMIN_LOGIN_FAIL":
      console.log("login reducer fail and payload is:", action.payload);
      return {
        ...state,
        adminLoginMessage: action.payload,
        messagel: true,
        adminLoginStatus: false,
      };
    case "ADMIN_LOGIN_SUCCESS":
      console.log("login reducer success and the payload is :", action.payload);
      return {
        ...state,
        adminLoginStatus: false,
        adminLoginMessage: "Login Success",
        messagel: true,
      };
    case "SIGN_IN_LOADING":
      return {
        ...state,
        adminLoginStatus: true,
      };
    default:
      return state;
  }
};
