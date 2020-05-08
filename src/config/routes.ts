import { RouteComponentProps } from "react-router-dom";
import { Landing, Theology, ChristianEducation } from "routes";

export type RouteProps = {
  exact: boolean;
  path: string;
  component: React.FC<RouteComponentProps>;
};

export const routes: RouteProps[] = [
  {
    exact: true,
    path: "/",
    component: Landing,
  },
  {
    exact: true,
    path: "/ab-theology",
    component: Theology,
  },
  {
    exact: true,
    path: "/ab-christian-education",
    component: ChristianEducation,
  },
];
