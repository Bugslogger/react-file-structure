import React from "react";
import Test from "../test/Test";
import AuthWrapper from "../components/wrappers/authWrapper";

/**
 * useRoutes hook
 * ```js
 *
 *    {
 *    path: "/",
 *    element: "",
 *    children: [],
 *    index: true,
 *   }
 *
 * ```
 * Explanation:
 * Below `routeConfig` must be passed to useRoutes react-router-dom hook.
 * path -  It takes the path of your component on which that component will be rendered.
 * element - takes the component which will be rendered on given path
 * index - by default it is false, if you want to render component on root path then set it to true. In this case you don't need to give `path` key you can ommit it.
 * children - This key take an array of object. Each object is a route config. You can have multiple routes inside a children.
 *              If your path: "/users" and you want to have sub routes like "/users/profile" them for this inside children you can create a route with "profile" and it will render your child component(inner page) on /users/profile.
 *              each object inside array contains same keys as in parent object {path, element, index, etc}
 *
 */

// compoents
const Dashboard = React.lazy(() => import("../view/dashboard/dashboard"));
const Login = React.lazy(() => import("../view/login/login"));
const Profile = React.lazy(() => import("../view/profile/profile"));
const RouterWithLayout = React.lazy(() => import("./RouterWithLayout"));


export const routeConfig = [
  {
    path: "/",
    element: (
      <AuthWrapper>
        <RouterWithLayout>
          <Dashboard />
        </RouterWithLayout>
      </AuthWrapper>
    ),
    // children: [{ path: "/", element: <></> }],
  },
  {
    path: "/profile",
    element: (
      <AuthWrapper>
        <RouterWithLayout>
          <Profile />
        </RouterWithLayout>
      </AuthWrapper>
    ),
  },
  {
    path: "/test",
    element: (
      <AuthWrapper>
        <RouterWithLayout>
          <Test />
        </RouterWithLayout>
      </AuthWrapper>
    ),
  },
  {
    path: "/login",
    element: <Login />,
    // children: [{ path: "/", element: <></> }],
  },
];
