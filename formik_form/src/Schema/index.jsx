import * as Yup from "yup";


export const SignUp = Yup.object({
    firstName: Yup.string().min(6).max(15).required("Please enter your first name"),
    lastName: Yup.string().min(6).max(15).required("Please enter your last name"),
    email: Yup.string().email().required("Please enter your name"),
    password: Yup.string().min(8).required("Please enter your password"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Please must match").required(),
})
