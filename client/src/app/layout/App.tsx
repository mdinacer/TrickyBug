import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { fetchCurrentUser } from "../slices/accountSlice";
import Header from "../components/Header/Header";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import LoadingComponent from "../components/common/LoadingComponent";
import ProjectFormPage from "../pages/projects/ProjectFormPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HomeIcon } from "@heroicons/react/solid";

function App() {
  const { user } = useAppSelector((state) => state.account);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

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
    <div className="select-none relative">
      <ToastContainer position="bottom-right" hideProgressBar />
      {user ? (
        <Header />
      ) : (
        pathname !== "/" && (
          <div className="fixed top-0 left-0 p-10 ">
            <Link to="/" className="flex flex-row gap-x-2 items-center">
              <HomeIcon className="h-6 w-6" />
              <p className="font-Oswald text-lg font-thin">Home</p>
            </Link>
          </div>
        )
      )}

      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />

          <Route
            path="admin"
            element={
              <Suspense fallback={<div />}>
                <PrivateRoute roles={["Admin"]}>
                  <AdminPanel />
                </PrivateRoute>
              </Suspense>
            }
          />

          <Route path="projects">
            <Route
              index
              element={
                <Suspense fallback={<div />}>
                  <PrivateRoute>
                    <ProjectsPage />
                  </PrivateRoute>
                </Suspense>
              }
            />
            <Route
              path="new"
              element={
                <Suspense fallback={<div />}>
                  <PrivateRoute>
                    <ProjectFormPage />
                  </PrivateRoute>
                </Suspense>
              }
            />
            <Route path=":slug">
              <Route
                index
                element={
                  <Suspense fallback={<div />}>
                    <PrivateRoute>
                      <ProjectDetailsPage />
                    </PrivateRoute>
                  </Suspense>
                }
              />

              <Route
                path="phases"
                element={
                  <Suspense fallback={<div />}>
                    <PrivateRoute>
                      <ProjectPhasesPage />
                    </PrivateRoute>
                  </Suspense>
                }
              />

              <Route
                path="actions"
                element={
                  <Suspense fallback={<div />}>
                    <PrivateRoute>
                      <ProjectActionsPage />
                    </PrivateRoute>
                  </Suspense>
                }
              />

              <Route
                path="tickets"
                element={
                  <Suspense fallback={<div />}>
                    <PrivateRoute>
                      <ProjectTicketsPage />
                    </PrivateRoute>
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
                  <PrivateRoute>
                    <TicketsPage />
                  </PrivateRoute>
                </Suspense>
              }
            />
            <Route path=":id">
              <Route
                index
                element={
                  <Suspense fallback={<div />}>
                    <PrivateRoute>
                      <TicketDetailsPage />
                    </PrivateRoute>
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

const AdminPanel = lazy(() => import("../pages/admin/AdminPanel"));

export default App;
