


const initialState = {
    adminSignupStaus: false, adminSignupMessage: null, message: false,
    adminLoginStatus: false, adminLoginMessage: null, messagel: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_UP_LOADING":
            return {
                ...state,
                adminSignupStaus: true

            }
        case "ADMIN_SIGNUP_SUCCESS":
            console.log("admin signup success")
            return {
                ...state,
                message: true,
                adminSignupStaus: false,
                adminSignupMessage: 'Sinpup Success'
            }
        case "ADMIN_SIGNUP_FAIL":
            return {
                ...state,

                adminSignupStaus: false,
                adminSignupMessage: action.payload,
                message: true

            }
        case "ADMIN_LOGIN_FAIL":
            return {
                ...state,

                adminLoginStatus: false,
                adminLoginMessage: action.payload,
                messagel: true

            }
        case "ADMIN_LOGIN_SUCCESS":
            return {
                ...state,

                adminLoginStatus: false,
                adminLoginMessage: "Login Success",
                messagel: true

            }
        case "SIGN_IN_LOADING":
            return {
                ...state,

                adminLoginStatus: true,


            }
        default:
            return state

    }
}