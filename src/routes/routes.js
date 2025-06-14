import path from "path";

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

export const routeConfig = [
  { path: "/", element: <></>, children: [{ path: "/", element: <></> }] },
];
