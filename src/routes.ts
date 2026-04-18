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
    path: "/gallery",
    component: lazy(() => import("./pages/gallery")),
  },
  {
    path: "/fun",
    component: lazy(() => import("./pages/fun")),
  },
  {
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
];
