import { createBrowserRouter } from "react-router-dom";
import StationsPage from "../pages/StationsPage";
import NavTabs from "../components/UserSettings/NavTabs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StationsPage />,
  },
  {
    path: "/directory",
    element: <div>Directory</div>,
  },
  {
    path: "/trends",
    element: <div>trends page</div>,
  },
  {
    path: "/reports",
    element: <div>reports page</div>,
  },
  {
    path: "/addons",
    element: <div>addons page</div>,
  },
  {
    path: "/user/profile",
    element: <NavTabs/>,
  },
]);
