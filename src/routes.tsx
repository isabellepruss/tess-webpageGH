import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Devastation from "./components/Devastation";
import Baroque from "./components/Baroque";
import Composers from "./components/Composers";
import Perseverance from "./components/Perseverance";
import Sources from "./components/Sources";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/devastation-and-need-for-expression/",
        element: <Devastation />,
      },
      { path: "/baroque-era/", element: <Baroque /> },
      {
        path: "/composers-respond-to-religious-divide/",
        element: <Composers />,
      },
      {
        path: "/perseverance-of-shutz-and-praetorious/",
        element: <Perseverance />,
      },
      {
        path: "/sources/",
        element: <Sources />,
      },
    ],
  },
]);

export default router;
