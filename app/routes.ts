import { type RouteConfig, index, layout, route} from "@react-router/dev/routes";

export default [
    // index("routes/index.tsx"),
    layout("layouts/index-navbar.tsx", [
        index("routes/index.tsx"),
        route(
            "case-studies/:slug",
            "case-studies/route.tsx"
        ),
    ])
] satisfies RouteConfig;
