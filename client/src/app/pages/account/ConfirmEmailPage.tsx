import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import agent from "../../api/agent";

export default function ConfirmEmailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const Status = {
    Verifying: "Verifying",
    Failed: "Failed",
    Success: "Success",
  };

  const [status, setStatus] = useState(Status.Verifying);

  function handleConfirmEmailResend() {
    agent.Account.resendEmailConfirm(email!)
      .then(() => {
        console.log("Verification email resent - please check your email");
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    agent.Account.verifyEmail(token!, email!)
      .then(() => {
        setStatus(Status.Success);
      })
      .catch(() => {
        setStatus(Status.Failed);
      });
  }, [Status.Failed, Status.Success, token, email]);

  function getBody() {
    switch (status) {
      case Status.Verifying:
        return (
          <p className="font-Montserrat text-2xl">Verifying, Please wait...</p>
        );
      case Status.Failed:
        return (
          <div className="flex flex-col justify-center items-center gap-y-10">
            <p className="font-Montserrat text-xl">
              Verification failed. You can try resending the verify link to your
              email
            </p>
            <button
              type="button"
              className="mx-auto py-1 px-5 rounded-md  bg-red-600 "
              onClick={handleConfirmEmailResend}
            >
              <p className="font-Montserrat text-base font-bold text-white uppercase">
                Resend email
              </p>
            </button>
          </div>
        );
      case Status.Success:
        return (
          <div className="flex flex-col justify-center items-center gap-y-10">
            <p className="font-Montserrat text-xl">
              Congratulations, your email has been verified. You can now login
            </p>
            <button
              type="button"
              className="mx-auto py-1 px-5 rounded-md bg-green-600 text-white"
              onClick={() => navigate("/account/login", { state: { email } })}
            >
              <p className="font-Montserrat text-base font-bold text-white uppercase">
                Login
              </p>
            </button>
          </div>
        );
    }
  }

  return (
    <div className="py-32 w-screen h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full h-auto  min-h-[30vh]  items-start justify-center flex flex-col rounded-md bg-gray-300 py-10 px-16">
        <p className="flex-initial font-Oswald text-6xl mb-10">
          Email verification
        </p>
        <div className="flex-auto w-full  mx-auto  h-auto flex flex-col items-center justify-center">
          {getBody()}
        </div>
      </div>
    </div>
  );
}
