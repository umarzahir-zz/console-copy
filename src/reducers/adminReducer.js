


const initialState = { adminSignupStaus: false, adminSignupMessage: null, message: false }

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
        default:
            return state

    }
}