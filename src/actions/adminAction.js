import axios from 'axios'

export const adminSignup = (data) => {
    console.log(data)
    return (dispatch, getState) => {
        //dispatch loading 
        dispatch({ type: "SIGN_UP_LOADING" })
        //api call
        console.log(data)
        const formatData = {
            email: data.email,
            password1: data.password,
            password2: data.confirmPassword
        }
        axios.post('http://localhost:5000/api/admin/register', formatData)
            .then(res => {
                console.log("signup action success")
                dispatch({ type: "ADMIN_SIGNUP_SUCCESS", payload: res })
            }).catch(err => {
                console.log(err)
                dispatch({ type: "ADMIN_SIGNUP_FAIL", payload: err.message })
            })
    }
}

export const adminLogin = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: "SIGN_IN_LOADING" })
        axios.post('http://localhost:5000/api/admin/login', data)
            .then(res => {
                if (res.status === 200)
                    dispatch({ type: "ADMIN_LOGIN_SUCCESS", payload: res.data.message })
                else
                    return dispatch({ type: "ADMIN_LOGIN_FAIL", payload: res.data.message })
            }).catch(err => {
                dispatch({ type: "ADMIN_LOGIN_FAIL", payload: err.response.data.message })
            })
    }
}