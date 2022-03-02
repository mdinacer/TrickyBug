import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInUser } from "../../slices/accountSlice";
import { useAppDispatch } from "../../store/configureStore";
import { registerValidationSchema } from "./registerValidation";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import agent from "../../api/agent";

export default function Register() {
  const dispatch = useAppDispatch();
  const { state }: any | null = useLocation();
  const navigate = useNavigate();
  const [failed, setFailed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({ mode: "all", resolver: yupResolver(registerValidationSchema) });

  async function submitForm(data: FieldValues) {
    const { password2, ...user } = data;
    console.log("user", user);
    agent.Account.register(user)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="py-20 h-screen w-screen flex items-center justify-center">
      <div className="h-auto p-20 w-full max-w-xl bg-gray-300 drop-shadow-md rounded-md flex items-center justify-center">
        <div className="max-w-lg w-full ">
          <p className=" font-Oswald text-7xl text-center pb-5 uppercase">
            Sign Up
          </p>

          <form
            autoComplete="off"
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-y-2 mx-auto"
          >
            <label
              className="font-Montserrat text-sm uppercase font-bold"
              htmlFor="fullNameInput"
            >
              Full Name
            </label>
            <input
              autoComplete="off"
              id="fullNameInput"
              type={"text"}
              placeholder="Type your full name"
              className="max-w-md w-full py-2 px-5 rounded-md font-Montserrat mb-4"
              {...register("displayName")}
            />
            <label
              className="font-Montserrat text-sm uppercase font-bold"
              htmlFor="userNameInput"
            >
              User Name
            </label>
            <input
              autoComplete="off"
              id="userNameInput"
              type={"text"}
              placeholder="Type your username"
              className="max-w-md w-full py-2 px-5 rounded-md font-Montserrat mb-4"
              {...register("username")}
            />
            <label
              className="font-Montserrat text-sm uppercase font-bold"
              htmlFor="emailInput"
            >
              Email
            </label>
            <input
              autoComplete="off"
              id="emailInput"
              type={"email"}
              placeholder="Type your email"
              className="max-w-md w-full py-2 px-5 rounded-md font-Montserrat mb-4"
              {...register("email")}
            />

            <label
              className="font-Montserrat text-sm uppercase font-bold"
              htmlFor="passwordInput"
            >
              Password
            </label>

            <input
              autoComplete="off"
              id="passwordInput"
              type={"password"}
              placeholder="Type your password"
              className="max-w-md w-full py-2 px-5 rounded-md font-Montserrat"
              {...register("password")}
            />

            <label
              className="font-Montserrat text-sm uppercase font-bold"
              htmlFor="password2Input"
            >
              Confirm Password
            </label>

            <input
              autoComplete="off"
              id="password2Input"
              type={"password"}
              placeholder="Confirm your password"
              className="max-w-md w-full py-2 px-5 rounded-md font-Montserrat"
              {...register("password2")}
            />

            <input
              className={`${
                isValid ? "bg-orange-600" : "bg-orange-300"
              } text-white uppercase font-Montserrat font-bold  py-2 px-5 rounded-md my-5`}
              type="submit"
              value={isSubmitting ? "Please wait" : "Validate"}
            />
          </form>
          <Link
            to="/login"
            className="underline underline-offset-2 text-center"
          >
            <p className=" font-Montserrat text-sm ">
              Have an account!, Sign Up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
