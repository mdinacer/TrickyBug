import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../store/configureStore";
import { fetchCurrentUser } from "../slices/accountSlice";
import Header from "../components/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import LoadingComponent from "../components/common/LoadingComponent";
import ProjectFormPage from "../pages/projects/ProjectFormPage";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(fetchCurrentUser());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  if (loading) return <LoadingComponent message="Initializing Application" />;

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
                  <ProjectsPage />
                </Suspense>
              }
            />
            <Route
              path="new"
              element={
                <Suspense fallback={<div />}>
                  <ProjectFormPage />
                </Suspense>
              }
            />
            <Route path=":slug">
              <Route
                index
                element={
                  <Suspense fallback={<div />}>
                    <ProjectDetailsPage />
                  </Suspense>
                }
              />

              <Route
                path="phases"
                element={
                  <Suspense fallback={<div />}>
                    <ProjectPhasesPage />
                  </Suspense>
                }
              />

              <Route
                path="tickets"
                element={
                  <Suspense fallback={<div />}>
                    <ProjectTicketsPage />
                  </Suspense>
                }
              />

              <Route
                path="actions"
                element={
                  <Suspense fallback={<div />}>
                    <ProjectActionsPage />
                  </Suspense>
                }
              />
            </Route>
          </Route>

          <Route path="tickets">
            <Route
              index
              element={
                <Suspense
                  fallback={
                    <LoadingComponent message="Loading Tickets please wait" />
                  }
                >
                  <TicketsPage />
                </Suspense>
              }
            />
            <Route path=":id">
              <Route
                index
                element={
                  <Suspense fallback={<div />}>
                    <TicketDetailsPage />
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

const PrivateRoute = lazy(() => import("../layout/PrivateRoute"));
const Login = lazy(() => import("../pages/account/LoginPage"));
const Register = lazy(() => import("../pages/account/RegisterPage"));
const ConfirmEmail = lazy(() => import("../pages/account/ConfirmEmailPage"));
const Profile = lazy(() => import("../pages/account/ProfilePage"));
const ProjectsPage = lazy(() => import("../pages/projects/ProjectsPage"));
const ProjectDetailsPage = lazy(
  () => import("../pages/projects/ProjectDetailsPage")
);

const ProjectPhasesPage = lazy(
  () => import("../pages/projects/ProjectPhasesPage")
);

const ProjectActionsPage = lazy(
  () => import("../pages/projects/ProjectActionsPage")
);

const ProjectTicketsPage = lazy(
  () => import("../pages/projects/ProjectTicketsPage")
);

const TicketsPage = lazy(() => import("../pages/Tickets/TicketsPage"));
const TicketDetailsPage = lazy(
  () => import("../pages/Tickets/TicketDetailsPage")
);

export default App;
