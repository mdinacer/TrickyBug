import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInUser } from "../../slices/accountSlice";
import { useAppDispatch } from "../../store/configureStore";
import { registerValidationSchema } from "./registerValidation";

export default function Login() {
  const dispatch = useAppDispatch();
  const { state }: any | null = useLocation();
  const navigate = useNavigate();
  const [failed, setFailed] = useState(false);
  const newLocal = useForm({ mode: "all" });
  const {
    setValue,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = newLocal;

  async function submitForm(data: FieldValues) {
    try {
      await dispatch(signInUser(data));
      const from = state?.from?.pathname || "/";
      navigate(from);
    } catch (error: any) {
      console.log(error);
      setFailed(true);
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
              {...register("email", { required: "Email is required" })}
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
              {...register("password", { required: "Password is required" })}
            />

            <input
              className="text-white uppercase font-Montserrat font-bold bg-orange-600 py-2 px-5 rounded-md my-5"
              type="submit"
              disabled={isSubmitting}
              value={isSubmitting ? "Please wait" : "Login"}
            />
          </form>
          <Link
            to="/register"
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
function yupResolver(
  registerValidationSchema: any
): import("react-hook-form").Resolver<FieldValues, any> | undefined {
  throw new Error("Function not implemented.");
}
