import * as yup from "yup";

export const loginValidationSchema = yup.object({

    email: yup.string().email().required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
    ,
});
