import { type RouteConfig, index, layout, route} from "@react-router/dev/routes";

export default [
    // index("routes/index.tsx"),
    layout("layouts/index-navbar.tsx", [
        index("routes/index.tsx"),
        route("case-studies/:slug","routes/case-studies.tsx"),
    ])
] satisfies RouteConfig;
