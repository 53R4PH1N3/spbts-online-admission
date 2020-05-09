import { RouteComponentProps } from "react-router-dom";
import {
  Landing,
  Theology,
  ChristianEducation,
  KinderGarden,
  Elementary,
  JHSchool,
  SHSchool,
} from "routes";

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
  {
    exact: true,
    path: "/kinder-2",
    component: KinderGarden,
  },
  {
    exact: true,
    path: "/elementary",
    component: Elementary,
  },
  {
    exact: true,
    path: "/junior-high",
    component: JHSchool,
  },
  {
    exact: true,
    path: "/senior-high",
    component: SHSchool,
  },
];
