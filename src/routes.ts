import { lazy } from "solid-js";
import type { RouteDefinition } from "@solidjs/router";

import Home from "./pages/home";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/experience",
    component: lazy(() => import("./pages/experience")),
  },
  {
    path: "/about",
    component: lazy(() => import("./pages/about")),
  },
  {
    path: "/blogs",
    component: lazy(() => import("./pages/blogs")),
  },
  {
    path: "/gallery",
    component: lazy(() => import("./pages/gallery")),
  },
  {
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
];
