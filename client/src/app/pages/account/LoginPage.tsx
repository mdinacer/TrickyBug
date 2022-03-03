import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInUser } from "../../slices/accountSlice";
import { useAppDispatch } from "../../store/configureStore";
import { loginValidationSchema } from "./loginValidation";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const { state }: any | null = useLocation();
  const navigate = useNavigate();
  const newLocal = useForm({
    mode: "all",
    resolver: yupResolver(loginValidationSchema),
  });
  const {
    setValue,
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = newLocal;

  async function submitForm(data: FieldValues) {
    try {
      await dispatch(signInUser(data));
      const from = state?.from?.pathname || "/";
      navigate(from);
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    const email = state?.email;
    if (email) {
      setValue("email", email);
    }
  }, [setValue, state?.email]);

  return (
    <div className="py-20 h-screen w-screen flex items-center justify-center">
      <div className="h-auto p-20 w-full max-w-xl bg-gray-300 drop-shadow-md rounded-md flex items-center justify-center">
        <div className="max-w-lg w-full ">
          <p className=" font-Oswald text-7xl text-center pb-5 uppercase">
            Sing In
          </p>

          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-y-2 mx-auto"
          >
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
              id="passwordInput"
              type={"password"}
              placeholder="Type your password"
              className="max-w-md w-full py-2 px-5 rounded-md font-Montserrat"
              {...register("password")}
            />

            <input
              className={`${
                isValid ? "bg-orange-600" : "bg-orange-300"
              } text-white uppercase font-Montserrat font-bold  py-2 px-5 rounded-md my-5`}
              type="submit"
              disabled={!isValid}
              value={isSubmitting ? "Please wait" : "Login"}
            />
          </form>
          <Link
            to={registerPath}
            className="underline underline-offset-2 text-center"
          >
            <p className=" font-Montserrat text-sm ">
              Don't have an account!, Sign Up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

const registerPath = "/account/register";
