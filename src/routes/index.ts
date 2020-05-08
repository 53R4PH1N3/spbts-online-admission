import { lazy } from "react";

export const Landing = lazy(() => import("./Landing"));
export const Theology = lazy(() => import("./Theology"));
export const ChristianEducation = lazy(() => import("./ChistianEd"));

export * from "./Types";
export * from "./Theology";
