import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppTextInput from "../../components/common/TextInput";
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
    control,
    setValue,
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
    <div className="py-20 h-screen w-screen flex items-center justify-center  bg-gray-300 ">
      <div className="h-auto p-20 w-full max-w-xl drop-shadow-md rounded-md flex items-center justify-center">
        <div className="max-w-lg w-full ">
          <p className=" font-Oswald text-7xl text-center pb-5 uppercase">
            Sing In
          </p>

          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-y-2 mx-auto"
          >
            <AppTextInput
              autoComplete="off"
              type="email"
              control={control}
              label="Email"
              name="email"
              placeholder="Email"
            />

            <AppTextInput
              autoComplete="off"
              type="password"
              control={control}
              label="Password"
              name="password"
              placeholder="Password"
            />

            <input
              disabled={!isValid}
              className={`${
                isValid ? "opacity-100" : "opacity-50"
              } cursor-pointer bg-slate-800 text-white py-2 my-10 px-5 uppercase font-Oswald text-xl font-thin`}
              type="submit"
              value={isSubmitting ? "Please wait" : "Login"}
            />
          </form>
          <Link
            to={registerPath}
            className="underline underline-offset-2 text-center"
          >
            <p className=" font-Montserrat text-lg ">
              Don't have an account!, Sign Up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

const registerPath = "/account/register";
