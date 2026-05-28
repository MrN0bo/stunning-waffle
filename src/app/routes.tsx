import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Inicio } from "./pages/Inicio";
import { Tienda } from "./pages/Tienda";
import { CategoryDetail } from "./pages/CategoryDetail";
import { Restauracion } from "./pages/Restauracion";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Inicio },
      { path: "tienda", Component: Tienda },
      { path: "categoria/:id", Component: CategoryDetail },
      { path: "restauracion", Component: Restauracion },
    ],
  },
]);