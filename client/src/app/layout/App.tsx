import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { fetchCurrentUser, signInUser } from "../slices/accountSlice";
import Header from "../components/Header/Header";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("../pages/account/Login"));
const Register = lazy(() => import("../pages/account/Register"));
const ConfirmEmail = lazy(() => import("../pages/account/ConfirmEmail"));

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  async function tryLogin() {
    try {
      await dispatch(
        signInUser({
          email: "bob@test.com",
          password: "Pa$$w0rd",
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense fallback={<div />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<div />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/account/verifyEmail"
          element={
            <Suspense fallback={<div />}>
              <ConfirmEmail />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
