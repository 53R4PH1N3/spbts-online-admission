import { lazy } from "react";

export const Landing = lazy(() => import("./Landing"));

export const Theology = lazy(() => import("./College"));
export const ChristianEducation = lazy(() => import("./ChistianEd"));

export const KinderGarden = lazy(() => import("./Kinder"));
export const Elementary = lazy(() => import("./Elementary"));
export const JHSchool = lazy(() => import("./JHSchool"));
export const SHSchool = lazy(() => import("./SHSchool"));

export * from "./Types";
export * from "./Theology";
