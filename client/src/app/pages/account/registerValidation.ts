import * as yup from "yup";

export const registerValidationSchema = yup.object({
  displayName: yup.string().required("Email is required"),
  username: yup.string().required("Email is required"),
  title: yup.string().required("Title is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Weak password"
    ),
  password2: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});
