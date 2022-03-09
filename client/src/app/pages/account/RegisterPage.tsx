import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerValidationSchema } from "./registerValidation";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import agent from "../../api/agent";
import AppTextInput from "../../components/common/TextInput";
import { useState } from "react";

export default function RegisterPage() {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm({ mode: "all", resolver: yupResolver(registerValidationSchema) });

  async function submitForm(data: FieldValues) {
    const { password2, ...user } = data;
    agent.Account.register(user)
      .then((response) => {
        setRegisterSuccess(true);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="py-20 h-screen w-screen flex items-center justify-center bg-gray-300">
      <div className="h-auto p-20 w-full max-w-2xl  drop-shadow-md rounded-md flex items-center justify-center">
        {!registerSuccess ? (
          <div className="max-w-lg w-full ">
            <p className=" font-Oswald text-7xl text-center pb-10 uppercase">
              Sign Up
            </p>

            <form
              autoComplete="off"
              onSubmit={handleSubmit(submitForm)}
              className="flex flex-col gap-y-5 mx-auto"
            >
              <AppTextInput
                autoComplete="off"
                type="text"
                control={control}
                label="Full Name"
                name="displayName"
                placeholder="Full Name"
                fullWidth
              />

              <AppTextInput
                autoComplete="off"
                type="text"
                control={control}
                label="Username"
                name="username"
                placeholder="Username"
                fullWidth
              />

              <AppTextInput
                autoComplete="off"
                type="email"
                control={control}
                label="Email"
                name="email"
                placeholder="Email"
                fullWidth
              />

              <AppTextInput
                autoComplete="off"
                type="password"
                control={control}
                label="Password"
                name="password"
                placeholder="Password"
                fullWidth
              />

              <AppTextInput
                autoComplete="off"
                type="password"
                control={control}
                label="Confirm your password"
                name="password2"
                placeholder="Confirm your password"
                fullWidth
              />

              <input
                disabled={!isValid}
                className={`${
                  isValid ? "opacity-100" : "opacity-50"
                } cursor-pointer bg-slate-800 text-white py-2 my-10 px-5 uppercase font-Oswald text-xl font-thin`}
                type="submit"
                value={isSubmitting ? "Please wait" : "Create Account"}
              />
            </form>
            <Link
              to={loginPath}
              className="underline underline-offset-2 text-center"
            >
              <p className=" font-Montserrat text-lg ">
                Have an account!, Sign In
              </p>
            </Link>
          </div>
        ) : (
          <div className=" w-full flex items-center justify-center">
            <div>
              <p className=" font-Oswald text-3xl font-thin pb-3">
                Registration successful
              </p>
              <p className="font-Montserrat text-lg">
                A confirmation email was sent to your email address for
                confirmation.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const loginPath = "/account/login";
