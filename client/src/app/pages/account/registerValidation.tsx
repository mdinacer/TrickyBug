import * as yup from "yup";

export const registerValidationSchema = yup.object({
  displayName: yup.string().required("Email is required"),
  username: yup.string().required("Email is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must at least 8 characters long and must contain: " +
        "one uppercase,one lowercase and one alphanumeric character."
    ),
  password2: yup
    .string()
    .when("password", (password, field) =>
      password ? field.required().oneOf([yup.ref("password")]) : field
    ),
});
