import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import { KatasPage } from "../pages/KatasPage/KatasPage";
import { paths } from "../config/paths";
import { FirstKataPage } from "../pages/FirstKataPage/FirstKataPage";
import { SecondKataPage } from "../pages/SecondKataPage/SecondKataPage";
import { ThirdKataPage } from "../pages/ThirdKataPage/ThirdKataPage";
import { ForthKataPage } from "../pages/ForthKataPage/ForthKataPage";

const routes: RouteObject[] = [
  {
    path: paths.root,
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to={paths.katas} />,
      },
      {
        path: paths.katas,
        element: <KatasPage />,
      },
      {
        path: paths.firstKata,
        element: <FirstKataPage />,
      },
      {
        path: paths.secondKata,
        element: <SecondKataPage />,
      },
      {
        path: paths.thirdKata,
        element: <ThirdKataPage />,
      },
      {
        path: paths.forthKata,
        element: <ForthKataPage />,
      },
      {
        path: "/product/*",
        element: <Navigate to={paths.firstKata} />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
