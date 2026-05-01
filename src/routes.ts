import { lazy } from "solid-js";
import type { RouteDefinition } from "@solidjs/router";

import Home from "./pages/home/index";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/hire-me",
    component: lazy(() => import("./pages/hireme")),
  },
  {
    path: "/blogs/:id",
    component: lazy(() => import("./pages/blogs/post")),
  },
  {
    path: "/blogs",
    component: lazy(() => import("./pages/blogs")),
  },
  {
    path: "/relax",
    component: lazy(() => import("./pages/relax")),
  },
  {
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
];
