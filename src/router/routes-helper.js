import { isString, isArray } from "@/utils/util";

export function importComponent(filePath) {
  return () => import(`@/views${filePath.startsWith("/") ? "" : "/"}${filePath}.vue`);
}

export function transformRoutes(routes) {
  return routes.map(route => {
    if (route.component && isString(route.component)) {
      route.component = importComponent(route.component);
    }

    route.meta = route.meta || {};

    if (isArray(route.children)) {
      route.children = transformRoutes(route.children);
    }

    return route;
  });
}