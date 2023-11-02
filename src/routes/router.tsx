import { FinishPage } from "@/pages/finish";
import { Root } from "@/pages/root";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/finish",
    element: <FinishPage />,
  },
  {
    path: "/",
    element: <Root />,
  },
]);
