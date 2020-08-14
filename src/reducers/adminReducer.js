const initialState = {
  isAdminLoding: false,
  adminSignupMessage: null,
  message: false,
  adminLoginStatus: false,
  adminLoginMessage: null,
  messagel: false,
  agencyMembers: null,
  isAgencyLoding: false,
  agencySignupMessage: null,
  allAdmins: null,
  adminCredentialsUpdate: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "AGENCY_MEMBERS":
      return {
        ...state,
        agencyMembers: action.payload,
      };
    case "ADMIN_RESET":
      return {
        ...state,
        adminCredentialsUpdate: false,
      };
    case "ADMINS_CREDENTIALS_UPDATE":
      return {
        ...state,
        adminCredentialsUpdate: true,
      };
    case "ADMINS_LOADED":
      return {
        ...state,
        allAdmins: action.payload,
      };
    case "ADMIN_RESET":
      return {
        ...state,
        adminSignupMessage: null,
      };
    case "AGENCY_RESET":
      console.log("agency reset reducer");
      return {
        ...state,
        agencySignupMessage: null,
      };
    case "RESET_LOGINMESSAGE":
      return {
        ...state,
        adminLoginMessage: null,
      };
    case "SIGN_UP_LOADING":
      return {
        ...state,
        isAdminLoding: true,
      };
    case "CREATING_AGENCY_LOADING":
      return {
        ...state,
        isAgencyLoding: true,
      };
    case "ADMIN_SIGNUP_SUCCESS":
      console.log("admin signup success");
      return {
        ...state,
        message: true,
        isAdminLoding: false,
        adminSignupMessage: "Admin Created.",
      };
    case "AGENCY_SIGNUP_SUCCESS":
      console.log("Agency signup success");
      return {
        ...state,
        isAgencyLoding: false,
        agencySignupMessage: "Agency Created.",
      };
    case "ADMIN_SIGNUP_FAIL":
      return {
        ...state,
        isAdminLoding: false,
        adminSignupMessage: action.payload,
        message: true,
      };
    case "AGENCY_SIGNUP_FAIL":
      return {
        ...state,
        isAgencyLoding: false,
        agencySignupMessage: action.payload,
      };
    case "ADMIN_LOGIN_FAIL":
      localStorage.setItem({ loginadmin: false });
      console.log("login reducer fail and payload is:", action.payload);
      return {
        ...state,
        adminLoginMessage: action.payload,
        messagel: true,
        adminLoginStatus: false,
      };
    case "ADMIN_LOGIN_SUCCESS":
      console.log("login reducer success and the payload is :", action.payload);
      localStorage.setItem({ loginadmin: true });
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
