import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { fetchCurrentUser, signInUser } from "../slices/accountSlice";
import Header from "../components/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";

const PrivateRoute = lazy(() => import("../layout/PrivateRoute"));
const Login = lazy(() => import("../pages/account/LoginPage"));
const Register = lazy(() => import("../pages/account/RegisterPage"));
const ConfirmEmail = lazy(() => import("../pages/account/ConfirmEmailPage"));
const Profile = lazy(() => import("../pages/account/ProfilePage"));
const Projects = lazy(() => import("../pages/projects/ProjectsPage"));
const ProjectDetails = lazy(
  () => import("../pages/projects/ProjectDetailsPage")
);

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
    <div className="select-none">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="projects">
            <Route
              index
              element={
                <Suspense fallback={<div />}>
                  <Projects />
                </Suspense>
              }
            />
            <Route path=":slug">
              <Route
                index
                element={
                  <Suspense fallback={<div />}>
                    <ProjectDetails />
                  </Suspense>
                }
              />
            </Route>
          </Route>

          <Route path="account">
            <Route
              path="login"
              element={
                <Suspense fallback={<div />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense fallback={<div />}>
                  <Register />
                </Suspense>
              }
            />
            <Route
              path="verifyEmail"
              element={
                <Suspense fallback={<div />}>
                  <ConfirmEmail />
                </Suspense>
              }
            />
            <Route
              index
              element={
                <Suspense fallback={<div />}>
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
